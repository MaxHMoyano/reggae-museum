import React from 'react';

const CreatorCard = ({ name, imageUrl, bio }) => {
  return (
    <div className="flex flex-col items-center text-center md:text-left p-6 md:p-8 bg-white shadow-md rounded-lg max-w-xl w-full h-full">
      <img
        src={imageUrl}
        alt={name}
        className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-md border-4 border-white mb-4"
      />
      <h3 className="text-2xl font-semibold mb-4">{name}</h3>
      <p className="text-sm md:text-base text-gray-800 whitespace-pre-line leading-relaxed">
        {bio}
      </p>
    </div>
  );
};

const CreatorsSection = () => {
  const marielBio = `Mariel Haickel é bióloga, roteirista e cineasta, trabalhando na criação de filmes, documentários, jogos e outras mídias audiovisuais. Possui formação em Criação Cinematográfica em Filmes de Terror pelo IEMA e no Laboratório Mulheres Narradoras.\n
  Dirigiu e roteirizou curtas-metragens como Oficina de Sons, Catty Bete e Cemitério de Guarás. No audiovisual, também atuou como assistente de direção no documentário longa Tesouro Encantado e foi produtora local do documentário internacional Decades of Change.`;

  const marceloBio = `Marcelo Durans é um artista multifacetado, quilombola do município de Peri Mirim na Baixada Maranhense. Ele se destaca como modelo, performer, fotógrafo, documentarista, educador popular e produtor cultural. Licenciado em Estudos Africanos e Afro-brasileiros pela Universidade Federal do Maranhão (UFMA).\n
  Marcelo tem suas raízes profundamente ligadas à sua ancestralidade e ao cotidiano de sua comunidade, o que reflete diretamente em seu trabalho artístico.`;

  return (
    <section className="w-full  py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 place-items-stretch">
        <CreatorCard
          name="Marcelo Durans"
          imageUrl="/images/marcelo.jpg"
          bio={marceloBio}
        />
        <CreatorCard
          name="Mariel Haickel"
          imageUrl="/assets/mariel.jpeg"
          bio={marielBio}
        />
      </div>
    </section>
  );
};

export default CreatorsSection;
