import React from 'react';
import fotoObras from '../../assets/images/servicio-asesoria.jpg';

const WHATSAPP_NUM = '56993456575';

function Servicios() {
  const getWhatsappLink = (msg) =>
    `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="servicios-section py-5" id="servicios">
      <div className="container">
        
        {/* Encabezado */}
        <div className="text-center mb-4 mb-lg-5">
          <h2 className="servicios-main-title display-6 fw-bold">
            Servicios de Mantenimiento
          </h2>
          <div className="col-lg-8 col-xl-6 mx-auto">
            <p className="servicios-main-subtitle lead mb-0">
              Mano de obra, asesoría técnica y presupuestos a tu medida
            </p>
          </div>
          <div className="servicios-title-divider mx-auto mt-3"></div>
        </div>

        {/* Módulo Principal */}
        <div className="servicios-single-block rounded-3 overflow-hidden shadow-sm">
          <div className="row g-0 align-items-stretch">
            
            {/* Contenido */}
            <div className="col-lg-7 p-4 p-lg-5">
              
              {/* Obras */}
              <div className="mb-4">
                <h3 className="servicios-card-title h4 fw-bold mb-2">Obras y Construcción</h3>
                <p className="servicios-text mb-0">
                  Realizamos construcción de viviendas, así como ampliaciones, corredores, terrazas, quinchos, pérgolas, muros, cimientos, radieres, estructuras metálicas/madera y terminaciones en general.
                </p>
              </div>

              <hr className="my-4 servicios-divider" />

              {/* Mantenimiento */}
              <div className="mb-4">
                <h3 className="servicios-card-title h4 fw-bold mb-2">Mantenimiento del Hogar y Reparaciones</h3>
                <p className="servicios-text mb-0">
                  Ofrecemos un servicio integral para el hogar que abarca reparación de techos, goteras, filtraciones, conexiones eléctricas, de agua, gasfitería junto a reparaciones generales del hogar.
                </p>
              </div>

              <hr className="my-4 servicios-divider" />

              {/* Asesoría */}
              <div className="mb-4">
                <h3 className="servicios-card-title h4 fw-bold mb-2">Asesoría y Consultas Generales</h3>
                <p className="servicios-text mb-3">
                  Brindamos asesoría y orientación para cualquier trabajo o proyecto. Puede consultar sin compromiso: contamos con experiencia y respaldo para casi cualquier tipo de trabajo.
                </p>
              </div>

              {/* Botón */}
              <div className="pt-2">
                <a
                  href={getWhatsappLink('Hola Don Gilo, quisiera consultar por servicios de obras, mantenimiento o asesoría.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dg-marino fw-bold py-3 px-4 shadow-sm text-decoration-none d-inline-flex align-items-center gap-2"
                >
                  <span>Consultar o Cotizar</span>
                  <i className='btn-cotizar bi bi-whatsapp'></i>
                </a>
              </div>


            </div>

            {/* Imagen */}
            <div className="col-lg-5 servicios-image-col">
              <img
                src={fotoObras}
                alt="Servicios Don Gilo"
                className="servicios-card-img"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Servicios;
