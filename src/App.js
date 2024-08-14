import React from 'react';
import '../src/assets/i18n.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer-section';
import HomepageMain from './components/Homepage-main';
import NavigationMenu from './components/NavigationMenu';
import BackToTopButton from './components/ScrollToTop';
import About from './components/About';
import CareerPage from './components/Careers-page';
import WavePaymentsPage from './components/Wave-payments';
import WhatsAppLink from './components/Whatsapp-link/index.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomepageMain />} />
          <Route path="/about" element={<About />} />
          <Route path="/carreira" element={<CareerPage />} />
          <Route path="/payments" element={<WavePaymentsPage />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
