import React from 'react';
import { motion } from "framer-motion";
import { useTypewriter } from '../hooks/useTypewritter';

const skills = {
  backend: [
    { name: "Java", level: "Advanced" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "Node.js/Express", level: "Intermediate" },
  ],
  frontend: [
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Basic" },
  ],
  databases: [
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
  ],
  tools: [
    { name: "Git", level: "Intermediate" },
    { name: "Postman", level: "Intermediate" },
    { name: "Maven", level: "Intermediate" },
  ],
  methodologies: [
    { name: "Scrum/Agile", level: "Basic" },
  ],
};

const TechStack = () => {
  const { text: animatedName, cursor } = useTypewriter('Skills', {
    delay: 100,
    infinite: false,
  });
  
  return (
    <section className="w-full py-16 px-2 sm:px-4 lg:px-6 mb-8 md:mb-0">
      <h1 className='text-2xl sm:text-3xl font-bold text-[#BCB4FF]'>
        {animatedName}
        <span className="animate-blink">{cursor}</span>
      </h1>

      <div className='w-full max-w-7xl mx-auto relative top-4'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <React.Fragment key={category}>
              {/* Categoría - Sin cambios */}
              <motion.div
                className="md:col-span-1 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#FFFEEC] capitalize">
                  {category}
                </h3>
              </motion.div>

              {/* Contenedor de skills - Versión responsive */}
              <div className="md:col-span-3">
                {/* Mobile: Flex que se ajusta automáticamente */}
                <div className="flex md:hidden gap-2 flex-wrap">
                  {items.map((skill, index) => (
                    <motion.div
                      key={`mobile-${category}-${index}`}
                      className="bg-[#1E1E1E] p-3 rounded-lg shadow-lg flex-grow min-w-[calc(50%-5px)]"
                      whileHover={{ scale: 1.03 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="text-center">
                        <h4 className="text-sm sm:text-base font-medium text-[#CAC426]">{skill.name}</h4>
                        <p className="text-xs sm:text-sm text-[#FFFEEC]">{skill.level}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Desktop: Grid original (3 columnas iguales) */}
                <div className="hidden md:grid grid-cols-3 gap-2">
                  {items.map((skill, index) => (
                    <motion.div
                      key={`desktop-${category}-${index}`}
                      className="bg-[#1E1E1E] p-3 rounded-lg shadow-lg h-full flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="text-center">
                        <h4 className="text-base font-medium text-[#CAC426]">{skill.name}</h4>
                        <p className="text-sm text-[#FFFEEC]">{skill.level}</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {items.length < 3 &&
                    Array.from({ length: 3 - items.length }).map((_, i) => (
                      <div key={`empty-${i}`} className="opacity-0 h-0" />
                    ))
                  }
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;