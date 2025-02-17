import { Link } from "react-router-dom";
import { theme } from "../helpers/theme";
import Dropdown from './Dropdown'

const linksPT = [
  { path: "#running", label: "Running" },
  { path: "#calistenia", label: "Calistenia" },
  { path: "#alteriofilia", label: "Alteriofilia" },
  { path: "#culturismo", label: "Culturismo" },
  { path: "#fitnes", label: "Fitnes" },
  { path: "#natacion", label: "Natacion" },
  { path: "#senderismo", label: "Senderismo" },
  { path: "#espining", label: "Espining" },
  { path: "#defensa-personal", label: "Defensa Personal" },
  { path: "#artes-marciales-mixtas", label: "Artes Marciales Mixtas" },
  { path: "#taichi", label: "Taichi" },
  { path: "#estreching", label: "Estreching" },
  { path: "#pilates", label: "Pilates" },
  { path: "#yoga", label: "Yoga" },
  { path: "#boxing", label: "Boxing" },
]

const Navbar = () => {

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className={`${theme.primary} p-4 text-white flex justify-around `} >
        <Link to="/" className={`${theme.text} ${theme.hover} p-2 rounded`}>Home</Link>
        <Dropdown
          title="Personalized Training"
          mainPath="/personal-training"
          links={linksPT}
        />
        <Link to="/artes-marciales" className={`${theme.text} ${theme.hover} p-2 rounded`}>Artes Marciales</Link>
        <Link to="/sports-coaching" className={`${theme.text} ${theme.hover} p-2 rounded`}>Fisico Culturismo</Link>
        <Link to="/claces-infantiles" className={`${theme.text} ${theme.hover} p-2 rounded`}>Claces Infantiles</Link>
        <Link to="/nutrition" className={`${theme.text} ${theme.hover} p-2 rounded`}>Nutrition & Diet</Link>
        <Link to="/therapy" className={`${theme.text} ${theme.hover} p-2 rounded`}>Physical Therapy</Link>
        <Link to="/acupuncture" className={`${theme.text} ${theme.hover} p-2 rounded`}>Tarifas</Link>
      </nav >
    </div>

  );
};

export default Navbar;