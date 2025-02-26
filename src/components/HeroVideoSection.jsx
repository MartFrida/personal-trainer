export default function HeroVideoSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black rounded-lg">
      {/* Видео фон */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/video_trena2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-gray-950/50 md:bg-gray-950/85 rounded-lg"></div>

      {/* Контент */}
      <div className="relative  text-center text-white px-6">
        <h1 className=" text-3xl md:text-5xl font-bold  leading-relaxed tracking-wide" style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>Entrenamiento Personal para Niños: ¡Diversión y Movimiento!</h1>
        <p className="mt-4 text-xl tracking-widest leading-relaxed tracking-wide" style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>¡Deja que tu hijo descubra el placer de moverse y estar activo!
        </p>
        {/* <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
          Начать
        </button> */}
      </div>
    </section>
  );
}
