import React from 'react';
import '../assets/i18n.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/index.jsx';
import HomepageMain from '../components/Homepage/Homepage-main/index.jsx';
import NavigationMenu from '../components/NavigationMenu/index.jsx';
import BackToTopButton from '../components/ScrollToTop/index.jsx';
import About from '../components/About/index.jsx';
import CareerPage from '../components/Careers/index.jsx';
import WavePaymentsPage from '../components/Wave-payments/index.jsx';
import WaveStudio from '../components/Wave-studio/index.jsx';

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
          <Route path="/wave" element={<WaveStudio />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
