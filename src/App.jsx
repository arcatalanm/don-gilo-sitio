import './index.css';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/NavBar';
import Hero from './components/sections/Hero';
import Servicios from './components/sections/Servicios';
import Catalogo from './components/sections/Catalogo';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app-layout d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="app-header header-wrapper">
        <TopBar />
      </header>

      <Navbar />

      {/* Main */}
      <main className="app-main main-content flex-grow-1" id="inicio">
        <Hero />
        <Servicios />
        <Catalogo/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
