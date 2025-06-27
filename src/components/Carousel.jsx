import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://culturapreta.com/wp-content/uploads/2025/05/a-cantora-compositora-e-multi-instrumentista-celia-sampaio-foto_luiza-bacelar_divulgacao.jpg?w=1024",
    text: "Célia Sampaio: Conhecida nacionalmente como a Dama do Reggae.",
  },
  {
    image: `${import.meta.env.BASE_URL}assets/nubia.jpg`,
    text: "Nubia Rodrigues causa bastante impacto com sua voz retumbante",
  },
  {
    image: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/11/883951730-tribo-de-jah-prima-imagens-jpg.jpg",
    text: "Tribo de Jah: Uma das bandas de reggae mais influentes do Brasil, formada em São Luís.",
  },
  {
    image: "https://imgs.search.brave.com/vfk7z18YBvTE7QDegMaux5BuWx4cU0bFvEeUS32eSLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXZp/c3RheWViYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MTEvZ2RhbTMuanBn/P3c9ODUw",
    text: "O Grupo de Dança Afro Malungos o GDAM  É um coletivo cultural fundado em 1986",
  },
];

export default function MinimalCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative max-w-6xl mx-auto my-12 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg"
          style={{
            overflow: "hidden",
          }}
        >
          <img
            src={slides[index].image}
            alt={`Imagen de ${slides[index].text}`}
            className="w-full object-cover max-h-[400px] sm:max-h-[500px]"
          />
          <div className="p-6 text-gray-800 bg-transparent">
            <p className="text-center text-lg sm:text-xl">{slides[index].text}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores */}
      <div className="flex justify-center gap-3 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              i === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
