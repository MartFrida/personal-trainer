/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Circle,
  Compass,
  ChevronDown,
  Heart,
 
  Mountain,
  Sparkles,
  Sunrise,
  Trees,
  Wind,
} from 'lucide-react';
import { theme } from '../helpers/theme';

// const images = {
//   hero: '/img/retiros/pirineos-hero.webp',
//   featured: '/img/retiros/retiro-pirineos.webp',
//   philosophy: '/img/retiros/naturaleza-silencio.webp',
//   location: '/img/retiros/pirineos-location.webp',
// };

const featureItems = [
  { title: 'Naturaleza y silencio', icon: Trees },
  { title: 'Prácticas conscientes', icon: Sparkles },
  { title: 'Grupos reducidos', icon: Heart },
];

const experienceCards = [
  {
    title: 'Meditación y presencia',
    description: 'Prácticas para calmar la mente y fortalecer la atención.',
    icon: Circle,
  },
  {
    title: 'Respiración consciente',
    description: 'Sesiones para liberar tensión y recuperar energía.',
    icon: Wind,
  },
  {
    title: 'Movimiento corporal',
    description: 'Ejercicios suaves para despertar el cuerpo y mejorar la percepción.',
    icon: Sunrise,
  },
  {
    title: 'Naturaleza',
    description: 'Caminatas, silencio y contacto directo con el paisaje.',
    icon: Mountain,
  },
  {
    title: 'Sabiduría ancestral',
    description: 'Espacios de aprendizaje inspirados en tradiciones vivas.',
    icon: BookOpen,
  },
  {
    title: 'Integración personal',
    description: 'Tiempo para descansar, escribir, observar y asimilar la experiencia.',
    icon: Compass,
  },
];

const retreats = [
  {
    title: 'Retiro Espiritual en los Pirineos 2026',
    status: 'Próximamente',
    link: '/retiros/retiro-espiritual-pirineos-2026/',
    active: true,
  },
  {
    title: 'Retiro de otoño',
    status: 'En preparación',
    link: '#contacto',
    active: false,
  },
  {
    title: 'Retiro de invierno',
    status: 'En preparación',
    link: '#contacto',
    active: false,
  },
  {
    title: 'Retiro en Ecuador',
    status: 'En preparación',
    link: '#contacto',
    active: false,
  },
  {
    title: 'Encuentros con Amaruk',
    status: 'En preparación',
    link: '#contacto',
    active: false,
  },
];

const faqItems = [
  {
    question: '¿Dónde se realizará el retiro?',
    answer:
      'El encuentro tendrá lugar en un espacio privado en los Pirineos Catalanes. La ubicación exacta será comunicada exclusivamente a las personas inscritas.',
  },
  {
    question: '¿Necesito experiencia previa?',
    answer:
      'No. Las actividades estarán guiadas y adaptadas para que puedan participar tanto principiantes como personas con experiencia.',
  },
  {
    question: '¿Cuándo se anunciarán las fechas?',
    answer:
      'Las fechas, la duración y el programa completo se publicarán próximamente en esta página.',
  },
  {
    question: '¿Las plazas serán limitadas?',
    answer:
      'Sí. Trabajaremos con un grupo reducido para cuidar la calidad de la experiencia y ofrecer una atención cercana.',
  },
  {
    question: '¿Cómo puedo recibir información?',
    answer:
      'Puedes enviarnos una solicitud mediante el formulario de contacto. Te avisaremos cuando se abran las inscripciones y se publique el programa completo.',
  },
];

function FeatureCard({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-amber-400">
        <Icon size={18} />
      </span>
      <span>{title}</span>
    </div>
  );
}

function RetreatCard({ retreat }) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border p-6 shadow-lg shadow-gray-900/10 ${
        retreat.active
          ? 'border-amber-400/50 bg-white'
          : 'border-gray-300 bg-gray-50 text-gray-600'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${retreat.active ? 'text-amber-500' : 'text-gray-500'}`}>
            {retreat.status}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-gray-950">{retreat.title}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
          retreat.active ? 'bg-amber-400 text-gray-950' : 'bg-gray-200 text-gray-700'
        }`}>
          {retreat.active ? 'Disponible' : 'En preparación'}
        </span>
      </div>
      <div className="mt-6">
        <Link
          to={retreat.link}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${
            retreat.active
              ? `${theme.buttonmy}`
              : 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          {retreat.active ? 'Ver detalles' : 'Solicitar información'}
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-300 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-gray-950">{question}</span>
        <span className={`rounded-full bg-gray-100 p-2 text-gray-700 transition ${isOpen ? 'rotate-180 text-amber-500' : ''}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      {isOpen ? <p className="mt-3 text-base leading-7 text-gray-600">{answer}</p> : null}
    </div>
  );
}

export default function RetirosPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className={`min-h-screen ${theme.background} text-gray-900 scroll-smooth`}>
      <Helmet>
        <title>Retiros Espirituales en los Pirineos | CIEPTIS</title>
        <meta
          name="description"
          content="Descubre retiros espirituales en los Pirineos Catalanes con meditación, naturaleza, respiración consciente y prácticas ancestrales."
        />
        <link rel="canonical" href="https://centroentrenadores.com/retiros/" />
        <meta property="og:title" content="Retiros espirituales en los Pirineos | CIEPTIS" />
        <meta
          property="og:description"
          content="Experiencias de retiro espiritual en los Pirineos para descansar, respirar y reconectar con la naturaleza."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://centroentrenadores.com/retiros/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-700 via-gray-900 to-gray-950 text-white">
        <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
            alt="Paisaje de montaña en la naturaleza"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.92),rgba(10,10,10,0.7)),url('/img/retiros/pirineos-hero.webp')] bg-cover bg-center" />
          <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
                <span className="h-px w-10 bg-amber-400" />
                Retiros CIEPTIS
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                Retiros espirituales para volver a tu centro
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                Experiencias profundas en contacto con la naturaleza, creadas para detener el ruido cotidiano, recuperar la energía y reconectar con lo esencial.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="#destacado"
                  className={`${theme.buttonmy} inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-semibold shadow-lg shadow-gray-950/20`}
                >
                  Descubrir el próximo retiro
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="#filosofia"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:border-amber-400 hover:bg-white/10"
                >
                  Conocer nuestra filosofía
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-neutral-100 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-500">
                <span className="h-px w-8 bg-amber-400" />
                Una pausa consciente
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
                Un espacio para detenerse, respirar y recordar
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                Nuestros retiros combinan naturaleza, meditación, movimiento consciente, respiración, silencio y prácticas inspiradas en la sabiduría ancestral. Cada encuentro está diseñado como una experiencia cercana y transformadora, respetando el ritmo y el proceso personal de cada participante.
              </p>
            </motion.div>
            <div className="mt-10 flex flex-wrap gap-4">
              {featureItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                >
                  <FeatureCard title={item.title} icon={item.icon} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="destacado" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/10 lg:grid lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="p-8 lg:p-10">
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-500">
                  <span className="h-px w-8 bg-amber-400" />
                  Próximo retiro
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                  Retiro Espiritual en los Pirineos 2026
                </h2>
                <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
                  Una experiencia de inmersión en la naturaleza de los Pirineos Catalanes para descansar, respirar, recuperar la claridad y conectar con una dimensión más profunda de ti mismo.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-800">Lugar</p>
                    <p className="mt-1 text-sm leading-7 text-gray-600">Lugar privado en los Pirineos Catalanes</p>
                    <p className="mt-3 text-xs leading-6 text-gray-500">
                      La ubicación exacta será enviada únicamente a los participantes inscritos.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-800">Fechas</p>
                    <p className="mt-1 text-sm leading-7 text-gray-600">Fechas próximamente</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-800">Duración</p>
                    <p className="mt-1 text-sm leading-7 text-gray-600">Programa de varios días</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-800">Grupo</p>
                    <p className="mt-1 text-sm leading-7 text-gray-600">Plazas limitadas</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/retiros/retiro-espiritual-pirineos-2026/"
                    className={`${theme.buttonmy} inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold`}
                  >
                    Ver detalles del retiro
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
                  >
                    Solicitar información
                  </Link>
                </div>
              </div>
              <div className="min-h-[320px] overflow-hidden rounded-[2rem] bg-[#4E6A45]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Meditación en la naturaleza con montañas al fondo"
                className="h-full w-full object-cover"
              />
            </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-700 via-gray-900 to-gray-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
                <span className="h-px w-8 bg-amber-400" />
                Más allá del descanso
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Una experiencia más allá del descanso
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {experienceCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                    className="group rounded-xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/10"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-amber-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-base leading-7 text-gray-300">{card.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="filosofia" className="bg-neutral-100 py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="grid gap-10 rounded-2xl border border-gray-300 bg-white p-8 shadow-lg shadow-gray-900/10 lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
            >
              <div>
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-500">
                  <span className="h-px w-8 bg-amber-400" />
                  Nuestra filosofía
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
                  Nuestra filosofía
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                  No entendemos el retiro como una huida de la vida cotidiana, sino como una pausa consciente para volver a ella con más claridad. Creamos espacios sencillos, humanos y respetuosos en los que la naturaleza, el cuerpo, la respiración y el silencio ayudan a recuperar la conexión interior.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-950">
                <div className="absolute inset-0 bg-[url('/img/retiros/naturaleza-silencio.webp')] bg-cover bg-center opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
                <div className="relative p-8 md:p-10">
                  <div className="border-l-2 border-amber-400 pl-6 text-2xl font-medium leading-relaxed text-white md:text-3xl">
                    A veces no necesitamos ir más rápido. Necesitamos detenernos lo suficiente para volver a escucharnos.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-neutral-200 py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-500">
                <span className="h-px w-8 bg-amber-400" />
                Próximas experiencias
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
                Próximas experiencias
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {retreats.map((retreat) => (
                <RetreatCard key={retreat.title} retreat={retreat} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-8 rounded-2xl border border-gray-300 bg-white p-8 shadow-lg shadow-gray-900/10 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-500">
                  <span className="h-px w-8 bg-amber-400" />
                  ¿Para quién?
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
                  ¿Para quién es este retiro?
                </h2>
                <ul className="mt-8 space-y-4 text-base leading-8 text-gray-600 md:text-lg">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                    Necesitan parar y descansar del ritmo cotidiano.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                    Desean reconectar con la naturaleza.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                    Sienten curiosidad por la meditación y la respiración consciente.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                    Buscan una experiencia personal profunda.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                    Valorán los grupos pequeños y los espacios respetuosos.
                  </li>
                </ul>
                <p className="mt-8 text-base leading-7 text-gray-600">
                  No es necesario tener experiencia previa en meditación, yoga o prácticas espirituales.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-950 p-8 text-white">
                <div className="absolute inset-0 bg-[url('/img/retiros/pirineos-location.webp')] bg-cover bg-center opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
                <div className="relative">
                  <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
                    <span className="h-px w-8 bg-amber-400" />
                    Ubicación
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">En los Pirineos Catalanes</h3>
                  <p className="mt-4 text-base leading-8 text-gray-300">
                    El retiro tendrá lugar en un espacio privado rodeado de naturaleza en los Pirineos Catalanes. Buscamos un entorno tranquilo, alejado del ruido y adecuado para las prácticas, el descanso y la convivencia del grupo.
                  </p>
                  <div className="mt-8 max-w-2xl border-l-2 border-amber-400 bg-black/20 px-6 py-5 text-gray-200 backdrop-blur-sm">
                    La ubicación exacta será enviada únicamente a los participantes inscritos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-500">
                <span className="h-px w-8 bg-amber-400" />
                Preguntas frecuentes
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
                Preguntas frecuentes
              </h2>
            </motion.div>
            <div className="mt-8 rounded-2xl border border-gray-300 bg-white p-4 shadow-sm shadow-gray-900/5">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="relative overflow-hidden bg-gradient-to-br from-gray-700 via-gray-900 to-gray-950 py-24 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.9),rgba(10,10,10,0.7)),url('/img/retiros/pirineos-hero.webp')] bg-cover bg-center opacity-70" />
          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
                <span className="h-px w-8 bg-amber-400" />
                Última invitación
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Recibe la información del próximo retiro
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                Déjanos tus datos y te avisaremos cuando publiquemos las fechas, el programa y las condiciones de inscripción.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contacto"
                  className={`${theme.accent} inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold text-gray-950 shadow-lg transition`}
                >
                  Quiero recibir información
                </Link>
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                Usaremos tus datos únicamente para responder a tu solicitud y enviarte información relacionada con los retiros.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
