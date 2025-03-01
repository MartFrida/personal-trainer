import ContainerMain from "../components/ContainerMain";
import SectionRegular from "../components/SectionRegular";
import contentCInf from '../data/claces-infantiles.json'
import { InfoSection } from "../components/SectionInfo";
import { theme } from "../helpers/theme";
import HeroVideoSection from "../components/HeroVideoSection";
import heroData from "../data/hero-data-all-sections.json"

const { clacesInfantiles } = heroData

const sectionsContent = Object.keys(contentCInf)
  .map(key => contentCInf[key]?.label ? { id: `${key}`, content: contentCInf[key] } : null)
  .filter(Boolean);

export const ClacesInfantiles = () => {
  return (
    <ContainerMain className={`${theme.background} p-8`}>
      <section className={`${theme.primary} flex flex-col lg:flex-row rounded-lg gap-4 w-full`}>
        <HeroVideoSection videoHero={clacesInfantiles.videoSrc} title={clacesInfantiles.title} description={clacesInfantiles.description} />
      </section>

      {sectionsContent.map(section => {
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
