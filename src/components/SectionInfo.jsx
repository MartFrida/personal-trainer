/* eslint-disable react/prop-types */

import { useState } from "react"
import { theme } from "../helpers/theme"
import ContactModal from "./ContactModal";

export const InfoSection = ({ title, description, items, callToAction, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idElem, setIdElem] = useState()

  const handleClick = (event) => {
    const section = event.target.closest('[id]'); // Найдёт ближайший родительский элемент с id
    setIdElem(section ? section.id : 'Не найдено')
  };
  // console.log(idElem)
  return (
    <div>
      <h2 className={`${theme.primary} text-2xl p-4 rounded-lg  hover:scale-101 transition duration-300`}>
        {title}
      </h2>
      <div className="flex flex-col lg:flex-row my-4 gap-4 ">
        <div className="grow-3 pl-4">
          <p className="leading-relaxed tracking-wide text-gray-700 ">
            {description}
          </p>
          <ul className="list-disc text-gray-700 list-none">
            {items.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
        </div>
        {imageUrl &&
          <div className="grow-3 justify-items-end">
            <img
              src={imageUrl}
              alt='Training Image'
              className='rounded-lg shadow-lg max-h-[59vh] object-cover'
            />
          </div>
        }
      </div>
      <p className="leading-relaxed tracking-wide mb-4 text-gray-700">
        {callToAction}
      </p>
      <div className='flex justify-end w-full '>
        <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
          onClick={(ev) => {
            handleClick(ev)
            setIsModalOpen(true)
          }}>
          Contáctenos
        </button>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} sectionID={idElem} />
      </div>
    </div>
  );
};
