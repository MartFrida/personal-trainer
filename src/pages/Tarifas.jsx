import ContainerMain from "../components/ContainerMain";

import { theme } from "../helpers/theme"

const tarifasData = [
  {
    title: 'Entrenamiento a Distancia (ONLINE)',
    description: 'Entrenamiento personalizado desde la comodidad de tu hogar.',
    priceMin: 20,
    priceResultMin: 160,
    discountPriceMin: 150,
    priceResultDose: 240,
    discountPriceDose: 220,
  },
  {
    title: 'Entrenamiento en Domicilio / Parque',
    description: 'Entrenamiento personal en tu hogar o en un parque cercano.',
    priceMin: 25,
    priceResultMin: 200,
    discountPriceMin: 180,
    priceResultDose: 300,
    discountPriceDose: 280,
  },
  {
    title: 'Entrenamiento en Gimnasio',
    description: 'Entrenamiento en un gimnasio con acceso a todas las instalaciones.',
    priceMin: 35,
    priceResultMin: 280,
    discountPriceMin: 250,
    priceResultDose: 420,
    discountPriceDose: 380,
  },
];

const Tarifas = () => {
  return (
    <ContainerMain>
      <section className={`${theme.primary} p-6 rounded-lg`}>
        <h2 className="text-5xl font-bold text-center mb-6">Nuestras Tarifas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tarifasData.map((tarifa, index) => (
            <div key={index} className={`${theme.background} shadow-md rounded-lg p-6 flex flex-col justify-between`}>
              <h3 className={`${theme.text} text-2xl font-semibold mb-2 text-center`}>{tarifa.title}</h3>
              <p className="text-gray-800 mb-4">{tarifa.description}</p>

              <span>
                <span className="text-gray-800 text-lg font-bold"> €{tarifa.priceMin}</span>
                <span className="text-gray-800 text-lg"> por 1 clase / 1 hora</span>
              </span>
              <span>
                <span className="text-gray-800 line-through "> €{tarifa.priceResultMin}</span>
                <span className="text-gray-800 text-lg font-bold"> €{tarifa.discountPriceMin}</span>
                <span className="text-gray-800 text-lg"> por 1 mes / 8 horas</span>
              </span>

              <span>
                <span className="text-gray-800 line-through "> €{tarifa.priceResultDose}</span>
                <span className="text-gray-800 text-lg font-bold"> €{tarifa.discountPriceDose}</span>
                <span className="text-gray-800 text-lg"> 1 mes / 12 horas</span>
              </span>

              <button
                className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white mt-4"
              >
                Elegir
              </button>
            </div>
          ))}
        </div>
      </section>
    </ContainerMain>
  )
};

export default Tarifas;