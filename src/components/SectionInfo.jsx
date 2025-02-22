/* eslint-disable react/prop-types */

import { theme } from "../helpers/theme"

export const InfoSection = ({ title, description, items, callToAction }) => {
  return (
    <div>
      <h2 className={`${theme.primary} text-2xl p-4 rounded-lg border-l-4 border-amber-500 hover:scale-101 transition duration-300`}>
        {title}
      </h2>
      <p className="leading-relaxed tracking-wide text-gray-700 my-2">
        {description}
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
        {items.map((item, index) => (
          <li key={index}>🔹 {item}</li>
        ))}
      </ul>
      <p className="leading-relaxed tracking-wide text-gray-700">
        {callToAction}
      </p>
    </div>
  );
};
