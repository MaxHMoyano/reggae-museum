import React from 'react';
import { motion } from 'framer-motion';

const TextHero = ({ title, text, imageUrl, align = 'left' }) => {
  const isLeft = align === 'left';

  return (
    <div
      className={`
        flex flex-col md:flex-row items-center justify-between 
        max-w-7xl mx-auto px-4 py-10
        ${isLeft ? 'text-left md:flex-row' : 'text-right md:flex-row-reverse'}
      `}
    >
      {/* Texto animado desde izquierda o derecha */}
      <motion.div
        className={`${imageUrl ? 'md:w-1/2' : 'w-full'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-2xl leading-10">
          {text}
        </p>
      </motion.div>

      {/* Imagen animada desde lado contrario */}
      {imageUrl && (
        <motion.img
          src={imageUrl}
          alt="Text Hero"
          className={`
            mt-8 md:mt-0 w-full md:w-1/2 h-auto rounded-lg shadow-lg 
            ${isLeft ? 'md:ml-8' : 'md:mr-8'}
          `}
          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        />
      )}
    </div>
  );
};

export default TextHero;
