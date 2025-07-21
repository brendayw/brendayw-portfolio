import { useState, useEffect } from 'react';

export const useTypewriter = (text, options = {}) => {
  const {
    delay = 50,       
    infinite = false, 
    cursor = true,    
    onComplete,       
  } = options;

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

    } else if (infinite) {
      setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsComplete(false);
      }, 1000);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, isComplete, onComplete]);

  return {
    text: displayedText,
    cursor: cursor ? '|' : '',
    isComplete,
  };
};