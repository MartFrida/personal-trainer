/* eslint-disable react/prop-types */
import { useState } from "react"
import { theme } from "../helpers/theme"
import ContactModal from "./ContactModal";

export const InfoSection = ({ title, description, items, callToAction, sectionParrentID }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2 className={`${theme.primary} text-2xl p-4 rounded-lg  hover:scale-101 transition duration-300`}>
        {title}
      </h2>
      <p className="leading-relaxed tracking-wide text-gray-700 my-2">
        {description}
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
        {items.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
      <p className="leading-relaxed tracking-wide text-gray-700">
        {callToAction}
      </p>
      <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
        onClick={() => setIsModalOpen(true)}>
        Reserva tu sesión
      </button>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} sectionId={sectionParrentID} />
    </div>
  );
};
