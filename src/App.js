import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer-section';
import HomepageMain from './components/Homepage-main';
import NavigationMenu from './components/NavigationMenu';
import BackToTopButton from './components/ScrollToTop';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomepageMain />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
