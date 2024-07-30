import './App.css';
import Footer from './components/Footer-section';
import HomepageMain from './components/Homepage-main';
import NavigationMenu from './components/NavigationMenu';
import BackToTopButton from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <HomepageMain />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
