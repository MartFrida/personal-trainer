import { useState } from 'react';
import SectionRegular from '../components/SectionRegular';
import { theme } from '../helpers/theme';
import ContainerMain from '../components/ContainerMain'
import TeamSection from '../components/TeamSection';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ContainerMain >
      <section className="relative rounded-lg" >
        <div className=" flex justify-center flex-col bg-fixed bg-no-repeat bg-top bg-cover md:bg-contain h-screen mt-[-50px] mb:mt-[-20px]"
          style={{ backgroundImage: "url('/img/amaruk-hero-smc.webp')" }}>
          <div className='bg-zinc-900/60 p-4 md:p-8 rounded-lg'>
            <p className=" tracking-widest text-5xl md:text-7xl font-bold leading-relaxed text-center text-white"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
              CIEPTIS
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-relaxed tracking-wide text-center text-white"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
              CENTRO DE ENTRENADORES PERSONALES Y TERAPIAS INTEGRALES DE LA SALUD
            </h2>
            <p className="text-xl md:text-2xl mt-4 text-center text-white" style={{ textShadow: "3px 3px 8px rgba(0, 0, 0, 0.9)" }}>
              La motivación es lo que te hace empezar. El hábito es lo que mantiene el progreso.
            </p>
          </div>
        </div>
      </section>

      <div className={`${theme.text} flex flex-col gap-4`}>
        <SectionRegular>
          <div>
            <p className="mb-4 text-lg font-semibold text-gray-800">¿Te gustaría participar en una sesión de entrenamiento personalizada especialmente para ti?</p>
            <p className="mb-6 text-gray-600">
              A través de reuniones individualizadas, nuestros entrenadores personales diseñarán un plan de entrenamiento adaptado completamente a tus necesidades con el fin de ayudarte a lograr tus metas. Te asistirán en mantenerte motivado, entrenar de manera efectiva, mejorar tu técnica y desempeño, evitar estancamientos y fomentar un estilo de vida saludable.
            </p>

            <p className="mb-4 text-lg font-semibold text-gray-800">¿Encuentras difícil asistir a clases grupales o prefieres contar con un entrenador personal solo para ti en Barcelona?</p>
            <p className="mb-6 text-gray-600">
              Esta es la solución perfecta: indícanos dónde y cuándo, y nosotros nos encargaremos del resto.
            </p>
          </div>
          <div className='flex justify-end w-full mt-4 md:mt-0'>
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
              onClick={() => setIsModalOpen(true)}>
              Contáctenos
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </SectionRegular>

        <SectionRegular>
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>Ofrecemos sesiones de entrenamiento personal en:</h2>
          <ul className="list-disc pl-6 mt-4 md:my-6 ">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </SectionRegular>

        <TeamSection />

        <SectionRegular>
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>¿Por qué elegirnos?</h2>
          <ul className="list-inside list-decimal my-4 md:pl-6 list-none">
            <li>✔️ Resultados rápidos y efectivos con entrenamientos adaptados a tu nivel y evolución.</li>
            <li>✔️ Atención personalizada con profesionales certificados en entrenamiento y salud.</li>
            <li>✔️ Flexibilidad de horarios para que entrenes cuando mejor te convenga.</li>
            <li>✔️ Métodos innovadores que combinan ejercicio, recuperación y bienestar integral.</li>
          </ul>
        </SectionRegular>

        <SectionRegular className="mt-8">
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Las programas más solicitados</h2>
          <h3 className="text-xl font-semibold py-4 ">Entrenamiento para perder peso</h3>
          <p>Te ayudamos a alcanzar tu peso ideal con un plan estructurado que incluye:</p>
          <ul className="list-inside list-disc md:pl-6 list-none">
            <li>✔️ Ejercicios cardiovasculares y de alta intensidad para quemar grasa.</li>
            <li>✔️ Tonificación y fortalecimiento muscular.</li>
            <li>✔️ Asesoramiento en hábitos saludables y nutrición.</li>
          </ul>

          <h3 className="text-xl font-semibold py-4 ">Entrenamiento para ganar masa muscular</h3>
          <p>Aumenta tu fuerza y define tu musculatura con sesiones enfocadas en:</p>
          <ul className="list-inside list-disc md:pl-6 list-none">
            <li>✔️ Rutinas de fuerza con cargas progresivas.</li>
            <li>✔️ Técnicas avanzadas como superseries y entrenamiento funcional.</li>
            <li>✔️ Desarrollo equilibrado del cuerpo, previniendo lesiones.</li>
          </ul>

          <h3 className="text-xl font-semibold py-4 ">Terapias integrales de la salud</h3>
          <p>Complementamos tu entrenamiento con terapias diseñadas para mejorar tu bienestar físico y mental:</p>
          <ul className="list-inside list-disc md:pl-6 list-none">
            <li>✔️ Osteopatía y fisioterapia para la recuperación muscular.</li>
            <li>✔️ Terapias de relajación y reducción del estrés.</li>
            <li>✔️ Evaluaciones biomecánicas para mejorar el rendimiento.</li>
          </ul>

          <div className="mb-6">
            <h3 className="text-xl font-semibold py-4 ">La ventaja de un enfoque integral</h3>
            <p>Nuestros entrenadores y terapeutas trabajan juntos para potenciar tu salud desde todos los ángulos. No solo mejorarás físicamente, sino que también sentirás una mayor armonía y equilibrio en tu vida diaria.</p>
            <p>📍 ¡Únete a nuestra comunidad y empieza tu transformación hoy mismo!</p>
          </div>
          <div className='flex justify-end w-full mt-4 md:mt-0'>
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
              onClick={() => setIsModalOpen(true)}>
              Contáctenos
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </SectionRegular>

      </div>
    </ContainerMain >
  )
}

export default Home