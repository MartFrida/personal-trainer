import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { theme } from "../helpers/theme";
import Dropdown from "./Dropdown";
import { Menu, X } from "lucide-react"; // Иконки бургер-меню
import namesClacesInfantiles from '../data/claces-infantiles.json'
import namesTrenPersonal from '../data/personal-training-data.json'
import namesNutrition from '../data/nutrition-data.json'

const Navbar = () => {
  const linksCI = Object.keys(namesClacesInfantiles)
    .map(key => namesClacesInfantiles[key]?.label ? { path: `#${key}`, label: namesClacesInfantiles[key].label } : null)
    .filter(Boolean);

  const linksTP = Object.keys(namesTrenPersonal)
    .map(key => namesTrenPersonal[key]?.label ? { path: `#${key}`, label: namesTrenPersonal[key].label } : null)
    .filter(Boolean);

  const linksNutrition = Object.keys(namesNutrition)
    .map(key => namesNutrition[key]?.label ? { path: `#${key}`, label: namesNutrition[key].label } : null)
    .filter(Boolean);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Реф для отслеживания кликов вне меню

  // Функция для закрытия меню
  const handleClose = () => setIsOpen(false);

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className={`${theme.primary} p-2 text-white flex justify-between items-center`}>
        {/* Логотип */}
        <Link to="/" className={`${theme.text} rounded text-xl `} onClick={handleClose}>
          <img src="/logo.png" alt="Logo" className="h-16 w-auto hover:scale-120 transition duration-200" />
        </Link>

        {/* Кнопка бургер-меню для мобильных устройств */}
        <button
          aria-label="burgerMenu"
          className="lg:hidden p-2 focus:outline-none bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Навигация для ПК */}
        <div className="hidden lg:flex space-x-4">
          <Dropdown title="Entrenador Personal" mainPath="/personal-training" links={linksTP} />
          <Dropdown title="Clases Infantiles" mainPath="/claces-infantiles" links={linksCI} />
          <Dropdown title="Nutrition" mainPath="/nutrition" links={linksNutrition} />
          <Link to="/tarifas" className={`${theme.text} ${theme.hover} p-2 rounded my-auto`}>Tarifas</Link>
        </div>
      </nav>

      {/* Выпадающее меню для мобильных устройств */}
      {isOpen && (
        <div ref={menuRef} className={`${theme.primary} lg:hidden flex flex-col items-end p-2 space-y-3 w-auto right-0 absolute`}>
          <Dropdown title="Personalized Training" mainPath="/personal-training" links={linksTP} onItemClick={handleClose} />
          <Dropdown title="Clases Infantiles" mainPath="/claces-infantiles" links={linksCI} onItemClick={handleClose} />
          <Dropdown title="Nutrition" mainPath="/nutrition" links={linksNutrition} onItemClick={handleClose} />
          <Link to="/tarifas" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
            Tarifas
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
