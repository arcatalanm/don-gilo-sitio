function TopBar() {
    return (
        <div className="topbar-section py-2 border-bottom d-none d-md-block">
            <div className="topbar-container container">
                <div className="topbar-row row align-items-center small">
                    {/* Left: Horario y Ubicación */}
                    <div className="topbar-info-col col-md-7 d-flex align-items-center gap-4">
                        <span className="topbar-schedule-item d-flex align-items-center text-white">
                            <i className="topbar-schedule-icon bi bi-clock me-1"></i>
                            Lun - Sáb: 08:30 a 13:00 / 14:30 a 19:30 hrs | Dom: 08:30 a 13:00 hrs
                        </span>
                        <a href="https://maps.app.goo.gl/38pmAowZkWrkoRe69" target="_blank" className="text-decoration-none">
                            <span className="topbar-location-item d-flex align-items-center text-white">
                                <i className="topbar-location-icon bi bi-geo-alt me-1"></i>
                                el boldal - Quinahue, 3130000 Santa Cruz, O'Higgins
                            </span>
                        </a>
                    </div>

                    {/* Right: Contacto directo y Redes */}
                    <div className="topbar-contact-col col-md-5 d-flex justify-content-end align-items-center gap-3">
                        {/* Teléfono */}
                        <a 
                            href="tel:+56993456575" 
                            className="topbar-phone-link text-white text-decoration-none d-flex align-items-center"
                        >
                            <i className="topbar-phone-icon bi bi-telephone me-1"></i>
                            +56 9 9345 6575
                        </a>

                        <span className="topbar-divider text-white-50">|</span>

                        {/* WhatsApp */}
                        <a 
                            href="https://wa.me/56993456575" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="topbar-whatsapp-link text-decoration-none fw-semibold d-flex align-items-center"
                        >
                            <i className="bi bi-whatsapp me-1"></i>
                            WhatsApp
                        </a>

                        {/* Facebook */}
                        <a 
                            href="https://www.facebook.com/p/Ferreter%C3%ADa-Construcci%C3%B3n-Don-Gilo-61563667345077/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="topbar-facebook-link text-decoration-none text-primary fw-semibold d-flex align-items-center" 
                        >
                            <i className="topbar-facebook-icon bi bi-facebook me-1"></i>
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;