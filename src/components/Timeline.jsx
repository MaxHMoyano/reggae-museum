// SmoothTimeline.tsx
import { motion, useInView } from "framer-motion";
import { image } from "framer-motion/client";
import { useRef } from "react";

const timelineItems = [
  {
     year: "1970",
    title: "O Inicio do Reggae no Brasil",
    description: " O reggae chegou ao Brasil na década de 1970 e encontrou em São Luís um de seus principais centros de difusão. No Maranhão, o gênero se espalhou especialmente a partir da construção da Estrada de Ferro Carajás, que intensificou o intercâmbio cultural entre trabalhadores maranhenses e paraenses.",
    image: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/505882205_3595705550563771_5340396321898819138_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=SCQQ7mm8WusQ7kNvwHhUvC2&_nc_oc=Adl2HxFBTjaSqaC6ljU21fmnKHqdZeOx1ruQXAUmzyJFHMMIf8Q2_61zowX7Ck8AKAM&_nc_zt=23&_nc_ht=scontent.fcor10-3.fna&_nc_gid=F6LHagVAiH7GDfLL6ncWUg&oh=00_AfPRpfViyH95LCe7TRDx8E6xm-BdxoT47aJAJshjf9qM0A&oe=6862472A"
  },
  {
     year: "1990",
    title: "Consolidação e industrialização do reggae em São Luís",
    description: "Na década de 1990, o reggae se consolida como fenômeno cultural e econômico em São Luís. Clubes, radiolas, bares temáticos e programas de rádio e TV proliferam, impulsionando o surgimento de uma verdadeira indústria do reggae. Empresários, donos de radiolas e clubes investem na comercialização do gênero, promovendo festas e duelos de radiolas que atraem grandes públicos.",
    image: "https://s2.glbimg.com/GdlAG5EmW9u93CndQfkSIK-yTvA=/620x465/s.glbimg.com/jo/g1/f/original/2015/09/07/maranhao_reggae-120785_5.jpg",
  },
  {
     year: "2020",
    title: "Museu do Reggae São Luís",
    description: "O Museu do Reggae São Luís é o único fora da Jamaica e é uma proposta pioneira no Brasil fundado no ano de 2020, recebe cerca de 60 mil visitantes por ano, dirigido por Ademar Danilo uma figura histórica do movimento reggae no Maranhão. Possui um acervo riquíssimo de vídeos, fotografias históricas, discos raros, moda reggae e a evolução da cultura ao tempo, tendo assim um papel de preservar a memória e o legado reggae que faz parte do cotidiano do maranhense",
    image: "https://imgs.search.brave.com/SsNpdL2aVfrR6E8SC1fab-mkNim179lyspaaXnWZgoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWFq/ZWlib25pdG8uY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAzL3Nhby1s/dWlzLW1hcmFuaGFv/LW11c2V1LWRvLXJl/Z2dhZS1tdXJhaXMt/MTAyNHg2ODMuanBn",
  }
];

export default function SmoothTimeline() {
  return (
    <div className="flex w-full max-w-6xl mx-auto py-12 my-5 px-4">
      {/* Línea vertical a la izquierda */}
      <div className="w-16 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2" />
      </div>

      {/* Contenido a la derecha */}
      <div className="flex-1 space-y-24">
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative flex items-start">
      {/* Punto + Año */}
      <div className="absolute -left-20 top-2 flex flex-col items-end pr-2 text-right">
        {/* Año */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -10 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-500 font-medium"
        >
          {item.year}
        </motion.div>

        {/* Punto */}
        <motion.div
          className="mt-1 w-4 h-4 rounded-full bg-[#1D2D26] border-2 border-white shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
        className=" rounded-lg p-6 max-w-3xl"
      >
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4 text-xl">{item.description}</p>
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="rounded-lg w-full max-w-md"
          />
        )}
      </motion.div>
    </div>
  );
}
