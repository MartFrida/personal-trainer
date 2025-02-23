import { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../helpers/theme";
import Dropdown from "./Dropdown";
import { Menu, X } from "lucide-react"; // Иконки бургер-меню

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

const linksCI = [
  { path: "#taekwondo", label: "Taekwondo" },
  { path: "#judo", label: "Judo" },
  { path: "#mma", label: "MMA" },
  { path: "#hapkido", label: "Hapkido" },
  { path: "#cursos-de-verano", label: "Cursos de Veranotnes" },
  { path: "#excursiones", label: "Excursiones" },
  { path: "#air-libre", label: "Actividades Lúdicas al Aire Libre" },
  { path: "#juegos", label: "Juegos Recreacionales" },
  { path: "#artes-interpretativas", label: "Artes Interpretativas" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для закрытия меню при клике на пункт
  const handleClose = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className={`${theme.primary} p-2 text-white flex justify-between items-center`}>
        {/* Логотип */}
        <Link to="/" className={`${theme.text} rounded text-xl `} onClick={handleClose}>
          <img src="/logo.png" alt="Logo" className="h-16 w-auto hover:scale-120 transition duration-200" />
        </Link>

        {/* Кнопка бургер-меню для мобильных устройств */}
        <button
          className="md:hidden p-2 focus:outline-none bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Навигация для ПК */}
        <div className="hidden md:flex space-x-4">
          <Dropdown title="Personalized Training" mainPath="/personal-training" links={linksPT} />
          <Link to="/artes-marciales" className={`${theme.text} ${theme.hover} p-2 rounded my-auto`}>Artes Marciales</Link>
          <Link to="/fisico-culturismo" className={`${theme.text} ${theme.hover} p-2 rounded my-auto`}>Fisico Culturismo</Link>
          <Dropdown title="Claces Infantiles" mainPath="/claces-infantiles" links={linksCI} />
          {/* <Link to="/claces-infantiles" className={`${theme.text} ${theme.hover} p-2 rounded my-auto`}>Claces Infantiles</Link> */}
          <Link to="/nutrition" className={`${theme.text} ${theme.hover} p-2 rounded my-auto `}>Nutrition & Diet</Link>
          <Link to="/therapy" className={`${theme.text} ${theme.hover} p-2 rounded my-auto`}>Physical Therapy</Link>
          <Link to="/tarifas" className={`${theme.text} ${theme.hover} p-2 rounded my-auto`}>Tarifas</Link>
        </div>
      </nav>

      {/* Выпадающее меню для мобильных устройств */}
      {isOpen && (
        <div className={`${theme.primary} md:hidden flex flex-col items-center p-4 space-y-3`}>
          <Dropdown title="Personalized Training" mainPath="/personal-training" links={linksPT} onItemClick={handleClose} />
          <Link to="/artes-marciales" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
            Artes Marciales
          </Link>
          <Link to="/fisico-culturismo" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
            Fisico Culturismo
          </Link>
          <Link to="/claces-infantiles" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
            Claces Infantiles
          </Link>
          <Link to="/nutrition" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
            Nutrition & Diet
          </Link>
          <Link to="/therapy" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
            Physical Therapy
          </Link>
          <Link to="/tarifas" className={`${theme.text} ${theme.hover} p-2 rounded`} onClick={handleClose}>
            Tarifas
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
