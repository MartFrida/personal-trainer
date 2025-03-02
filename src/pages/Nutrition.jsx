import ContainerMain from "../components/ContainerMain";
import { InfoSection } from "../components/SectionInfo";
import SectionRegular from "../components/SectionRegular";
import { theme } from "../helpers/theme";
import contentNutr from "../data/nutrition-data.json";
import HeroVideoSection from "../components/HeroVideoSection";
import heroData from "../data/hero-data-all-sections.json"

export const Nutrition = () => {
  const sections = Object.keys(contentNutr)
  const { nutrition } = heroData
  return (
    <ContainerMain
      className={`$${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}
    >
      <section className={`${theme.primary} flex flex-col lg:flex-row   rounded-lg gap-4 w-full`}>
        <HeroVideoSection videoHero={nutrition.videoSrc} title={nutrition.title} description={nutrition.description} />
      </section>
      {sections.map((id, index) => (
        <SectionRegular key={id} id={id} className={index > 4 ? "mt-8" : ""}>
          <InfoSection {...contentNutr[id]} />
        </SectionRegular>
      ))}
    </ContainerMain>
  );
};
