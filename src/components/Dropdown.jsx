/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded flex items-center focus:outline-none"
      >
        <Link to={mainPath} className="mr-2">{title}</Link>
        <FaChevronDown />
      </button>
      {open && (
        <div className={`${theme.primary} absolute left-0 mt-2  rounded shadow-lg w-48 z-50`}>
          {links.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className="block px-4 py-2 hover:bg-gray-200"
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