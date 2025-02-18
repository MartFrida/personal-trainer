import { theme } from "../helpers/theme"

export const PersonalizedTraining = () => {
  return (
    <div className={`${theme.background} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth`}>
      <section className={`${theme.primary}  w-full p-4 rounded-lg`}>
        <h1 className="text-3xl font-semibold text-white">Entrenador personal Amaruk Kaishapanta</h1>
        <p>Running, Calistenia, Alteriofilia, Culturismo, Fitnes, Natacion, Senderismo, Espining, Defensa Personal, Artes MArciales Mixtas, Taichi, Estreching, Pilates, Yoga, Boxing</p>
      </section>
      <div className={`${theme.text} mt-8 w-full`}>

        <section id="running" className={`bg-white p-6 rounded-lg ${theme.shadow2xl} my-4 scroll-mt-24`}>
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg border-l-4 border-amber-500 hover:scale-101 transition duration-300`}>
            Running</h2>
          <p className="leading-relaxed tracking-wide text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </section>

        <section id="calistenia" className={`bg-white p-6 rounded-lg ${theme.shadow2xl} my-4 scroll-mt-24`}>
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Calistenia</h2>
          <p className="leading-relaxed tracking-wide text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section id='alteriofilia' className="mt-8">
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Alteriofilia</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


        </section>

        <section id="culturismo">
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Culturismo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nuestras instalaciones</li>
            <li>En tu casa</li>
            <li>En tu oficina</li>
            <li>Outdoor: en el parque, la playa…</li>
          </ul>
        </section>

        <section id="fitnes">
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Fitnes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section id='natacion' className="mt-8">
          <h2 className={`${theme.primary} text-2xl p-4 rounded-lg`}>Natacion</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


        </section>
      </div>
    </div>
  )
}
