import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { theme } from "../helpers/theme";
import Dropdown from "./Dropdown";
import { Menu, X } from "lucide-react"; // Иконки бургер-меню
import linksCIL from '../data/claces-infantiles.json'

const linkGH = Object.keys(linksCIL)
console.log(linkGH)

const linksCI = linkGH
  .map(key => linksCIL[key]?.label ? { path: `#${key}`, label: linksCIL[key].label } : null)
  .filter(Boolean);
console.log(linkGH)

const linksPT = [
  { path: "#running", label: "Running" },
  { path: "#calistenia", label: "Calistenia" },
  { path: "#halterofilia", label: "Halterofilia" },
  { path: "#culturismo", label: "Culturismo" },
  { path: "#fitnes", label: "Fitnes" },
  { path: "#natacion", label: "Natacion" },
  { path: "#senderismo", label: "Senderismo" },
  { path: "#espining", label: "Espining" },
  { path: "#defensa", label: "Defensa Personal" },
  { path: "#mma", label: "Artes Marciales Mixtas" },
  { path: "#taichi", label: "Taichi" },
  { path: "#estreching", label: "Estreching" },
  { path: "#pilates", label: "Pilates" },
  { path: "#yoga", label: "Yoga" },
  { path: "#boxing", label: "Boxing" },
];


const Navbar = () => {
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
          className="lg:hidden p-2 focus:outline-none bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Навигация для ПК */}
        <div className="hidden lg:flex space-x-4">
          <Dropdown title="Entrenador Personal" mainPath="/personal-training" links={linksPT} />
          <Dropdown title="Claces Infantiles" mainPath="/claces-infantiles" links={linksCI} />
          <Link to="/tarifas" className={`${theme.text} ${theme.hover} p-2 rounded my-auto`}>Tarifas</Link>
        </div>
      </nav>

      {/* Выпадающее меню для мобильных устройств */}
      {isOpen && (
        <div ref={menuRef} className={`${theme.primary} lg:hidden flex flex-col items-center p-4 space-y-3`}>
          <Dropdown title="Personalized Training" mainPath="/personal-training" links={linksPT} onItemClick={handleClose} />
          <Dropdown title="Claces Infantiles" mainPath="/claces-infantiles" links={linksCI} onItemClick={handleClose} />
          <Link to="/tarifas" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
            Tarifas
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
