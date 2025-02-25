import ContainerMain from "../components/ContainerMain";
import SectionRegular from "../components/SectionRegular";
// import ninosGroup from '../assets/ninos-group2.jpg'
import contentCInf from '../data/claces-infantiles.json'
import { InfoSection } from "../components/SectionInfo";
import HeroVideoSection from "../components/HeroVideoSection";

/* eslint-disable react-refresh/only-export-components */
export const theme = {
  background: "bg-gray-300",
  primary: "bg-gradient-to-r from-gray-600 to-gray-950 text-white",
  secondary: "bg-gray-700 text-white",
  text: "text-gray-800",
  hover: "hover:bg-gray-800 transition duration-200",
  accent: "bg-amber-500 hover:bg-amber-600 transition duration-200",
  buttonbg: "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800",
};

const sections = [
  { id: "taekwondo", content: contentCInf.taekwondo },
  { id: "judo", content: contentCInf.judo },
  { id: "mmaNinos", content: contentCInf.mma },
  { id: "hapkido", content: contentCInf.hapkido },
  { id: "cursosdeverano", content: contentCInf.cursosDeVerano },
  { id: "excursiones", content: contentCInf.excursiones },
  { id: "airlibre", content: contentCInf.airLibre },
  { id: "juegos", content: contentCInf.juegos },
  { id: "artesinterpretativas", content: contentCInf.artesInterpretativas },
];

export const ClacesInfantiles = () => {
  return (
    <ContainerMain className={`${theme.background} p-8`}>

      <section className={`${theme.primary} flex flex-col lg:flex-row   rounded-lg gap-4 w-full`}>
        <HeroVideoSection />
        {/* <div className="flex-1 flex items-center">
          <img
            src={ninosGroup}
            alt="Niños practicando artes marciales"
            className="rounded-lg shadow-lg w-full h-auto lg:h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-white">Artes Marciales para Niños</h1>
          <p className="mt-2 text-lg">Una de nuestras líneas de especialización es la enseñanza de artes marciales a niños y jóvenes desde los 3 a los 14 años.</p>
          <ul className="mt-4 list-disc list-inside text-white">
            <li>Mejora la coordinación y condición física</li>
            <li>Fomenta la disciplina y el respeto</li>
            <li>Incrementa la confianza y autoestima</li>
            <li>Clases seguras y supervisadas por expertos</li>
          </ul>
        </div> */}
      </section>

      {sections.map(section => {
        const { title, description, items, imageUrl, callToAction } = section.content || {};

        if (!title) {
          console.error(`Missing title for section: ${section.id}`);
          return null; // Skip rendering if the content is invalid
        }

        return (
          <SectionRegular key={section.id} id={section.id}>
            <InfoSection
              title={title}
              description={description}
              items={items}
              imageUrl={imageUrl}
              callToAction={callToAction}
              sectionParrentID={section.id}
            />
          </SectionRegular>
        );
      })}
    </ContainerMain>
  );
}
