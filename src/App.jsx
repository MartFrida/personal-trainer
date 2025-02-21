import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Home from './pages/Home2';
import About from './pages/About';
import { Contact } from './pages/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Nutrition } from './pages/Nutrition';
import { Therapy } from './pages/Therapy';
import Tarifas from './pages/Tarifas';
import { PersonalizedTraining } from './pages/PersonalizedTraining'
import { ArtesMarciales } from './pages/ArtesMarciales';
import { ClacesInfantiles } from './pages/ClacesInfantiles';
import { FisicoCulturismo } from './pages/FisicoCulturismo';
import ScrollToTop from './helpers/ScrollToTop';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen min-w-screen overflow-hidden box-border">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/personal-training' element={<PersonalizedTraining />} />
          <Route path='/artes-marciales' element={<ArtesMarciales />} />
          <Route path="/fisico-culturismo" element={<FisicoCulturismo />} />
          <Route path="/claces-infantiles" element={<ClacesInfantiles />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/tarifas" element={<Tarifas />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;