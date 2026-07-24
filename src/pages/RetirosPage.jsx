/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Compass,
  ChevronDown,
  Heart,
  Leaf,
  Mountain,
  Sparkles,
  Trees,
  Wind,
  Sunrise,
  Circle,
} from 'lucide-react';

// TODO: update hero image, links and retreat data here as new retreats are published.
const featureItems = [
  {
    title: 'Naturaleza y silencio',
    icon: Trees,
  },
  {
    title: 'Prácticas conscientes',
    icon: Sparkles,
  },
  {
    title: 'Grupos reducidos',
    icon: Heart,
  },
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
    <div className="flex items-center gap-3 rounded-full border border-[#B9C3A5]/70 bg-[#F7F2E7] px-4 py-3 text-sm font-medium text-[#3C2C22] shadow-sm">
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
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`group rounded-[2rem] border border-[#B9C3A5]/70 bg-white p-6 shadow-[0_12px_45px_-20px_rgba(60,44,34,0.35)] ${
        retreat.active ? 'bg-[#F7F2E7] ring-1 ring-[#C79A3B]/40' : 'bg-[#FCFAF4] opacity-90'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B45A3C]">
            {retreat.status}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-[#3C2C22]">{retreat.title}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
          retreat.active ? 'bg-[#4E6A45] text-[#F7F2E7]' : 'bg-[#EDE7D9] text-[#7A5A3A]'
        }`}>
          {retreat.active ? 'Disponible' : 'Próximamente'}
        </span>
      </div>
      <div className="mt-6">
        <Link
          to={retreat.link}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#B45A3C] focus:ring-offset-2 ${
            retreat.active
              ? 'bg-[#7A5A3A] text-[#F7F2E7] hover:bg-[#63442D]'
              : 'bg-transparent text-[#4E6A45] hover:bg-[#F7F2E7]'
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
    <div className="rounded-[1.25rem] border border-[#B9C3A5]/70 bg-white px-5 py-4 shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-[#3C2C22]">{question}</span>
        <span className={`rounded-full bg-[#F7F2E7] p-2 text-[#4E6A45] transition ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      {isOpen ? <p className="mt-3 text-sm leading-7 text-[#5E4A3A]">{answer}</p> : null}
    </div>
  );
}

export default function RetirosPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#F7F2E7] text-[#3C2C22] scroll-smooth">
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
        <section className="relative isolate overflow-hidden bg-[#3C2C22] text-[#F7F2E7]">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
            alt="Paisaje de montaña en la naturaleza"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,22,18,0.86)_0%,rgba(28,22,18,0.62)_45%,rgba(28,22,18,0.3)_100%)]" />
          <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="mb-5 inline-flex rounded-full border border-[#F7F2E7]/30 bg-[#F7F2E7]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#F7F2E7] backdrop-blur-sm">
                Retiros CIEPTIS
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Retiros espirituales para volver a tu centro
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F5EEDC] sm:text-xl">
                Experiencias profundas en contacto con la naturaleza, creadas para detener el ruido cotidiano, recuperar la energía y reconectar con lo esencial.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="#destacado"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C79A3B] px-6 py-3 text-sm font-semibold text-[#3C2C22] transition hover:bg-[#B98E2F] focus:outline-none focus:ring-2 focus:ring-[#F7F2E7] focus:ring-offset-2 focus:ring-offset-[#3C2C22]"
                >
                  Descubrir el próximo retiro
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="#filosofia"
                  className="inline-flex items-center justify-center rounded-full border border-[#F7F2E7]/55 px-6 py-3 text-sm font-semibold text-[#F7F2E7] transition hover:bg-[#F7F2E7]/10 focus:outline-none focus:ring-2 focus:ring-[#F7F2E7] focus:ring-offset-2 focus:ring-offset-[#3C2C22]"
                >
                  Conocer nuestra filosofía
                </Link>
              </div>
            </motion.div>
            <div className="mt-16 flex items-center gap-3 text-sm text-[#F5EEDC]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C79A3B]" />
              <span>Desplázate hacia la experiencia</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B45A3C]">Una pausa consciente</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#3C2C22] sm:text-4xl">
              Un espacio para detenerse, respirar y recordar
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5E4A3A]">
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <FeatureCard title={item.title} icon={item.icon} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="destacado" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-[#B9C3A5]/70 bg-[#FDF8EE] p-6 shadow-[0_24px_70px_-30px_rgba(60,44,34,0.35)] lg:grid-cols-[1.2fr_0.8fr] lg:p-10"
          >
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B45A3C]">Próximo retiro</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#3C2C22] sm:text-4xl">
                  Retiro Espiritual en los Pirineos 2026
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5E4A3A]">
                  Una experiencia de inmersión en la naturaleza de los Pirineos Catalanes para descansar, respirar, recuperar la claridad y conectar con una dimensión más profunda de ti mismo.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-[#E6D9C4] bg-white/80 p-4">
                    <p className="text-sm font-semibold text-[#4E6A45]">Lugar</p>
                    <p className="mt-1 text-sm leading-7 text-[#5E4A3A]">Lugar privado en los Pirineos Catalanes</p>
                    <p className="mt-3 text-xs leading-6 text-[#7A5A3A]">
                      La ubicación exacta será enviada únicamente a los participantes inscritos.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-[#E6D9C4] bg-white/80 p-4">
                    <p className="text-sm font-semibold text-[#4E6A45]">Fechas</p>
                    <p className="mt-1 text-sm leading-7 text-[#5E4A3A]">Fechas próximamente</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-[#E6D9C4] bg-white/80 p-4">
                    <p className="text-sm font-semibold text-[#4E6A45]">Duración</p>
                    <p className="mt-1 text-sm leading-7 text-[#5E4A3A]">Programa de varios días</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-[#E6D9C4] bg-white/80 p-4">
                    <p className="text-sm font-semibold text-[#4E6A45]">Grupo</p>
                    <p className="mt-1 text-sm leading-7 text-[#5E4A3A]">Plazas limitadas</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/retiros/retiro-espiritual-pirineos-2026/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A5A3A] px-6 py-3 text-sm font-semibold text-[#F7F2E7] transition hover:bg-[#63442D] focus:outline-none focus:ring-2 focus:ring-[#7A5A3A] focus:ring-offset-2"
                >
                  Ver detalles del retiro
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center rounded-full border border-[#7A5A3A] px-6 py-3 text-sm font-semibold text-[#7A5A3A] transition hover:bg-[#F7F2E7] focus:outline-none focus:ring-2 focus:ring-[#7A5A3A] focus:ring-offset-2"
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
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B45A3C]">Más allá del descanso</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#3C2C22] sm:text-4xl">
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
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-[1.75rem] border border-[#B9C3A5]/70 bg-white p-6 shadow-[0_18px_40px_-25px_rgba(60,44,34,0.3)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE7D9] text-[#7A5A3A]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#3C2C22]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5E4A3A]">{card.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="filosofia" className="bg-[#E8E4D5] py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2.5rem] border border-[#B9C3A5]/70 bg-[#F7F2E7] p-8 shadow-[0_24px_60px_-35px_rgba(60,44,34,0.3)] lg:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B45A3C]">Nuestra filosofía</p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#3C2C22] sm:text-4xl">
                    Nuestra filosofía
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-[#5E4A3A]">
                    No entendemos el retiro como una huida de la vida cotidiana, sino como una pausa consciente para volver a ella con más claridad. Creamos espacios sencillos, humanos y respetuosos en los que la naturaleza, el cuerpo, la respiración y el silencio ayudan a recuperar la conexión interior.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-[#B9C3A5]/70 bg-[#E8E4D5] p-8 text-center">
                  <Leaf className="mx-auto text-[#4E6A45]" size={32} />
                  <blockquote className="mt-5 text-2xl font-semibold leading-10 text-[#3C2C22]">
                    “A veces no necesitamos ir más rápido. Necesitamos detenernos lo suficiente para volver a escucharnos.”
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B45A3C]">Próximas experiencias</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#3C2C22] sm:text-4xl">
              Próximas experiencias
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {retreats.map((retreat) => (
              <RetreatCard key={retreat.title} retreat={retreat} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2.5rem] border border-[#B9C3A5]/70 bg-white p-8 shadow-[0_24px_60px_-35px_rgba(60,44,34,0.3)] lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B45A3C]">¿Para quién?</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#3C2C22] sm:text-4xl">
                ¿Para quién es este retiro?
              </h2>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-[#5E4A3A]">
                <li className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C79A3B]" />
                  Necesitan parar y descansar del ritmo cotidiano.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C79A3B]" />
                  Desean reconectar con la naturaleza.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C79A3B]" />
                  Sienten curiosidad por la meditación y la respiración consciente.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C79A3B]" />
                  Buscan una experiencia personal profunda.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C79A3B]" />
                  Valorán los grupos pequeños y los espacios respetuosos.
                </li>
              </ul>
              <p className="mt-6 text-base leading-7 text-[#7A5A3A]">
                No es necesario tener experiencia previa en meditación, yoga o prácticas espirituales.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#F7F2E7] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4E6A45]">Ubicación</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#3C2C22]">En los Pirineos Catalanes</h3>
              <p className="mt-4 text-lg leading-8 text-[#5E4A3A]">
                El retiro tendrá lugar en un espacio privado rodeado de naturaleza en los Pirineos Catalanes. Buscamos un entorno tranquilo, alejado del ruido y adecuado para las prácticas, el descanso y la convivencia del grupo.
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-[#B9C3A5]/70 bg-white p-5 text-sm leading-7 text-[#7A5A3A]">
                La ubicación exacta será enviada únicamente a los participantes inscritos.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B45A3C]">Preguntas frecuentes</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#3C2C22] sm:text-4xl">
              Preguntas frecuentes
            </h2>
          </motion.div>
          <div className="mt-8 space-y-3">
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
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.5rem] border border-[#B9C3A5]/70 bg-[#4E6A45] p-8 text-[#F7F2E7] shadow-[0_24px_70px_-30px_rgba(60,44,34,0.35)] lg:p-12"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E9D9A6]">Última invitación</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Recibe la información del próximo retiro
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#F3EFE4]">
                Déjanos tus datos y te avisaremos cuando publiquemos las fechas, el programa y las condiciones de inscripción.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C79A3B] px-6 py-3 text-sm font-semibold text-[#3C2C22] transition hover:bg-[#B98E2F] focus:outline-none focus:ring-2 focus:ring-[#F7F2E7] focus:ring-offset-2 focus:ring-offset-[#4E6A45]"
                >
                  Quiero recibir información
                  <ArrowRight size={18} />
                </Link>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#E8E4D5]">
                Usaremos tus datos únicamente para responder a tu solicitud y enviarte información relacionada con los retiros.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
