import CreatorsSection from "./components/Biography"
import FullscreenCarousel from "./components/Carousel"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ScriptShowcase from "./components/ScriptShowcase"
import TextHero from "./components/TextHero"
import Timeline from "./components/Timeline"

// const imageUrl = "assets/background.png"
function App() {
  return (
    <>
      <div className="jamaican-flag z-0">
      </div>

      {
        /* Background image */
        // imageUrl && (
        //   <div
        //     className="absolute inset-0 bg-cover bg-center"
        //     style={{ backgroundImage: `url(${imageUrl})` }}
        //   ></div>
        // )
      }

      <div className="z-1 relative max-w-11/12">
        <Hero 
          title="São Luís, a Jamaica Brasileira"
          subtitle="A historia do reggae na capital maranhense"
        />
        <TextHero 
          title="São Luís, a Capital Nacional do Reggae"
          text={`Em 2023, São Luís, a capital do Maranhão, foi oficialmente reconhecida como a "Capital Nacional do Reggae" pela Lei 14.668. Essa homenagem destaca a rica tradição e a importância do reggae na cultura da cidade, que é conhecida por sua vibrante cena musical e eventos como o Festival de Reggae`}
          imageUrl="https://imgs.search.brave.com/E2yCLr6E-6b5tgC6YsrkJqIWG15p_wSBF1Hs2wCbezQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTEx/MjEzNjk0L3Bob3Rv/L2JyYXppbGlhbi10/b3duLXNhby1sdWlz/LW1hcmFuaGFvLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1I/Q1gwMXFPVVJfQTNK/X1o4cGN5bDdUQUh0/eHRCc2ZYV0FvTTFr/ZWlidkZZPQ"
          align="left"
        />
        <TextHero 
          title="A Influência do Reggae na Cultura Maranhense"
          text={`A escolha de São Luís para esse título também ressalta a influência do gênero na identidade local, que combina elementos da música jamaicana com ritmos e temas brasileiros.`}
          imageUrl="https://images.unsplash.com/photo-1682989912408-004677c36cf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          align="right"
        />
        <TextHero 
          title="A Luta e a Identidade Negra"
          text={`Como ressaltado por estudiosos como o professor Carlos Benedito, o reggae de São Luís é uma expressão de luta e afirmação da identidade negra, que ultrapassa os limites da música, sendo uma linguagem para reivindicar espaço e visibilidade.`}
          imageUrl={`https://plus.unsplash.com/premium_photo-1702552109457-567930a11fc5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
        <TextHero
          text={`Além do reggae, a cidade é rica em outros ritmos tradicionais, como o samba-de-roda, tambor de crioula, uma rica variedade de “bumba meu boi” e o maracatu. Essa mistura resulta em uma sonoridade que, embora mantenha a essência do reggae, incorpora ritmos e temas locais.`}
          title="A Diversidade Musical de São Luís"
          imageUrl={`https://imgs.search.brave.com/x6VSbRexa-v2VMJoKlahCtw_vcsVuGE1K8l3LDpTmlU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2FvbHVpcy5tYS5n/b3YuYnIvaW1nZWRp/dG9yL0ZPVE8lMjAx/JTIwLSUyMFByZWZl/aXR1cmElMjBkZSUy/MFMlQzMlQTNvJTIw/THUlQzMlQURzJTIw/aW5pY2lhJTIwcHJv/Z3JhbWElQzMlQTcl/QzMlQTNvJTIwanVu/aW5hJTIwY29tJTIw/UyVDMyVBM28lMjBK/byVDMyVBM28lMjBu/b3MlMjBCYWlycm9z/JTIwZSUyMCUyMEFy/cmFpYWwlMjBkYSUy/MENpZGFkZSwlMjBu/YSUyMFByYSVDMyVB/N2ElMjBNYXJpYSUy/MEFyYWclQzMlQTNv/LmpwZw`}
          align="right"
        />
        <Timeline />
        {/* Some local artists text followed by the carousel */}
        <TextHero 
          title={"Artistas Locais de Destaque"}
          text={`São Luís é o berço de muitos artistas locais que têm contribuído significativamente para a cena reggae.`}
        />
        <FullscreenCarousel />
        <TextHero 
          title={`O Futuro do Reggae na Ilha`}
          text={`A cultura do reggae pode também evocar a busca por novas experiências, o reconhecimento de raízes históricas e a valorização da diversidade cultural que envolvem diálogos interculturais, festivais de música, e projetos que buscam unir povos através de sua herança cultural comum. A cena reggae em São Luís continua a evoluir, com novas gerações de músicos experimentando com novas sonoridades e estilos. No entanto, a essência do reggae com suas mensagens de amor, resistência e comunidade permanece intacta, criando uma identidade musical rica e vibrante que é tanto moderna quanto profundamente enraizada nas tradições locais.`}
        />
        <CreatorsSection />
        {/* This part talks about a film script, so it should be estethically different to the rest, perhaps a different background color */}
        <ScriptShowcase
          title="Roteiro: São Luís, a Jamaica Brasileira"
          imageUrl="/assets/script.png"
          summary={`Sequência é um roteiro de curta-metragem escrito por Mariel Haickel, contemplado pela Lei Paulo Gustavo por meio da SECULT (Secretaria Municipal de Cultura de São Luís – MA).

          Este romance no gênero slice of life retrata com leveza e realismo o reencontro entre Júlia e Marcos, antigos colegas de escola que nunca viveram plenamente um amor do passado. Anos depois, eles se cruzam em uma festa de reggae ao pôr do sol, à beira-mar. Júlia é uma fotógrafa ambiciosa e movida pelo trabalho; Marcos, um músico introspectivo, tenta acompanhar o ritmo acelerado da vida contemporânea.

          Enquanto dialogam sobre tempo, escolhas e visões de futuro, a história mergulha nas camadas da relação entre os dois — agora adultos, em caminhos distintos.

          Sequência é também um tributo à cultura reggae maranhense, presente no cenário, nas roupas, na música, na dança e na fala. O título faz alusão tanto às sequências de músicas tocadas por radiolas quanto à efemeridade dos momentos vividos. A atmosfera é tipicamente ludovicense: pôr do sol, som de radiola, casais dançando e o vento da orla soprando memória e paz.`}
          highlights={["São Luís", "Jamaica", "Reggae", "Cultura", "Identidade", "Sequência"]}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
