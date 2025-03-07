/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme";

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center backdrop-blur-sm z-50 rounded-lg">
      <div className={`${theme.background} shadow-md rounded-lg md:w-2/3 py-2 m-2 relative max-h-[90vh] overflow-hidden`}>
        <div className="max-h-full md:max-h-[80vh] overflow-y-auto relative " onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-white z-20" onClick={onClose}>X</button>
          <h2 className={`${theme.primary} text-xl md:text-2xl p-4 absolute top-0 w-full`}>AMARUK KAYSHAPANTA</h2>

          <div className={`${theme.text} p-2 md:p-6 mt-20`}>
            <div className="float-right ml-2 mb-2 md:ml-4 md:mb-4">
              <img
                src="img/equipo/cv-foto.jpg?format=webp"
                alt="Amaruk Kayshapanta"
                className="h-30 w-30 md:h-60 md:w-60 object-cover rounded-lg"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-2">Formación:</h3>
            <p className="">Licenciado en Ciencias de la Actividad Física y del Deporte por la Universidad Central del Ecuador Colegiado 52.5001.</p>
            <ul className="flex flex-col gap-y-2">
              <li>Profesor de Musculación y Fitness Orthos año 2001.</li>
              <li>Maestro multidisciplinar campeón Internacional de Sur América, tiene 6 Cinturones Negros 5to Dan en:</li>
              <li>Taekwondo - Hapkido - Kick Boxing - Judo - Full Contact.</li>
              <li>Reconocido a nivel mundial por las Federaciones: WTF, ITF, WHF, WAKO, FIDAM, FET, ROPEC.</li>
            </ul>


            <h3 className="text-xl md:text-2xl font-semibold my-2">Experiencia:</h3>
            <ul className="flex flex-col gap-y-2">
              <li>Director Técnico y Profesor de varios centros deportivos en España y Ecuador.</li>
              <li>Entrenador personal de deportistas de élite, celebrities, modelos y personas que quieren llevar una vida sana y saludable.</li>
              <li>Experto en Rendimiento Deportivo y oposiciones para Policías, Bomberos, Guardias de Seguridad.</li>
              <li>Médico Acupunturista y Digito-puntura Diplomado en &quot;Center Acupuntura Kee Wong Youg&quot; Barcelona 2004.</li>
              <li>Dietista y Nutricionista experto asesor para Culturistas profesionales y amateur.</li>
              <li>Autor de 34 libros publicados en España y en Amazon a nivel mundial.</li>
              <li>Entrenador Personal y creador del &quot;Sistem Power&quot; La transformación metamorfosis de mente, cuerpo, y espíritu.</li>
              <li>Productor y periodista colegiado SPC-SPM - FEP de varios medios de comunicación.</li>
              <li>Terapeuta tradicional Andino y Motivador personal PNL. Conferencista y Catedrático educacional en universidades como: CAMU, UCM, UCE, PUSE, UAB, etc.</li>
            </ul>
            <div className={`${theme.primary} w-full mt-2 p-2 rounded-lg`}>
              <a href="https://en.wikipedia.org/wiki/Amaruk_Kayshapanta" target="_blank" >Más Información en Wikipedia.</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
