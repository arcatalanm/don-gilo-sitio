const WHATSAPP_NUM = '56993456575';

const serviciosData = [
  {
    id: 'obras',
    titulo: 'Obras y Construcción',
    icono: 'bi-house-fill',
    descripcion: 'Soluciones estructurales e infraestructura para parcelas, campos y viviendas.',
    puntos: [
      'Construcción de viviendas, ampliaciones y terrazas',
      'Quinchos, pérgolas, muros, radieres y cimientos',
      'Estructuras metálicas y de madera con terminaciones'
    ],
    mensajeWsp: 'Hola Don Gilo, me gustaría cotizar un proyecto de Obras y Construcción.'
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento del Hogar',
    icono: 'bi-tools',
    descripcion: 'Servicio integral para solucionar fallas y reparaciones en el hogar.',
    puntos: [
      'Reparación de techos, goteras y filtraciones',
      'Conexiones y reparaciones eléctricas y de agua',
      'Gasfitería general y trabajos de pintura'
    ],
    mensajeWsp: 'Hola Don Gilo, necesito consultar por un servicio de Mantenimiento y Reparación.'
  },
  {
    id: 'asesoria',
    titulo: 'Asesoría y Consultas',
    icono: 'bi-clipboard-check',
    descripcion: 'Orientación técnica y cálculo de materiales que necesitas para tu obra.',
    puntos: [
      'Cubicación estimada de materiales de construcción',
      'Recomendación de herramientas y fijaciones',
      'Presupuestos a la medida según tus necesidades'
    ],
    mensajeWsp: 'Hola Don Gilo, quisiera recibir asesoría para un proyecto o compra de materiales.'
  }
];

function Servicios() {
  const getWhatsappLink = (msg) =>
    `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="servicios-section py-5" id="servicios">
      <div className="container py-2">
        
        {/* Encabezado */}
        <div className="text-center mb-5">
          <h2 className="servicios-main-title display-6 fw-bold mb-2">
            Servicios de Mantenimiento
          </h2>
          <div className="col-lg-8 col-xl-6 mx-auto">
            <p className="servicios-main-subtitle lead mb-0">
              Mano de obra, asesoría técnica y presupuestos a tu medida
            </p>
          </div>
        </div>

        {/* Tarjeta Servicio */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {serviciosData.map((servicio) => (
            <div key={servicio.id} className="col">
              <div className="servicios-card rounded-3 p-4 h-100 d-flex flex-column shadow-sm">
                
                {/* Icon */}
                <div className="servicios-icon-box mb-3 d-inline-flex align-items-center justify-content-center rounded-3">
                  <i className={`bi ${servicio.icono} fs-3`}></i>
                </div>

                {/* Description */}
                <h3 className="servicios-card-title h5 fw-bold mb-2">
                  {servicio.titulo}
                </h3>
                <p className="servicios-text small mb-3">
                  {servicio.descripcion}
                </p>

                {/* UL */}
                <ul className="servicios-list list-unstyled mb-4 flex-grow-1">
                  {servicio.puntos.map((punto, index) => (
                    <li key={index} className="small mb-2 d-flex align-items-start gap-2">
                      <i className="topbar-whatsapp-link bi bi-check-circle-fill servicios-icon-check mt-1"></i>
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <a
                  href={getWhatsappLink(servicio.mensajeWsp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dg btn-dg-verde w-100 text-decoration-none text-center py-2 fs-6"
                >
                  <span>Cotizar Servicio</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Servicios;