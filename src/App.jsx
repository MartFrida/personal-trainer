import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Contact } from './pages/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SportsCoaching } from './pages/SportsCoaching';
import { Nutrition } from './pages/Nutrition';
import { Therapy } from './pages/Therapy';
import { Acupuncture } from './pages/Acupuncture';
import { PersonalizedTraining } from './pages/PersonalizedTraining'
import { ArtesMarciales } from './pages/ArtesMarciales';
import { ClacesInfantiles } from './pages/ClacesInfantiles';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen min-w-screen overflow-hidden box-border">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/personal-training' element={<PersonalizedTraining />} />
          <Route path='/artes-marciales' element={<ArtesMarciales />} />
          <Route path="/sports-coaching" element={<SportsCoaching />} />
          <Route path="/claces-infantiles" element={<ClacesInfantiles />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/acupuncture" element={<Acupuncture />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;