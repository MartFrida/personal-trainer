import ContainerMain from "../components/ContainerMain";

// import { theme } from '../helpers/theme';
const theme = {
  background: "bg-gray-100",
  primary: "bg-gradient-to-r from-red-600 to-red-950 text-white",
  secondary: "bg-yellow-400 text-white",
  text: "text-gray-800",
  hover: "hover:bg-gray-800 transition duration-200",
  accent: "bg-gray-900 hover:bg-amber-600 transition duration-200",
  buttonbg: "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white",
};

export const FisicoCulturismo = () => {
  return (
    <ContainerMain className={`${theme.background} p-8 mt-20`}>
      <p className={`${theme.text}`}>Bajar de peso, musculacion, rehabilitacion, definicion muscular, preparacion fisica, preparacion a oposiciones para policia nacional, bomberos, mossos de escuadra</p>

      <div className={`${theme.text} mt-8`}>
        <section id="runt">
          <h2 className={`${theme.accent} text-2xl text-white p-4 rounded-lg`}>Running</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </section>
        <section id="running">
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Running</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </section>
        <section id="run">
          <h2 className={`${theme.secondary} text-2xl p-4 rounded-lg`}>Running</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </section>

        <button className={`${theme.buttonbg}`}>Button</button>
      </div>

      {/* With photo */}
      {/* <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('../../public/img/amaruk2.jpg')" }}>
        <div className=" p-6 rounded-lg">
          <h1 className="text-4xl font-bold">ENTRENADOR PERSONAL EN BARCELONA</h1>
          <p className="text-lg mt-4">La motivación es lo que te hace empezar. El hábito es lo que mantiene el progreso.</p>
        </div>
      </section> */}

    </ContainerMain>
  )
}
