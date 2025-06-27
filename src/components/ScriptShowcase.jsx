import React from 'react';
import { motion } from 'framer-motion';

const ScriptShowcase = ({ title, imageUrl, summary, highlights = [] }) => {
  // Resalta palabras clave
  const highlightedSummary = summary.split(/(\s+)/).map((word, i) => {
    const cleanWord = word.replace(/[.,;]/g, '').toLowerCase();
    const match = highlights.map(h => h.toLowerCase()).includes(cleanWord);
    return match ? (
      <span key={i} className="text-green-400 font-semibold">{word}</span>
    ) : (
      <span key={i}>{word}</span>
    );
  });

  return (
    <section className="w-full  my-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 w-full px-4'>
          {imageUrl && (
            <motion.img
              src={imageUrl}
              alt={title}
              className="w-full rounded-lg shadow-lg mb-8 object-cover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          )}

          <motion.p
            className="text-lg md:text-xl leading-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlightedSummary}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ScriptShowcase;
