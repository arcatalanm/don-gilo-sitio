function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-2">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand py-0" href="/">
                    <img 
                        src="logo_don_gilo.svg" 
                        alt="Ferretería Don Gilo" 
                        height="125"
                    />
                </a>

                {/* Botón responsive para móviles */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Abrir navegación"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Enlaces */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-dark" href="#inicio">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-dark" href="#catalogo">
                                Catálogo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-dark" href="#marcas">
                                Marcas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-dark" href="#despacho">
                                Despachos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-dark" href="#ubicacion">
                                Sucursal
                            </a>
                        </li>

                        {/* Cotizacion */}
                        <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                            <a className="btn btn-outline-dark px-3 py-2 fw-bold" href="#cotizar">
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