import ContactDropdown from "../components/ContactDropdown";
import ContainerMain from "../components/ContainerMain";
import { useState } from "react"
import { theme } from "../helpers/theme"
import { useTranslation } from "react-i18next";

const Tarifas = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idElem, setIdElem] = useState()

  const handleClick = (event) => {
    const section = event.target.closest('[id]'); // Найдёт ближайший родительский элемент с id
    setIdElem(section ? section.id : 'Не найдено')
  };
  const { t } = useTranslation();
  const tarifasData = t('tarifas:variados', { returnObjects: true });

  return (
    <ContainerMain>
      <section className={`${theme.primary} p-6 rounded-lg`}>
        <h2 className="text-5xl font-bold text-center mb-6">{t("tarifas:title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tarifasData.map((tarifa, index) => (
            <div key={index} className={`${theme.background} shadow-md rounded-lg p-6 flex flex-col justify-between`}>
              <h3 className={`${theme.text} text-2xl font-semibold mb-2 text-center`}>{tarifa.title}</h3>
              <p className="text-gray-800 mb-4">{tarifa.description}</p>

              <span>
                <span className="text-gray-800 text-lg"> {tarifa.por1clase.split(" ")[0]}</span>
                <span className="text-gray-800 text-lg"> {tarifa.por1clase.split(" ").slice(1).join(' ')}</span>
              </span>
              <span>
                <span className="text-gray-800 "> {tarifa.por1mes8.split(" ")[0]}</span>
                <span className="text-gray-800 text-lg "> {tarifa.por1mes8.split(" ").slice(1, 2).join(' ')}</span>
                <span className="text-gray-800 text-lg"> {tarifa.por1mes8.split(" ").slice(2).join(' ')}</span>
              </span>

              <span>
                <span className="text-gray-800"> {tarifa.por1mes12.split(" ")[0]}</span>
                <span className="text-gray-800 text-lg "> {tarifa.por1mes12.split(" ").slice(1, 2).join(' ')}</span>
                <span className="text-gray-800 text-lg"> {tarifa.por1mes12.split(" ").slice(2).join(' ')}</span>
              </span>

<button
          className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
          onClick={(ev) => {
            handleClick(ev);
            setIsModalOpen(true);
          }}
        >
                {t("tarifas:actionBtn")}
              </button>
              
              
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full">
        {isModalOpen && <ContactDropdown isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} sectionID={idElem}/>}

        </div>
        
      </section>
    </ContainerMain>
  )
};

export default Tarifas;