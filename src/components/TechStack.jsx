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
    { name: "React", level: "	Basic" },
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
    <section className="w-full h-full pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <h1 className='text-xl font-bold text-[#BCB4FF]'>
        {animatedName}
        <span className="animate-blink">{cursor}</span>
      </h1>

      {/* Contenedor principal: Grid de 4 columnas */}
      <div className='w-full max-w-7xl mx-auto relative top-10'>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">      
          {/* Filas de contenido */}
          {Object.entries(skills).map(([category, items]) => (

            <React.Fragment key={category}>
              {/* Columna 1: Categoría */}

              <motion.div
                className="md:col-span-1 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-[#FFFEEC] capitalize">
                  {category}
                </h3>
              </motion.div>

              {/* Columnas 2-4: Skills */}
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {items.map((skill, index) => (
                  <motion.div
                    key={`${category}-${index}`}
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
                
                {/* Espacios vacíos si hay menos de 3 skills */}
                {items.length < 3 &&
                  Array.from({ length: 3 - items.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="opacity-0 h-0" />
                  ))
                }
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;