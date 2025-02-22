import ContainerMain from "../components/ContainerMain"
import { InfoSection } from "../components/SectionInfo"
import SectionRegular from "../components/SectionRegular"
import { SectionWithImage } from "../components/SectionWithImage"
import { theme } from "../helpers/theme"

const contentPT =
{
  running: {
    title: "🏃‍♂️ ¡Corre más rápido, más fuerte, más inteligente! 🏃‍♀️",
    description: "Ya sea que estés entrenando para tu primera carrera de 5 km, una maratón o simplemente quieras mejorar tu resistencia, mi entrenamiento de carrera personalizado te ayudará a alcanzar tus objetivos. ¡Llevemos tu carrera al siguiente nivel!",
    items: ["Planes de carrera personalizados: adaptados a tu nivel de experiencia y objetivos.", "Análisis de técnica y forma: mejore la eficiencia y reduzca el riesgo de lesiones.", "Entrenamiento para maratones y carreras: 5K, 10K, media maratón, maratón completa y ultra.", "Entrenamientos de fuerza y movilidad: ejercicios esenciales para desarrollar el cuerpo de un corredor.", "Orientación nutricional personalizada: alimenta tus carreras de la manera correcta."],
    imageUrl: "🚀 ¿Está listo para trabajar de manera más inteligente? ¡Contácteme hoy para una evaluación gratuita!"
  },
  calistenia: {
    title: "¡Libera todo tu potencial con calistenia!",
    description: "Como entrenador personal certificado de Street Workout y calistenia, te ayudo a lograr una fuerza, una movilidad y una resistencia increíbles, ¡usando únicamente tu cuerpo! Ya seas principiante o un atleta avanzado, creo planes de entrenamiento personalizados para dominar las habilidades de peso corporal, como los muscle-ups, las planchas y las paradas de manos. ¡Construyamos una versión más fuerte y ágil de ti!",
    items: ["👉 Planes de entrenamiento personalizados",
      "👉 Fuerza, movilidad y pérdida de grasa",
      "👉 Niveles principiante a avanzado",
      "💥 ¡Entrena en cualquier lugar y en cualquier momento! 💥"],
    callToAction: "Running"
  },
}

console.log(contentPT.running.title)
export const PersonalizedTraining = () => {
  return (
    <ContainerMain className={`${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}>
      {/* <section className={`${theme.primary}  w-full p-4 rounded-lg`}>
        <h1 className="text-3xl font-semibold text-white">Entrenador personal Amaruk Kaishapanta</h1>
        <p>Running, Calistenia, Alteriofilia, Culturismo, Fitnes, Natacion, Senderismo, Espining, Defensa Personal, Artes MArciales Mixtas, Taichi, Estreching, Pilates, Yoga, Boxing</p>
      </section> */}

      <SectionRegular id="running" >
        <InfoSection
          title={contentPT.running.title}
          description={contentPT.running.description}
          items={contentPT.running.items}
          callToAction={contentPT.running.imageUrl}
          theme={{ primary: "bg-blue-500 text-white" }}
        />
      </SectionRegular>

      <SectionRegular id="calistenia" >
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>¡Libera todo tu potencial con calistenia!</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">Como entrenador personal certificado de Street Workout y calistenia, te ayudo a lograr una fuerza, una movilidad y una resistencia increíbles, ¡usando únicamente tu cuerpo! Ya seas principiante o un atleta avanzado, creo planes de entrenamiento personalizados para dominar las habilidades de peso corporal, como los muscle-ups, las planchas y las paradas de manos. ¡Construyamos una versión más fuerte y ágil de ti!</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
          <li>👉 Planes de entrenamiento personalizados</li>
          <li>👉 Fuerza, movilidad y pérdida de grasa</li>
          <li>👉 Niveles principiante a avanzado</li>
          <li>💥 ¡Entrena en cualquier lugar y en cualquier momento! 💥</li>
        </ul>
        <p className="leading-relaxed tracking-wide text-gray-700">📅 ¡¡¡Reserve su consulta ahora!!!</p>
      </SectionRegular>

      <SectionRegular id='halterofilia' className="mt-8">
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>🏋️‍♂️ Levanta más fuerza. Levanta más inteligentemente.🏋️‍♀️</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">¿Estás listo para superar tus límites y desarrollar fuerza real? Ya sea que quieras batir récords personales, mejorar tu técnica o ponerte en la mejor forma de tu vida, mi entrenamiento de levantamiento de pesas está diseñado para ayudarte a lograr tus objetivos de manera segura y efectiva.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
          <li>🔹Planes de levantamiento de pesas personalizados: adaptados a sus objetivos, ya sea que busque aumentar la fuerza, desarrollar músculos o mejorar la forma.</li>
          <li>🔹 Levantamiento de pesas olímpico: domine el clean & jerk, el arranque y otros levantamientos olímpicos con entrenamiento experto.</li>
          <li>🔹 Entrenamiento de levantamiento de pesas: programación enfocada en sentadillas, press de banca y peso muerto para desarrollar fuerza bruta.</li>
          <li>🔹 Technique Coaching – Improve your lift form and execution to prevent injuries and maximize results.</li>
          <li>🔹 Strength & Mobility Workouts – Enhance your mobility and functional strength to improve performance.</li>
        </ul>
        <p className="leading-relaxed tracking-wide text-gray-700">💥 Transforma tu fuerza: ¡comienza hoy!💥</p>
      </SectionRegular>

      <SectionRegular id="culturismo" >
        <SectionWithImage
          title='Culturismo 💪 ¡Construye el cuerpo que siempre has deseado!💪'
          description='Ya sea que estés buscando ganar masa muscular, definir tu físico o esculpir tu cuerpo a la perfección, estoy aquí para guiarte en cada paso del camino. Como tu entrenador de culturismo dedicado, te ayudaré a maximizar tu entrenamiento, nutrición y recuperación para lograr los mejores resultados.'
          items={[
            'Planes de entrenamiento de culturismo personalizados: diseñados para desarrollar músculos, mejorar la simetría y reducir la grasa corporal',
            'Entrenamiento de fuerza y ​​masa muscular: programas enfocados para aumentar el tamaño y la fuerza de los músculos',
            'Preparación para la competencia: entrenamiento personalizado para competencias de culturismo, que incluye poses, dieta y estrategia para la semana pico',
            'Orientación nutricional: planes de alimentación personalizados para alimentar su cuerpo para un máximo crecimiento muscular y pérdida de grasa',
            'Recuperación y prevención de lesiones: estrategias para una recuperación óptima, salud de las articulaciones y para evitar el agotamiento',
          ]}
          imageUrl='/img/amaruk3.jpg'
        />
      </SectionRegular>

      <SectionRegular id="fitnes">
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>🏋️‍♀️ Achieve Your Best Shape with Personalized Fitness Coaching! 🏃‍♂️</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">Whether you’re new to fitness or looking to break through a plateau, my custom training programs are designed to help you build strength, improve endurance, and feel your absolute best. From weight loss to muscle gain, I’m here to guide you every step of the way.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
          <li>🔹 Personalized Fitness Plans – Tailored to your goals and fitness level, whether you’re aiming for fat loss, muscle gain, or general health.</li>
          <li>🔹 Strength & Conditioning – Build muscle, boost strength, and improve overall fitness with targeted strength workouts.</li>
          <li>🔹 Cardio & Endurance Training – Improve stamina, cardiovascular health, and endurance through fun and challenging workouts.</li>
          <li>🔹 Weight Loss Programs – Effective workouts and nutrition strategies to help you shed pounds and keep them off.</li>
          <li>🔹 Posture & Mobility Coaching – Improve flexibility, prevent injuries, and enhance mobility with specialized exercises.</li>
        </ul>
        <p className="leading-relaxed tracking-wide text-gray-700">📅 Start Your Fitness Journey Today – Book Your Consultation!</p>
      </SectionRegular>

      <SectionRegular id='natacion' className="mt-8">
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>Natacion 🏊‍♂️ Dive into Your Best Swim Performance! 🏊‍♀️</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">Whether you`re a beginner looking to learn the basics or an experienced swimmer aiming to improve your technique and endurance, I’m here to help you unlock your full potential in the pool. With personalized swim coaching, we’ll improve your stroke efficiency, build strength, and take your swimming skills to the next level.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>🔹 Personalized Swim Training Plans – Tailored to your skill level and goals, whether it’s for fitness, technique, or competition preparation.            </li>
          <li>🔹 Stroke Technique Improvement – Focused coaching on the four major strokes (freestyle, breaststroke, backstroke, and butterfly) to enhance efficiency and speed.</li>
          <li>🔹 Endurance & Speed Training – Build stamina and power through customized swimming workouts designed to increase performance.</li>
          <li>🔹 Open Water Swimming Coaching – Training for outdoor swimming, including safety, technique, and strategy for triathlons or fitness.</li>
          <li>🔹 Swimming for Fitness & Weight Loss – Low-impact, full-body workouts that burn calories and improve cardiovascular health.</li>
        </ul>
        <p className="leading-relaxed tracking-wide text-gray-700">📅 🚀 Reach Your Swimming Goals! Book a consultation today to discuss your training plan!</p>
      </SectionRegular>

    </ContainerMain>
  )
}
