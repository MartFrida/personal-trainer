import ContainerMain from "../components/ContainerMain";
import SectionRegular from "../components/SectionRegular";
import ninosGroup from '../assets/ninos-group2.jpg'

/* eslint-disable react-refresh/only-export-components */
export const theme = {
  background: "bg-gray-300",
  primary: "bg-gradient-to-r from-gray-600 to-gray-950 text-white",
  secondary: "bg-gray-700 text-white",
  text: "text-gray-800",
  hover: "hover:bg-gray-800 transition duration-200",
  accent: "bg-amber-500 hover:bg-amber-600 transition duration-200",
  buttonbg: "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800",
};

export const ClacesInfantiles = () => {
  return (
    <ContainerMain className={`${theme.background} p-8`}>
      <section className={`${theme.primary} p-6 rounded-lg flex gap-4`}>
        <img
          src={ninosGroup}
          alt="Niños practicando artes marciales"
          className="mt-4 h-[60vh] w-auto rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-semibold text-white">Artes Marciales para Niños</h1>
          <p className="mt-2 text-lg">Una de nuestras líneas de especialización es la enseñanza de artes marciales a niños y jóvenes desde los 3 a los 14 años.</p>
          <p>Taekondo, Judo, MMA, Hapkido, Cursos de Verano, Exurciones, Actividades Ludicas al Aire Libre, Juegos Recreacionales, Artes Interpretativas</p>
          <ul className="mt-4 list-disc list-inside text-white">
            <li>Mejora la coordinación y condición física</li>
            <li>Fomenta la disciplina y el respeto</li>
            <li>Incrementa la confianza y autoestima</li>
            <li>Clases seguras y supervisadas por expertos</li>
          </ul>
        </div>

      </section>

      <SectionRegular id="calistenia" >
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>A través de una metodología dinámica y divertida, promovemos el desarrollo físico, mental y emocional de los más pequeños.</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">

          Nuestros entrenamientos ayudan a mejorar la coordinación, la disciplina y la confianza en sí mismos, fomentando valores esenciales como el respeto, la perseverancia y el trabajo en equipo. Con instructores altamente capacitados y un ambiente seguro, garantizamos una experiencia enriquecedora que beneficia tanto el bienestar físico como el crecimiento personal de cada niño.
        </p>
        <p className="leading-relaxed tracking-wide text-gray-700">¡Haz que tu hijo descubra el mundo de las artes marciales con nosotros! 💪🥋</p>
      </SectionRegular>


      <section className="mt-8">
        <p className="text-lg">Si tienes alguna duda, no dudes en contactarnos. ¡Te esperamos Amaruk Kaishapanta Barcelona!</p>
      </section>


    </ContainerMain>
  );
}
