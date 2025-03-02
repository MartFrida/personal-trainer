import { theme } from "../helpers/theme";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Логотип */}
        <div className="mb-6 md:mb-0 hover:scale-110 transition duration-200 flex justify-center md:justify-start">
          <Link to="/" className={`${theme.text} rounded text-xl flex flex-col items-center`}>
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
            <p>CIEPTIS</p>
          </Link>
        </div>

        {/* Сервисы */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Servicios</h3>
          <ul className="mt-2 space-y-1">
            <li><Link to="/personal-training" className="hover:underline">Personalized Training</Link></li>
            <li><Link to="/claces-infantiles" className="hover:underline">Claces Infantiles</Link></li>
            {/* <li><Link to="/nutrition" className="hover:underline">Nutrition & Diet</Link></li> */}
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="text-lg font-semibold">Contactos</h3>
          <ul className="mt-2 space-y-1">
            <li className="flex justify-center md:justify-start items-center">
              <a href="tel:+34123789450" className="flex flex-row items-center"> <FaPhone className="mr-2" /> +34 123 789 450</a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <a href="mailto:cieptis.atencion@gmail.com" className="flex flex-row items-center">
                <FaEnvelope className="mr-2" /> cieptis.atencion@gmail.com</a>
            </li>
            <li className="flex justify-center md:justify-start items-center"><FaMapMarkerAlt className="mr-2" /> Barcelona, Spain</li>
          </ul>
        </div>
      </div>

      {/* Социальные сети */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" target="_blank" className="text-white text-xl hover:text-gray-400"><FaFacebook /></a>
        <a href="https://www.instagram.com/centrentrenador_personal?igsh=MWE0bGRoeG0zNm0ycg==" target="_blank" className="text-white text-xl hover:text-gray-400"><FaInstagram /></a>
        <a href="#" target="_blank" className="text-white text-xl hover:text-gray-400"><FaTwitter /></a>
        <a href="#" target="_blank" className="text-white text-xl hover:text-gray-400"><FaWhatsapp /></a>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} CENTRO INTERNACIONAL DE ENTRENADORES PERSONALES Y TERAPIAS INTEGRALES DE LA SALUD</p>
        <p> Reservados todos los derechos</p>
      </div>
    </footer>
  );
};

export default Footer;
