import { useState, useEffect, useRef } from 'react';

function Navbar() {
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // top página -> mostrar NavBar
            if (currentScrollY < 120) {
                setVisible(true);
            } 
            // scroll down -> esconder NavBar
            else if (currentScrollY > lastScrollY.current) {
                setVisible(false);
            } 
            // scroll up -> mostrar NavBar
            else if (currentScrollY < lastScrollY.current) {
                setVisible(true);
            }

            // actualizar scroll
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, []);

    return (
        // Propiedades {visible} condicional -> Propiedades CSS
        <nav className={`navbar-main navbar navbar-expand-lg border-bottom shadow-sm py-2 sticky-top ${visible ? 'nav-visible' : 'nav-hidden'}`}>
            <div className="navbar-container container">
                {/* Logo */}
                <a className="navbar-brand-link navbar-brand py-0" href="/">
                    <img 
                        src="don_gilo.svg" 
                        alt="Ferretería Don Gilo" 
                        className="navbar-logo-img img-fluid"
                    />
                </a>

                {/* Botón responsive para móviles */}
                <button 
                    className="navbar-toggler-btn navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Abrir navegación"
                >
                    <span className="navbar-toggler-icon-custom navbar-toggler-icon"></span>
                </button>

                {/* Enlaces */}
                <div className="navbar-collapse-container collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav-list navbar-nav ms-auto align-items-lg-center gap-lg-3">
                        <li className="navbar-nav-item nav-item">
                            <a className="navbar-nav-link nav-link fw-semibold" href="#inicio">Inicio</a>
                        </li>
                        <li className="navbar-nav-item nav-item">
                            <a className="navbar-nav-link nav-link fw-semibold" href="#catalogo">Catálogo</a>
                        </li>
                        <li className="navbar-nav-item nav-item">
                            <a className="navbar-nav-link nav-link fw-semibold" href="#despacho">Despachos</a>
                        </li>
                        <li className="navbar-nav-item nav-item">
                            <a className="navbar-nav-link nav-link fw-semibold" href="#ubicacion">Sucursal</a>
                        </li>
                        <li className="navbar-nav-item-action nav-item ms-lg-2 mt-2 mt-lg-0">
                            <a className="navbar-btn-cotizar btn px-3 py-2 fw-bold" href="#cotizar">
                                Solicitar Cotización
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
