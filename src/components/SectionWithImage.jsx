/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme"

export const SectionWithImage = ({ title, description, items, imageUrl }) => {
  return (
    <section>
      <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>{title}</h2>
      <div className='flex flex-row gap-8 mt-8'>
        <div className='flex-1'>
          <p className='leading-relaxed tracking-wide text-gray-700 my-2'>{description}</p>
          <ul className='list-disc pl-6 mb-6 text-gray-700 list-none'>
            {items.map((item, index) => (
              <li key={index}>🔹 {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={imageUrl}
            alt='Training Image'
            className='rounded-lg shadow-lg max-h-[59vh] object-cover'
          />
        </div>
      </div>
    </section>
  );
};
