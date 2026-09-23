function TopBar() {
    return (
        <div className="bg-light py-2 border-bottom d-none d-md-block">
            <div className="container">
                <div className="row align-items-center small">
                    {/* Left: Horario y Ubicación */}
                    <div className="col-md-7 d-flex align-items-center gap-4 text-secondary">
                        <span>
                            <i className="bi bi-clock me-1 text-dark"></i>
                            Lun - Sáb: 8:30 a 19:30 hrs | Dom: 8:30 a 13:00 hrs
                        </span>
                        <span>
                            <i className="bi bi-geo-alt me-1 text-dark"></i>
                            el boldal - Quinahue, 3130000 Santa Cruz, O'Higgins
                        </span>
                    </div>

                    {/* Right: Contacto directo y Redes */}
                    <div className="col-md-5 d-flex justify-content-end align-items-center gap-3">
                        {/* Teléfono */}
                        <a 
                            href="tel:+56993456575" 
                            className="text-decoration-none text-secondary d-flex align-items-center"
                        >
                            <i className="bi bi-telephone me-1 text-dark"></i>
                            +56 9 9345 6575
                        </a>

                        <span className="text-muted">|</span>

                        {/* WhatsApp */}
                        <a 
                            href="https://wa.me/56993456575" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-decoration-none text-success fw-semibold d-flex align-items-center"
                        >
                            <i className="bi bi-whatsapp me-1"></i>
                            WhatsApp
                        </a>

                        {/* Facebook */}
                        <a 
                            href="https://www.facebook.com/p/Ferreter%C3%ADa-Construcci%C3%B3n-Don-Gilo-61563667345077/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-decoration-none text-primary fw-semibold d-flex align-items-center" 
                        >
                            <i className="bi bi-facebook me-1"></i>
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;