import SectionRegular from '../components/SectionRegular';
import { theme } from '../helpers/theme';
// import backgroundImage from '../../public/img/personal-trainer-barcelona.jpg'
import ContainerMain from '../components/ContainerMain'

const Home = () => {
  return (
    <ContainerMain >
      <section className="relative my-4 bg-zinc-900/40 rounded-lg" >
        <div className="p-6 flex items-center justify-start text-center bg-cover bg-center rounded-lg bg-no-repeat w-full h-screen gap-[20%]"
          style={{ backgroundImage: "url('/img/hero-without-bg.png')" }}>
          <div className='bg-zinc-900/40 p-8 rounded-lg'>
            <h1 className=" font-bold leading-relaxed tracking-wide"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
              CENTRO INTERNACIONAL DE ENTRENADORES PERSONALES Y TERAPIAS INTEGRALES DE LA SALUD
            </h1>
            <p className="text-2xl mt-4 " style={{ textShadow: "3px 3px 8px rgba(0, 0, 0, 0.9)" }}>
              La motivación es lo que te hace empezar. El hábito es lo que mantiene el progreso.
            </p>
          </div>

        </div>
      </section>
      <div className={` py-8 mt-2 bg-fixed bg-cover`} style={{ backgroundImage: "url('/img/grunge-wall-texture.jpg')" }}>
        <section className={`${theme.primary} p-6 rounded-lg`}>
          <h1 className="text-3xl font-semibold text-white">Entrenador personal Amaruk Kaishapanta</h1>
          <p>Running, Calistenia, Alteriofilia, Culturismo, Fitnes, Natacion, Senderismo, Espining, Defensa Personal, Artes MArciales Mixtas, Taichi, Estreching, Pilates, Yoga, Boxing</p>
        </section>

        <div className={`${theme.text} mt-8`}>
          <SectionRegular>
            <p className="mb-4">¿Te gustaría asistir a una sesión de entreno diseñada para ti?</p>
            <p className="mb-6">
              Mediante reuniones personalizadas, nuestros entrenadores personales establecerán un programa de
              entrenamiento 100% adaptado a tus necesidades para ayudarte a alcanzar tus objetivos. Te ayudarán a
              estar motivado, entrenar de forma eficaz, mejorar tu técnica y rendimiento, no estancarte y desarrollar un estilo de vida saludable.
            </p>

            <p className="mb-4">¿Tienes dificultades en acudir a las clases grupales o simplemente prefieres disponer de un entrenar personal en Barcelona para ti?</p>
            <p className="mb-6">
              Esta es la solución ideal: dinos dónde y cuándo y nosotros nos encargamos de lo demás.
            </p>
          </SectionRegular>

          <SectionRegular>
            <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>Ofrecemos sesiones de entrenamiento personal en:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Nuestras instalaciones</li>
              <li>En tu casa</li>
              <li>En tu oficina</li>
              <li>Outdoor: en el parque, la playa…</li>
            </ul>
          </SectionRegular>


          <SectionRegular>
            <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>Beneficios de un entrenador personal</h2>
            <ul className="list-inside list-decimal pl-6">
              <li>Mejorarás rápidamente</li>
              <li>Planes de entrenamiento y atención personalizada</li>
              <li>Nos amoldamos a tus horarios y a tus necesidades</li>
            </ul>
          </SectionRegular>

          <SectionRegular className="mt-8">
            <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Los programas o sesiones más solicitados a nuestros entrenadores personales</h2>
            <p className="mb-4">Aunque los programas que desarrollan nuestros entrenadores personales son únicos para cada persona, los objetivos suelen repetirse. Estos son algunos de los más comunes:</p>

            <div className="mb-6">
              <h2 className={`${theme.secondary} text-white text-xl font-semibold p-4 rounded-lg`}>Entrenador personal para perder peso</h2>
              <p>Te ayudaremos a conseguir tu peso ideal con un eficaz programa de entrenamiento específico y unas pautas nutricionales, guiándote y motivándote para que adquieras hábitos saludables y alcances tus objetivos. Las sesiones se centran en:</p>
              <ul className="list-inside list-disc pl-6">
                <li>Ejercicios de trabajo cardiovascular</li>
                <li>Ejercicios de alta intensidad (quemar grasas)</li>
                <li>Ejercicios de tonificación (TRX, gomas elásticas)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className={`${theme.secondary} text-xl font-semibold p-4 rounded-lg`}>Entrenador personal para aumentar masa muscular</h3>
              <p>Gana músculo y pierde grasa en cada sesión. Adaptaremos el entrenamiento a tus necesidades y capacidades. A grandes rasgos la sesión combinará:</p>
              <ul className="list-inside list-disc pl-6">
                <li>Series de 6 a 8 repeticiones</li>
                <li>Series de 1 a 5 repeticiones de máxima carga</li>
                <li>Superseries</li>
                <li>Aislar el músculo</li>
                <li>Intensidad</li>
                <li>Cargas pesadas</li>
              </ul>
            </div>

            <section className="mt-8">
              <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Las ventajas de tener un entrenador personal</h2>
              <p className="mb-6">
                Los entrenadores personales son como maestros que te mantienen motivado y te guían para conseguir tus objetivos. Al comprometerte con tu entrenador personal aumentas tu nivel de compromiso y eso hace que llegues antes a tus metas.
              </p>

              <h3 className={`${theme.secondary} text-xl font-semibold`}>Nuestros entrenadores personales de Barcelona te ofrecen clases de:</h3>
              <ul className="list-inside list-disc pl-6">
                <li>Fitness</li>
                <li>Elasticidad</li>
                <li>Acondicionamiento físico</li>
                <li>Artes marciales, defensa personal, kick boxing o boxeo</li>
              </ul>
              <p className="mt-4">También te ayudamos a prepararte para pruebas y oposiciones a cuerpos de seguridad, bomberos, etc.</p>
            </section>
          </SectionRegular>
        </div>
      </div>
    </ContainerMain>
  )
}

export default Home