import { useState } from 'react';
import SectionRegular from "./SectionRegular";
import { theme } from "../helpers/theme";
import CVModal from "./CVModal";

const trainers = [
  {
    name: "Alejandro Gómez",
    role: "Especialista en fuerza y acondicionamiento",
    image: "/img/equipo/equipo-3.jpeg",
    description:
      "10 años de experiencia en entrenamiento de fuerza. Certificado en levantamiento olímpico. Ha trabajado con atletas profesionales.",
  },
  {
    name: "Laura Martínez",
    role: "Coach de fitness funcional",
    image: "/img/equipo/equipo-2.jpeg",
    description:
      "Experta en entrenamiento funcional y movilidad. Certificación en CrossFit Level 2. Enfocada en mejorar el rendimiento y prevención de lesiones.",
  },
  {
    name: "Diego Fernández",
    role: "Especialista en pérdida de peso",
    image: "/img/equipo/equipo-5.jpeg",
    description:
      "Más de 8 años ayudando a transformar cuerpos. Certificado en nutrición deportiva. Diseña planes personalizados de entrenamiento y dieta.",
  },
  {
    name: "Sofía Ramírez",
    role: "Instructora de yoga y pilates",
    image: "/img/equipo/equipo-1.jpeg",
    description:
      "Certificada en yoga terapéutico y pilates. Fomenta el bienestar físico y mental. Sesiones personalizadas para mejorar la flexibilidad y el equilibrio.",
  },
  {
    name: "Carlos Rivas",
    role: "Preparador físico para deportes",
    image: "/img/equipo/equipo-4.jpeg",
    description:
      "Especialista en entrenamiento deportivo. Ha trabajado con equipos de fútbol y atletas de alto rendimiento. Diseño de programas específicos según la disciplina deportiva.",
  },
  {
    name: "Valentin Torres",
    role: "Entrenador de resistencia y maratón",
    image: "/img/equipo/equipo-6.jpeg",
    description:
      "Expert en running y deportes de resistencia. Asesor en preparación para maratones y triatlones. Crea planes de entrenamiento adaptados a cada nivel.",
  },
];

const TeamSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* founder */}
      <section className={`${theme.primary}  p-4 rounded-lg mb-8 `}>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <div className="text-center md:text-left py-4 lg:p-6">
              <p className="text-xl italic mb-4">
                &quot;Invertir en ti mismo es la inversión más valiosa que puedes hacer. Estaremos encantados de guiarle en su camino hacia una mejor salud, estado físico y rendimiento.&quot;
              </p>
              <h3 className="text-lg font-semibold "> – Amaruk Kaishapanta, Founder & CEO</h3>
            </div>

            <button className="m-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
              onClick={openModal}>
              Descubra más
            </button>
            <CVModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/img/equipo/founder.jpg"
              alt="Amaruk Kaishapanta"
              className="rounded-lg shadow-lg max-h-[59vh] object-cover"
            />
          </div>
        </div>
      </section>
      <SectionRegular>
        <div className="container mx-auto text-center">
          <h2 className={`${theme.primary} text-3xl p-4 rounded-lg mb-8`}>
            Nuestro Equipo de Entrenadores Personales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 text-center hover:shadow-2xl transition"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-auto mx-auto  object-cover mb-4"
                />
                {/* <h3 className="text-xl font-semibold text-gray-700">
                  {trainer.name}
                </h3> */}
                <p className="text-sm text-gray-500 font-medium">
                  {trainer.role}
                </p>
                <p className="text-gray-600 mt-3 text-sm">{trainer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionRegular>
    </>

  );
};

export default TeamSection;
