/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Circle,
  Compass,
  Heart,
  
  Mountain,
  
  Sunrise,
  Trees,
  Wind,
} from 'lucide-react';
import { theme } from '../helpers/theme';

const images = {
  hero: '/images/retiros/pirineos-hero.svg',
  featured: '/images/retiros/retiro-pirineos.svg',
  philosophy: '/images/retiros/naturaleza-silencio.svg',
  location: '/images/retiros/pirineos-location.svg',
  autumn: '/images/retiros/retiro-otono.svg',
  winter: '/images/retiros/retiro-invierno.svg',
  ecuador: '/images/retiros/retiro-ecuador.svg',
  amaruk: '/images/retiros/encuentros-amaruk.svg',
};

const featureItems = [
  { title: 'Naturaleza y silencio', icon: Trees },
  { title: 'Respiración consciente', icon: Wind },
  { title: 'Grupos reducidos', icon: Heart },
];

const experienceCards = [
  {
    title: 'Meditación y presencia',
    description: 'Prácticas suaves para calmar la mente y fortalecer la atención.',
    icon: Circle,
  },
  {
    title: 'Respiración consciente',
    description: 'Sesiones para soltar tensión y recuperar un ritmo más sereno.',
    icon: Wind,
  },
  {
    title: 'Movimiento corporal',
    description: 'Ejercicios lentos y sensibles para despertar el cuerpo con cuidado.',
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
    description: 'Tiempo para descansar, escribir, observar y asimilar.',
    icon: Compass,
  },
];

const retreats = [
  {
    title: 'Retiro Espiritual en los Pirineos 2026',
    status: 'Próximo retiro',
    link: '/retiros/retiro-espiritual-pirineos-2026/',
    active: true,
    image: images.featured,
  },
  {
    title: 'Retiro de otoño',
    status: 'En preparación',
    link: '#contacto',
    active: false,
    image: images.autumn,
  },
  {
    title: 'Retiro de invierno',
    status: 'En preparación',
    link: '#contacto',
    active: false,
    image: images.winter,
  },
  {
    title: 'Retiro en Ecuador',
    status: 'En preparación',
    link: '#contacto',
    active: false,
    image: images.ecuador,
  },
  {
    title: 'Encuentros con Amaruk',
    status: 'En preparación',
    link: '#contacto',
    active: false,
    image: images.amaruk,
  },
];

const faqItems = [
  {
    question: '¿Dónde se realizará el retiro?',
    answer:
      'El encuentro tendrá lugar en un espacio privado en los Pirineos Catalanes. La ubicación exacta será enviada únicamente a los participantes inscritos.',
  },
  {
    question: '¿Necesito experiencia previa?',
    answer:
      'No. Las prácticas están guiadas y adaptadas para que puedan participar personas con distintos niveles de experiencia.',
  },
  {
    question: '¿Cuándo se anunciarán las fechas?',
    answer:
      'Las fechas, la duración y el programa completo se publicarán próximamente en esta página.',
  },
  {
    question: '¿Las plazas serán limitadas?',
    answer:
      'Sí. Trabajamos con grupos reducidos para cuidar la calidad del entorno y la atención personal.',
  },
  {
    question: '¿Cómo puedo recibir información?',
    answer:
      'Puedes escribirnos a través del formulario de contacto y te avisaremos cuando se abran inscripciones y el programa completo.',
  },
];

function FeatureCard({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-[#7A5A3A]/15 bg-[#F7F2E7] px-4 py-3 text-sm font-medium text-[#3C2C22] shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4E6A45] text-[#F7F2E7]">
        <Icon size={18} />
      </span>
      <span>{title}</span>
    </div>
  );
}

function RetreatCard({ retreat }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`group overflow-hidden rounded-2xl border shadow-lg shadow-gray-900/10 ${
        retreat.active
          ? 'border-[#C79A3B]/35 bg-white'
          : 'border-[#7A5A3A]/15 bg-[#FCFAF4]'
      }`}
    >
      <div className="relative overflow-hidden">
        <img src={retreat.image} alt={retreat.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${retreat.active ? 'text-[#C79A3B]' : 'text-[#7A5A3A]'}`}>
          {retreat.status}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-[#3C2C22]">{retreat.title}</h3>
        <div className="mt-6 flex items-center justify-between gap-3">
          <Link
            to={retreat.link}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${
              retreat.active
                ? `${theme.buttonmy}`
                : 'border border-[#7A5A3A]/15 bg-white text-[#3C2C22] hover:bg-[#F7F2E7]'
            }`}
          >
            {retreat.active ? 'Ver detalles' : 'Solicitar información'}
            <ArrowRight size={16} />
          </Link>
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            retreat.active ? 'bg-[#4E6A45] text-[#F7F2E7]' : 'bg-[#EDE7D9] text-[#7A5A3A]'
          }`}>
            {retreat.active ? 'Disponible' : 'Próximamente'}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#7A5A3A]/20 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-[#3C2C22]">{question}</span>
        <span className={`rounded-full bg-[#F7F2E7] p-2 text-[#4E6A45] transition ${isOpen ? 'rotate-180 text-amber-500' : ''}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      {isOpen ? <p className="mt-3 text-base leading-7 text-gray-600">{answer}</p> : null}
    </div>
  );
}

export default function RetiroPageStyle2() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className={`min-h-screen ${theme.background} text-gray-900 scroll-smooth`}>
      <Helmet>
        <title>Retiro espiritual en los Pirineos | CIEPTIS</title>
        <meta
          name="description"
          content="Descubre un retiro espiritual en los Pirineos Catalanes con naturaleza, respiración consciente, meditación y un entorno de calma." 
        />
        <link rel="canonical" href="https://centroentrenadores.com/retiros-style" />
        <meta property="og:title" content="Retiro espiritual en los Pirineos | CIEPTIS" />
        <meta
          property="og:description"
          content="Una experiencia de retiro en los Pirineos para descansar, respirar y reconectar con la naturaleza."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://centroentrenadores.com/retiros-style" />
      </Helmet>

      <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-[#3C2C22] text-white">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
            alt="Paisaje de montaña en la naturaleza"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18120E]/90 via-[#18120E]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          <div className="relative mx-auto flex min-h-[84vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                <span className="h-px w-10 bg-[#C79A3B]" />
                Retiros CIEPTIS
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Un retiro para volver a la calma de la montaña.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#F7F2E7] md:text-lg">
                Experiencias de silencio, respiración consciente y presencia en los Pirineos Catalanes, diseñadas para detener el ruido cotidiano y reconectar con lo esencial.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="#destacado"
                  className={`${theme.buttonmy} inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold shadow-lg shadow-gray-950/20`}
                >
                  Descubrir el próximo retiro
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="#filosofia"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#F7F2E7]/60 bg-[#F7F2E7]/5 px-7 py-4 font-semibold text-[#F7F2E7] backdrop-blur-sm transition hover:border-amber-400 hover:bg-white/10"
                >
                  Conocer la filosofía
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#F7F2E7] py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                <span className="h-px w-8 bg-[#C79A3B]" />
                Una pausa consciente
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#3C2C22] md:text-5xl">
                Un espacio para detenerse, respirar y recordar.
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                Cada encuentro combina naturaleza, meditación, respiración consciente y un ritmo más íntimo para que el cuerpo y la mente puedan volver a encontrarse con calma y claridad.
              </p>
            </motion.div>
            <div className="mt-10 flex flex-wrap gap-4">
              {featureItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
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

        <section id="destacado" className="bg-[#FCF7EE] py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="overflow-hidden rounded-2xl border border-[#7A5A3A]/15 bg-white shadow-xl shadow-gray-900/10 lg:grid lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="p-8 lg:p-10">
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                  <span className="h-px w-8 bg-[#C79A3B]" />
                  Retiro destacado
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#3C2C22] md:text-5xl">
                  Retiro espiritual en los Pirineos 2026
                </h2>
                <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
                  Una experiencia de inmersión en la naturaleza para descansar, respirar, recuperar la claridad y conectar con una dimensión más profunda de uno mismo.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#7A5A3A]/10 bg-[#F7F2E7]/80 p-4">
                    <p className="text-sm font-semibold text-[#3C2C22]">Lugar</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">Espacio privado en los Pirineos Catalanes</p>
                  </div>
                  <div className="rounded-xl border border-[#7A5A3A]/10 bg-[#F7F2E7]/80 p-4">
                    <p className="text-sm font-semibold text-[#3C2C22]">Fechas</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">Próximamente</p>
                  </div>
                  <div className="rounded-xl border border-[#7A5A3A]/10 bg-[#F7F2E7]/80 p-4">
                    <p className="text-sm font-semibold text-[#3C2C22]">Duración</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">Programa de varios días</p>
                  </div>
                  <div className="rounded-xl border border-[#7A5A3A]/10 bg-[#F7F2E7]/80 p-4">
                    <p className="text-sm font-semibold text-[#3C2C22]">Grupo</p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">Plazas limitadas y muy reducidas</p>
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
                    to="#contacto"
                    className="inline-flex items-center justify-center rounded-lg border border-[#7A5A3A]/20 px-6 py-3 font-semibold text-[#3C2C22] transition hover:bg-[#F7F2E7]"
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

        <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-[#3C2C22] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                <span className="h-px w-8 bg-[#C79A3B]" />
                Más allá del descanso
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Una experiencia más profunda que el simple descanso.
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
                    transition={{ duration: 0.5, delay: index * 0.04, ease: 'easeOut' }}
                    className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C79A3B]/60 hover:bg-white/10"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#C79A3B]">
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

        <section id="filosofia" className="bg-[#B9C3A5]/25 py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="grid gap-10 rounded-2xl border border-[#7A5A3A]/15 bg-[#F7F2E7]/80 p-8 shadow-lg shadow-gray-900/10 lg:grid-cols-[1.05fr_0.95fr] lg:p-10"
            >
              <div>
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                  <span className="h-px w-8 bg-[#C79A3B]" />
                  Nuestra filosofía
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#3C2C22] md:text-5xl">
                  La calma no es un lujo. Es una forma de volver a casa.
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                  No entendemos el retiro como una huida de la vida cotidiana, sino como una pausa consciente para volver a ella con más claridad. Creamos espacios sencillos, respetuosos y humanos en los que la naturaleza, la respiración y el silencio ayudan a recuperar el equilibrio interior.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#7A5A3A]/10 bg-gradient-to-br from-gray-700 via-gray-900 to-[#3C2C22]">
                <img src={images.philosophy} alt="Paisaje sereno de montaña y naturaleza" className="absolute inset-0 h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="relative p-8 md:p-10">
                  <div className="border-l-2 border-[#C79A3B] pl-6 text-2xl font-medium leading-relaxed text-[#F7F2E7] md:text-3xl">
                    A veces no necesitamos ir más rápido. Necesitamos detenernos lo suficiente para volver a escuchar lo esencial.
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
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                <span className="h-px w-8 bg-[#C79A3B]" />
                Próximas experiencias
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#3C2C22] md:text-5xl">
                Próximas experiencias de retiro.
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {retreats.map((retreat) => (
                <RetreatCard key={retreat.title} retreat={retreat} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F2E7] py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-8 rounded-2xl border border-[#7A5A3A]/15 bg-white/80 p-8 shadow-lg shadow-gray-900/10 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                  <span className="h-px w-8 bg-[#C79A3B]" />
                  ¿Para quién?
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#3C2C22] md:text-5xl">
                  Para quienes necesitan un espacio de pausa.
                </h2>
                <ul className="mt-8 space-y-4 text-base leading-8 text-gray-600 md:text-lg">
                  <li className="flex gap-3">
                    <Check className="mt-2 h-5 w-5 shrink-0 text-[#4E6A45]" />
                    <span>Buscan un tiempo de descanso del ritmo cotidiano.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-2 h-5 w-5 shrink-0 text-[#4E6A45]" />
                    <span>Desean reconectar con la naturaleza y el silencio.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-2 h-5 w-5 shrink-0 text-[#4E6A45]" />
                    <span>Tienen curiosidad por la meditación, la respiración y la presencia.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-2 h-5 w-5 shrink-0 text-[#4E6A45]" />
                    <span>Valorán los grupos pequeños y los espacios de atención cuidadosa.</span>
                  </li>
                </ul>
                <div className="mt-8 rounded-xl border border-[#7A5A3A]/15 bg-white/70 p-5 text-[#3C2C22]">
                  No es necesario tener experiencia previa en meditación, yoga o prácticas espirituales.
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#7A5A3A]/10 bg-gradient-to-br from-gray-700 via-gray-900 to-[#3C2C22] p-8 text-white">
                <img src={images.location} alt="Paisaje de montaña y bosque en los Pirineos" className="absolute inset-0 h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="relative">
                  <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                    <span className="h-px w-8 bg-[#C79A3B]" />
                    Ubicación
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">En los Pirineos Catalanes</h3>
                  <p className="mt-4 text-base leading-8 text-gray-300">
                    El retiro tendrá lugar en un lugar privado rodeado de naturaleza, con la intención de ofrecer un entorno tranquilo, alejado del ruido y adecuado para el descanso, la atención y la práctica.
                  </p>
                  <div className="mt-8 max-w-2xl border-l-2 border-amber-400 bg-black/20 px-6 py-5 text-[#F7F2E7] backdrop-blur-sm">
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
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                <span className="h-px w-8 bg-[#C79A3B]" />
                Preguntas frecuentes
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#3C2C22] md:text-5xl">
                Respuestas claras para quien se acerca por primera vez.
              </h2>
            </motion.div>
            <div className="mt-8 rounded-2xl border border-[#7A5A3A]/15 bg-white p-4 shadow-sm shadow-gray-900/5">
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

        <section id="contacto" className="relative overflow-hidden bg-gradient-to-br from-gray-700 via-gray-900 to-[#3C2C22] py-24 text-white">
          <img src={images.hero} alt="Paisaje montañoso con una atmósfera serena" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/35" />
          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#C79A3B]">
                <span className="h-px w-8 bg-[#C79A3B]" />
                Última invitación
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Recibe la información del próximo retiro.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                Déjanos tus datos y te avisaremos cuando publiquemos fechas, programa y condiciones de inscripción.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contacto"
                  className={`${theme.accent} inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold text-gray-950 shadow-lg shadow-gray-950/20`}
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
