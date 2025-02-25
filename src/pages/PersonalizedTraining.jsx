import ContainerMain from "../components/ContainerMain";
import { InfoSection } from "../components/SectionInfo";
import SectionRegular from "../components/SectionRegular";
import { theme } from "../helpers/theme";
import contentPT from "../data/personal-training-data.json";

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
      {sections.map((id, index) => (
        <SectionRegular key={id} id={id} className={index > 4 ? "mt-8" : ""}>
          <InfoSection {...contentPT[id]} />
        </SectionRegular>
      ))}
    </ContainerMain>
  );
};
