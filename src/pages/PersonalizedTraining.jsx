import ContainerMain from "../components/ContainerMain"
import SectionRegular from "../components/SectionRegular"
import { theme } from "../helpers/theme"

export const PersonalizedTraining = () => {
  return (
    <ContainerMain className={`${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}>
      {/* <section className={`${theme.primary}  w-full p-4 rounded-lg`}>
        <h1 className="text-3xl font-semibold text-white">Entrenador personal Amaruk Kaishapanta</h1>
        <p>Running, Calistenia, Alteriofilia, Culturismo, Fitnes, Natacion, Senderismo, Espining, Defensa Personal, Artes MArciales Mixtas, Taichi, Estreching, Pilates, Yoga, Boxing</p>
      </section> */}

      <SectionRegular id="running" >
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg border-l-4 border-amber-500 hover:scale-101 transition duration-300`}>
          🏃‍♂️ Run Faster, Stronger, Smarter! 🏃‍♀️</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">Whether you`re training for your first 5K, a marathon, or just looking to improve your endurance, my personalized running coaching will help you reach your goals. Let`s take your running to the next level!
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
          <li>🔹 Customized Running Plans – Tailored to your experience level and goals.</li>
          <li>🔹 Technique & Form Analysis – Improve efficiency and reduce injury risk.</li>
          <li>🔹 Marathon & Race Training – 5K, 10K, Half-Marathon, Full Marathon & Ultra.</li>
          <li>🔹 Strength & Mobility Workouts – Essential exercises to build a runner’s body.</li>
          <li>🔹 Personalized Nutrition Guidance – Fuel your runs the right way.</li>
        </ul>
        <p className="leading-relaxed tracking-wide text-gray-700">🚀 Ready to Run Smarter? Contact me today for a free assessment!

        </p>
      </SectionRegular>

      <SectionRegular id="calistenia" >
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>Unlock Your Full Potential with Calisthenics!</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">As a certified Street Workout & Calisthenics Personal Trainer, I help you achieve incredible strength, mobility, and endurance—using nothing but your body! Whether you`re a beginner or an advanced athlete, I create personalized training plans to master bodyweight skills like muscle-ups, planche, and handstands. Let’s build a stronger, more agile version of you!</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
          <li>👉 Personalized Training Plans</li>
          <li>👉 Strength, Mobility & Fat Loss</li>
          <li>👉 Beginner to Advanced Levels</li>
          <li>💥 Train Anywhere, Anytime! 💥</li>
        </ul>
        <p className="leading-relaxed tracking-wide text-gray-700">📅 Book Your Consultation Now!!</p>
      </SectionRegular>

      <SectionRegular id='halterofilia' className="mt-8">
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>Halterofilia - Weightlifting🏋️‍♂️ Lift Stronger. Lift Smarter. 🏋️‍♀️</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">Ready to push your limits and build real strength? Whether you`re looking to crush personal records, improve your technique, or get in the best shape of your life, my weightlifting coaching is designed to help you achieve your goals safely and effectively.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
          <li>🔹 Personalized Weightlifting Plans – Tailored to your goals, whether you`re looking to increase strength, build muscle, or improve form.            </li>
          <li>🔹 Olympic Weightlifting – Master the clean & jerk, snatch, and other Olympic lifts with expert coaching.</li>
          <li>🔹 Powerlifting Training – Focused programming for the squat, bench press, and deadlift to build raw strength.</li>
          <li>🔹 Technique Coaching – Improve your lift form and execution to prevent injuries and maximize results.</li>
          <li>🔹 Strength & Mobility Workouts – Enhance your mobility and functional strength to improve performance.</li>
        </ul>
        <p className="leading-relaxed tracking-wide text-gray-700">💥 Transform Your Strength – Start Today! 💥</p>
      </SectionRegular>

      <SectionRegular id="culturismo">
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>Culturismo 💪 Build the Body You`ve Always Wanted! 💪</h2>
        <p className="leading-relaxed tracking-wide text-gray-700 my-2">Whether you’re looking to gain muscle mass, define your physique, or sculpt your body to perfection, I’m here to guide you every step of the way. As your dedicated Bodybuilding Coach, I’ll help you maximize your training, nutrition, and recovery to achieve your best results.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 list-none">
          <li>🔹 Customized Bodybuilding Training Plans – Designed to build muscle, enhance symmetry, and reduce body fat.</li>
          <li>🔹 Muscle Mass & Strength Training – Focused programs to increase muscle size and strength.</li>
          <li>🔹 Competition Prep – Tailored coaching for bodybuilding competitions, including posing, diet, and peak week strategy.</li>
          <li>🔹 Nutrition Guidance – Personalized meal plans to fuel your body for maximum muscle growth and fat loss.</li>
          <li>🔹 Recovery & Injury Prevention – Strategies for optimal recovery, joint health, and avoiding burnout.</li>
        </ul>

      </SectionRegular>

      <SectionRegular id="fitnes">
        <h2 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>Fitnes 🏋️‍♀️ Achieve Your Best Shape with Personalized Fitness Coaching! 🏃‍♂️</h2>
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
