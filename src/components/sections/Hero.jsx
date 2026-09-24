import { useState, useEffect } from 'react';

const WHATSAPP_NUM = '56993456575';

const SLIDES = [
  {
    id: 1,
    title: 'Tu obra, ampliación y reparaciones desde los cimientos.',
    description: 'Cemento, maderas, fierros, fijaciones y herramientas con atención personalizada en Quinahue.',
    image: '../src/assets/images/ferreteria-1.jpg',
    boton: 'Ver Catálogo',
    // Si tienes una sección con id="catalogo", hace scroll hacia ella:
    ruta: '#catalogo',
    alt: 'Materiales de Construcción en Ferretería Don Gilo'
  },
  {
    id: 2,
    title: 'Servicio de Fletes y Despacho a Terreno',
    description: 'Despacho rápido de maderas, cemento y materiales a caminos rurales de Quinahue El Boldal y alrededores.',
    image: '../src/assets/images/ferreteria-2.jpg',
    boton: 'Consultar Cobertura y Flete',
    // WhatsApp directo con mensaje específico de fletes:
    ruta: `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent('Hola Don Gilo, quisiera consultar por fletes y cobertura a mi sector.')}`,
    alt: 'Servicio de Fletes y Despacho Don Gilo'
  },
  {
    id: 3,
    title: 'Visítanos en Quinahue El Boldal',
    description: 'Encuéntranos en plena ruta principal de Quinahue. Te ayudamos a calcular tus materiales y elegir las herramientas correctas.',
    image: '../src/assets/images/ferreteria-3.jpg',
    boton: 'Abrir Ubicación en el Mapa',
    // Enlace de Google Maps directo:
    ruta: 'https://maps.app.goo.gl/vmbk2e8LxheKDSaw8',
    alt: 'Local de Ferretería Don Gilo en Santa Cruz'
  }
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handleSelect = (index) => {
    setActiveSlide(index);
  };

  const current = SLIDES[activeSlide];
  
  // Detecta si es un enlace web externo (WhatsApp o Maps)
  const esExterno = current.ruta.startsWith('http');

  return (
    <section className="hero-section py-5">
      <div className="hero-container container">
        <div className="hero-row row align-items-center gy-4">

          {/* Left: Información */}
          <div className="hero-content-col col-lg-6 text-center text-lg-start">
            <h1 className="hero-title display-5 fw-bold mb-3">
              {current.title}
            </h1>

            <p className="hero-description lead mb-4 pe-lg-4">
              {current.description}
            </p>

            <div>
              {/* Buttom */}
              <a 
                href={current.ruta}
                target={esExterno ? '_blank' : '_self'}
                rel={esExterno ? 'noopener noreferrer' : undefined}
                className="btn-dg-marino btn-lg fw-bold px-4 py-3 shadow-sm text-decoration-none hero-button"
                
              >
                {current.boton}
              </a>
            </div>
          </div>

          {/* Right: Carrusel */}
          <div className="hero-carousel-col col-lg-6">
            <div className="hero-carousel-wrapper shadow-sm rounded-3 overflow-hidden">
              <div className="carousel slide">
                
                {/* Indicadores */}
                <div className="carousel-indicators hero-carousel-indicators mb-2">
                  {SLIDES.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      className={`hero-indicator-btn ${index === activeSlide ? 'active' : ''}`}
                      aria-current={index === activeSlide ? 'true' : 'false'}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => handleSelect(index)}
                    ></button>
                  ))}
                </div>

                {/* Imagenes */}
                <div className="carousel-inner hero-carousel-inner">
                  {SLIDES.map((slide, index) => (
                    <div 
                      key={slide.id} 
                      className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
                    >
                      <img 
                        src={slide.image} 
                        className="hero-carousel-img d-block w-100" 
                        alt={slide.alt} 
                      />
                    </div>
                  ))}
                </div>

                {/* Prev | Next */}
                <button 
                  className="carousel-control-prev hero-carousel-prev" 
                  type="button" 
                  onClick={handlePrev}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button 
                  className="carousel-control-next hero-carousel-next" 
                  type="button" 
                  onClick={handleNext}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;