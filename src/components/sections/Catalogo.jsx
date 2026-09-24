const FILA_SUPERIOR = [
  { id: 1, nombre: 'Fijaciones', imagen: 'https://images.unsplash.com/photo-1607733067654-364ff90d4866?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, nombre: 'Herramientas', imagen: 'https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, nombre: 'Construcción', imagen: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80' },
  { id: 4, nombre: 'Pinturas', imagen: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&q=80' },
  { id: 5, nombre: 'Gasfitería', imagen: 'https://plus.unsplash.com/premium_photo-1663047170515-66632d2a374d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, nombre: 'Electricidad', imagen: 'https://images.unsplash.com/photo-1758101755915-462eddc23f57?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

const FILA_INFERIOR = [
  { id: 7, nombre: 'Maderas', imagen: 'https://images.unsplash.com/photo-1677073534324-e42701ad6ed4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 8, nombre: 'Adhesivos y Sellantes', imagen: 'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 9, nombre: 'Hogar', imagen: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80' },
  { id: 10, nombre: 'Seguridad', imagen: 'https://images.unsplash.com/photo-1634852836003-c0aa5b67d243?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 11, nombre: 'Jardinería', imagen: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=500&q=80' }
];

function Catalogo() {
  return (
    <section id="catalogo" className="catalogo-section py-5">
      <div className="container">

        {/* Encabezado */}
        <div className="text-center">
          <h2 className="catalogo-titulo fw-bold">Categorías destacadas</h2>
          <p className="catalogo-subtitulo mb-0">
            Todo lo que necesitas para tus proyectos, obras y reparaciones.
          </p>
        </div>

        {/* Cápsula celeste envolvente */}
        <div className="catalogo-banner-capsula p-4 p-md-5">

          {/* Fila 1: 6 Columnas (col-lg-2 cada una = 12 columnas exactas) */}
          <div className="row g-3 g-lg-4 justify-content-center mb-4 mb-lg-5">
            {FILA_SUPERIOR.map((cat) => (
              <div key={cat.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="d-flex flex-column align-items-center h-100">
                  {/* Circulo */}
                  <div className="categoria-circulo-marco ratio ratio-1x1 rounded-circle overflow-hidden shadow-sm mb-3">
                    <img
                      src={cat.imagen}
                      alt={cat.nombre}
                      className="w-100 h-100 object-fit-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Texto */}
                  <div className="categoria-pildora shadow-sm w-100 text-center py-2 px-1 mt-auto">
                    <span className="d-block text-truncate small fw-semibold">
                      {cat.nombre}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Columnas */}
          <div className="row g-3 g-lg-4 justify-content-center">
            {FILA_INFERIOR.map((cat) => (
              <div key={cat.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="d-flex flex-column align-items-center h-100">
                  
                  {/* Círculo */}
                  <div className="categoria-circulo-marco ratio ratio-1x1 rounded-circle overflow-hidden shadow-sm mb-3">
                    <img
                      src={cat.imagen}
                      alt={cat.nombre}
                      className="w-100 h-100 object-fit-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* texto */}
                  <div className="categoria-pildora shadow-sm w-100 text-center py-2 px-1 mt-auto">
                    <span className="d-block text-truncate small fw-semibold">
                      {cat.nombre}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Catalogo;