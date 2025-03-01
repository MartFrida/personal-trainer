/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { theme } from "../helpers/theme";

const Dropdown = ({ title, links, mainPath, onItemClick }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleItemClick = () => {
    setOpen(false); // Закрываем вложенный список
    if (onItemClick) onItemClick(); // Закрываем главное меню
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${theme.text} ${theme.hover} rounded relative`} ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded flex items-center focus:outline-none"
      >
        <Link to={mainPath} className="mr-2">{title}</Link>
        {/* Условный рендеринг стрелочки */}
        {open ? (
          <FaChevronUp className="text-white bg-transparent" />
        ) : (
          <FaChevronDown className="text-white bg-transparent" />
        )}
      </button>
      {open && (
        <div className={`${theme.primary} absolute right-0 mt-2 rounded shadow-lg w-48 z-50 max-h-60 lg:max-h-[100vh] overflow-y-auto`}>
          {links.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className="block px-4 py-2 bg-transparent hover:bg-gray-800"
              onClick={handleItemClick}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown