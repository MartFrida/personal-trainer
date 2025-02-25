import ContainerMain from "../components/ContainerMain"
import { InfoSection } from "../components/SectionInfo"
import SectionRegular from "../components/SectionRegular"
import { theme } from "../helpers/theme"
import contentPT from '../data/personal-training-data.json'

export const PersonalizedTraining = () => {
  return (
    <ContainerMain className={`${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}>
      <SectionRegular id="running" >
        <InfoSection
          title={contentPT.running.title}
          description={contentPT.running.description}
          items={contentPT.running.items}
          imageUrl={contentPT.running.imageUrl}
        />
      </SectionRegular>

      <SectionRegular id="calistenia" >
        <InfoSection
          title={contentPT.calistenia.title}
          description={contentPT.calistenia.description}
          items={contentPT.calistenia.items}
        />
      </SectionRegular>

      <SectionRegular id='halterofilia' >
        <InfoSection
          title={contentPT.halterofilia.title}
          description={contentPT.halterofilia.description}
          items={contentPT.halterofilia.items}
          callToAction={contentPT.halterofilia.callToAction}
          imageUrl={contentPT.halterofilia.imageUrl}
        />
      </SectionRegular>

      <SectionRegular id="culturismo" >
        <InfoSection
          title={contentPT.culturismo.title}
          description={contentPT.culturismo.description}
          items={contentPT.culturismo.items}
          imageUrl={contentPT.culturismo.imageUrl}
        />

      </SectionRegular>

      <SectionRegular id="fitnes">
        <InfoSection
          title={contentPT.fitnes.title}
          description={contentPT.fitnes.description}
          items={contentPT.fitnes.items}
          callToAction={contentPT.fitnes.callToAction}
          imageUrl={contentPT.fitnes.imageUrl}
        />
      </SectionRegular>

      <SectionRegular id='natacion' className="mt-8">
        <InfoSection
          title={contentPT.natacion.title}
          description={contentPT.natacion.description}
          items={contentPT.natacion.items}
          callToAction={contentPT.natacion.callToAction}
          imageUrl={contentPT.natacion.imageUrl}
        />
      </SectionRegular>

      <SectionRegular id='senderismo' className="mt-8">
        <InfoSection
          title={contentPT.senderismo.title}
          description={contentPT.senderismo.description}
          items={contentPT.senderismo.items}
          callToAction={contentPT.senderismo.callToAction}
        />
      </SectionRegular>

      <SectionRegular id='espining' className="mt-8">
        <InfoSection
          title={contentPT.espining.title}
          description={contentPT.espining.description}
          items={contentPT.espining.items}
        />
      </SectionRegular>

      <SectionRegular id='defensa-personal' className="mt-8">
        <InfoSection
          title={contentPT.defensa.title}
          description={contentPT.defensa.description}
          items={contentPT.defensa.items}
        />
      </SectionRegular>

      <SectionRegular id='mma' className="mt-8">
        <InfoSection
          title={contentPT.mma.title}
          description={contentPT.mma.description}
          items={contentPT.mma.items}
          imageUrl={contentPT.mma.imageUrl}
        />
      </SectionRegular>

      <SectionRegular id='taichi' className="mt-8">
        <InfoSection
          title={contentPT.taichi.title}
          description={contentPT.taichi.description}
          items={contentPT.taichi.items}
          callToAction={contentPT.taichi.callToAction}
        />
      </SectionRegular>

      <SectionRegular id='estreching' className="mt-8">
        <InfoSection
          title={contentPT.estreching.title}
          description={contentPT.estreching.description}
          items={contentPT.estreching.items}
          callToAction={contentPT.estreching.callToAction}
        />
      </SectionRegular>

      <SectionRegular id='pilates' className="mt-8">
        <InfoSection
          title={contentPT.pilates.title}
          description={contentPT.pilates.description}
          items={contentPT.pilates.items}
          callToAction={contentPT.pilates.callToAction}
        />
      </SectionRegular>

      <SectionRegular id='yoga' className="mt-8">
        <InfoSection
          title={contentPT.yoga.title}
          description={contentPT.yoga.description}
          items={contentPT.yoga.items}
          callToAction={contentPT.yoga.callToAction}
        />
      </SectionRegular>

      <SectionRegular id='boxing' className="mt-8">
        <InfoSection
          title={contentPT.boxing.title}
          description={contentPT.boxing.description}
          items={contentPT.boxing.items}
          callToAction={contentPT.boxing.callToAction}
        />
      </SectionRegular>
    </ContainerMain>
  )
}
