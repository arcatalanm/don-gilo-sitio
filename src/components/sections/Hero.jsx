import { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    title: 'Todo para tu obra, ampliación y herramientas en un solo lugar',
    description: 'Materiales para construcción gruesa, terminaciones y ferretería general. Llevamos tus compras con flete directo a parcelas y sectores rurales de Santa Cruz.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80',
    alt: 'Materiales de Construcción en Ferretería Don Gilo'
  },
  {
    id: 2,
    title: 'Servicio de Fletes y Despacho a Terreno',
    description: 'Llevamos tu carga pesada y materiales directo a parcelas, obras y caminos rurales en Quinahue El Boldal y alrededores de Santa Cruz.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80',
    alt: 'Servicio de Fletes y Despacho Don Gilo'
  },
  {
    id: 3,
    title: 'Visítanos en Quinahue El Boldal',
    description: 'Encuéntranos frente a la población San Jorge en la comuna de Santa Cruz. Atención cercana y asesoría para tus proyectos y compras.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1400&q=80',
    alt: 'Local de Ferretería Don Gilo en Santa Cruz'
  }
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

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

  return (
    <section className="hero-section py-5">
      <div className="hero-container container">
        <div className="hero-row row align-items-center gy-4">

          {/* Columna Izquierda: Información sincronizada con el carrusel */}
          <div className="hero-content-col col-lg-6 text-center text-lg-start">
            <h1 className="hero-title display-5 fw-bold mb-3">
              {current.title}
            </h1>

            <p className="hero-description lead mb-4 pe-lg-4">
              {current.description}
            </p>


          </div>

          {/* Columna Derecha: Carrusel sincronizado */}
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

                {/* Slides de imágenes */}
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

                {/* Controles Anterior / Siguiente */}
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
