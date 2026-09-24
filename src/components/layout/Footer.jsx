function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-4 mt-auto border-top">
      <div className="footer-container container">
        <div className="footer-row row gy-4">
          
          {/* Redes */}
          <div className="footer-col footer-col-brand col-lg-4 col-md-6">
            <h5 className="footer-brand-title text-white fw-bold mb-3">
              Ferretería & Construcción Don Gilo
            </h5>
            <p className="footer-brand-text text-white small mb-3">
              Comercio local en Quinahue El Boldal, Santa Cruz. Proveemos materiales de obra gruesa, maderas, herramientas y fletes a parcelas y sectores rurales.
            </p>
            <div className="footer-social-wrapper d-flex gap-3">
              <a 
                href="https://www.facebook.com/p/Ferreter%C3%ADa-Construcci%C3%B3n-Don-Gilo-61563667345077/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link text-white fs-5"
                aria-label="Facebook"
              >
                <i className="footer-social-icon bi bi-facebook text-white"></i>
              </a>
              <a 
                href="https://wa.me/56993456575" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link text-white fs-5"
                aria-label="WhatsApp"
              >
                <i className="footer-social-icon bi bi-whatsapp text-white"></i>
              </a>
              <a 
                href="tel:+56993456575" 
                className="footer-social-link text-white fs-5"
                aria-label="Teléfono"
              >
                <i className="footer-social-icon bi bi-telephone-fill text-white"></i>
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div className="footer-col footer-col-links col-lg-2 col-md-6">
            <h6 className="footer-col-title text-white fw-bold mb-3">
              Navegación
            </h6>
            <ul className="footer-nav-list list-unstyled small mb-0">
              <li className="footer-nav-item mb-2">
                <a href="#inicio" className="footer-nav-link text-white text-decoration-none">
                  Inicio
                </a>
              </li>
              <li className="footer-nav-item mb-2">
                <a href="#catalogo" className="footer-nav-link text-white text-decoration-none">
                  Catálogo
                </a>
              </li>
              <li className="footer-nav-item mb-2">
                <a href="#marcas" className="footer-nav-link text-white text-decoration-none">
                  Marcas
                </a>
              </li>
              <li className="footer-nav-item mb-2">
                <a href="#despacho" className="footer-nav-link text-white text-decoration-none">
                  Despachos
                </a>
              </li>
              <li className="footer-nav-item mb-2">
                <a href="#ubicacion" className="footer-nav-link text-white text-decoration-none">
                  Sucursal
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div className="footer-col footer-col-schedule col-lg-3 col-md-6">
            <h6 className="footer-col-title text-white fw-bold mb-3">
              Horario de Atención
            </h6>
            <div className="footer-schedule-item text-white small mb-2 d-flex align-items-center gap-2">
              <i className="footer-schedule-icon bi bi-clock text-white"></i>
              <span><strong>Lunes a Sábado:</strong><br />08:30 a 19:30 hrs</span>
            </div>
            <div className="footer-schedule-item text-white small mb-2 d-flex align-items-center gap-2">
              <i className="footer-schedule-icon bi bi-calendar-event text-white"></i>
              <span><strong>Domingos:</strong><br />08:30 a 13:00 hrs</span>
            </div>
          </div>

          {/* Ubicación y Contacto */}
          <div className="footer-col footer-col-contact col-lg-3 col-md-6">
            <h6 className="footer-col-title text-white fw-bold mb-3">
              Contacto y Local
            </h6>
            <p className="footer-contact-address text-white small mb-2 d-flex align-items-start gap-2">
              <i className="footer-contact-icon bi bi-geo-alt-fill text-white mt-1"></i>
              <span>El Boldal - Quinahue, comuna de Santa Cruz, Región de O'Higgins.</span>
            </p>
            <a 
              href="tel:+56993456575" 
              className="footer-contact-phone text-white text-decoration-none d-flex align-items-center gap-2 small mb-3"
            >
              <i className="footer-contact-icon bi bi-telephone-fill text-white"></i>
              <span>+56 9 9345 6575</span>
            </a>
            <a 
              href="https://wa.me/56993456575" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-whatsapp-btn btn btn-success btn-sm fw-bold d-inline-flex align-items-center gap-2"
            >
              <i className="footer-whatsapp-icon bi bi-whatsapp text-white"></i>
              Contactar por WhatsApp
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom-row row border-top border-secondary mt-4 pt-3">
          <p className="footer-copyright-text col-12 text-center text-white small mb-0">
            &copy; 2026 Ferretería & Construcción Don Gilo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
