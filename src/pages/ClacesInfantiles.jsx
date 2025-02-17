/* eslint-disable react-refresh/only-export-components */
export const theme = {
  background: "bg-white",
  primary: "bg-gradient-to-r from-green-400 to-green-600 text-white",
  secondary: "bg-blue-600 text-white",
  accent: "bg-amber-500 text-white",
  text: "text-gray-800",
  hover: "hover:bg-green-700",
  buttonbg: "bg-gradient-to-r from-green-400 to-green-600 text-white",
};

export const ClacesInfantiles = () => {
  return (
    <div className={`${theme.background} p-8`}>
      <section className={`${theme.primary} p-6 rounded-lg`}>
        <h1 className="text-3xl font-semibold text-white">Artes Marciales para Niños</h1>
        <p className="mt-2 text-lg">Una de nuestras líneas de especialización es la enseñanza de artes marciales a niños y jóvenes desde los 3 a los 14 años.</p>
        <p>Taekondo, Judo, MMA, Hapkido, Cursos de Verano, Exurciones, Actividades Ludicas al Aire Libre, Juegos Recreacionales, Artes Interpretativas</p>
      </section>

      <div className={`${theme.text} mt-8`}>
        <p className="mb-6">
          Tenemos clases regulares durante todo el curso escolar y también organizamos cursos intensivos y casales de verano, invierno y semana santa. Todas las actividades están diseñadas en colaboración con expertos en educación infantil y siempre intentamos limitar el número de alumnos por clase para ofrecerles la máxima atención en todo momento.
        </p>

        <p className="mb-6">
          Y como extra ofrecemos a nuestros clientes la posibilidad de organizar su fiesta de cumpleaños en el centro.
        </p>

        <h2 className={`${theme.accent} text-2xl p-4 rounded-lg`}>Beneficios de las artes marciales para los niños</h2>
        <p className="mb-4">
          En las artes marciales, al contrario de lo que pueda parecer, la preparación para el combate y la competitividad no son objetivos principales. El respeto hacia el maestro es un aspecto esencial que ha perdurado en el tiempo y que se hace todavía más relevante cuando nos preparamos para enseñar artes marciales a niños.
        </p>
        <p className="mb-6">
          El entrenamiento enseña a los niños a defenderse, pero también se centra en la educación y el desarrollo personal, haciendo de esta práctica una de las más completas. Además de ganar agilidad, resistencia y coordinación, las artes marciales impactan positivamente en la formación del carácter.
        </p>

        <section>
          <h3 className={`${theme.primary} text-xl font-semibold p-4 rounded-lg`}>Disciplina</h3>
          <p className="mb-4">
            La disciplina es un comportamiento adquirido a través de la perseverancia y la constancia. Practicar artes marciales ayuda a los niños a ser más disciplinados y a seguir normas. Además, fomenta el respeto, el trabajo en grupo y el liderazgo, siempre de la mano de sus compañeros.
          </p>

          <h3 className={`${theme.primary} text-xl font-semibold p-4 rounded-lg`}>Concentración</h3>
          <p className="mb-4">
            El niño aprenderá a mejorar su concentración y a gestionar situaciones complejas con calma. Las artes marciales les enseñan a enfocarse en sus movimientos y a evitar el estrés cotidiano.
          </p>

          <h3 className={`${theme.primary} text-xl font-semibold p-4 rounded-lg`}>Respeto</h3>
          <p className="mb-4">
            Lo más importante en el dojo es el respeto. Los niños aprenden a saludar a sus maestros, a tratar a los demás con respeto y a entender que las técnicas de combate son secundarias.
          </p>

          <h3 className={`${theme.primary} text-xl font-semibold p-4 rounded-lg`}>Confianza en uno mismo</h3>
          <p className="mb-4">
            Gracias al sistema de cinturones, los niños tienen metas a alcanzar, lo que refuerza su autoestima. El esfuerzo y la superación son recompensados, lo que fortalece su confianza en sí mismos.
          </p>

          <h3 className={`${theme.primary} text-xl font-semibold p-4 rounded-lg`}>Trabajo Físico</h3>
          <p className="mb-4">
            El acondicionamiento físico es fundamental. Las artes marciales mejoran la fuerza muscular, la salud ósea, la capacidad cardiovascular y respiratoria, y favorecen el desarrollo de los cinco sentidos.
          </p>
        </section>

        <section>
          <h2 className={`${theme.accent} text-2xl p-4 rounded-lg`}>Nuestro compromiso como escuela de artes marciales para niños</h2>
          <p className="mb-6">
            Contamos con una psicóloga especialista en educación infantil que sigue el progreso de cada alumno de forma personalizada, permitiendo modificar las clases según sus necesidades. Los padres pueden consultar la agenda con el progreso de sus hijos en cualquier momento.
          </p>

          <h3 className={`${theme.primary} text-xl font-semibold p-4 rounded-lg`}>¿Qué aprendemos en cada edad?</h3>
          <div className="mb-6">
            <h4 className={`${theme.secondary} text-lg p-4 rounded-lg`}>De los 3 a los 5 años: PANDAS</h4>
            <p>Les encanta la actividad física y cualquier cosa que implique jugar. Iniciamos a los niños en las técnicas básicas de artes marciales mientras desarrollan su autonomía.</p>
          </div>

          <div className="mb-6">
            <h4 className={`${theme.secondary} text-lg p-4 rounded-lg`}>De los 6 a los 7 años: TIGRES</h4>
            <p>Los niños de esta edad son entusiastas y resuelven problemas creativamente. Aprenden las técnicas de manera divertida y progresiva.</p>
          </div>

          <div className="mb-6">
            <h4 className={`${theme.secondary} text-lg p-4 rounded-lg`}>De los 8 a los 11 años: LEONES</h4>
            <p>Esta es la edad de oro. Los niños absorben rápidamente todo lo que se les enseña, y su motivación para mejorar es constante.</p>
          </div>

          <div className="mb-6">
            <h4 className={`${theme.secondary} text-lg p-4 rounded-lg`}>De los 12 a los 14 años: JUNIORS</h4>
            <p>Los adolescentes enfrentan retos físicos y emocionales. Las artes marciales les enseñan a gestionar sus emociones mientras se desarrollan físicamente.</p>
          </div>

          <section className="mt-8">
            <h2 className={`${theme.accent} text-2xl p-4 rounded-lg`}>Defensa personal para niños</h2>
            <p className="mb-6">
              Las artes marciales enseñan a los niños a controlar sus emociones y resolver conflictos pacíficamente, pero también les proporcionan las herramientas necesarias para defenderse si es necesario.
            </p>
            <p className="mb-6">
              Nuestros programas están diseñados para ser innovadores y seguros, con un enfoque pedagógico avanzado adaptado a cada grupo de edad.
            </p>
          </section>

          <section className="mt-8">
            <p className="text-lg">Si tienes alguna duda, no dudes en contactarnos. ¡Te esperamos Amaruk Kaishapanta Barcelona!</p>
          </section>
        </section>
      </div>
    </div>
  );
}
