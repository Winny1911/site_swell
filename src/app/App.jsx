import React from 'react';
import '../assets/i18n.js';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Footer from '../components/ui/Footer';
import HomepageMain from '../components/Homepage/Homepage-main';
import NavigationMenu from '../components/ui/NavigationMenu';
import BackToTopButton from '../components/ui/ScrollToTop';
import ScrollToTop from '../components/ui/ScrollRestoration';
import About from '../components/About';
import CareerPage from '../components/Careers';
import WavePaymentsPage from '../components/Wave-payments';
import WaveStudio from '../components/Wave-studio';


function App() {

  return (
    <Router>
      <ScrollToTop />

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
