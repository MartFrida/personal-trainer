import ContainerMain from "../components/ContainerMain";
import { InfoSection } from "../components/SectionInfo";
import SectionRegular from "../components/SectionRegular";
import { theme } from "../helpers/theme";
import contentPT from "../data/personal-training-data.json";
import HeroVideoSectionPT from "../components/HeroVideoSectionPT";

const sections = [
  "running",
  "calistenia",
  "halterofilia",
  "culturismo",
  "fitnes",
  "natacion",
  "senderismo",
  "espining",
  "defensa",
  "mma",
  "taichi",
  "estreching",
  "pilates",
  "yoga",
  "boxing",
];

export const PersonalizedTraining = () => {
  return (
    <ContainerMain
      className={`$${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}
    >
      <section className={`${theme.primary} flex flex-col lg:flex-row   rounded-lg gap-4 w-full`}>
        <HeroVideoSectionPT />
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
      {sections.map((id, index) => (
        <SectionRegular key={id} id={id} className={index > 4 ? "mt-8" : ""}>
          <InfoSection {...contentPT[id]} />
        </SectionRegular>
      ))}
    </ContainerMain>
  );
};
