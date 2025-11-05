import './DondeEstamos.css';

export const DondeEstamos = () => {
  return (
    <div className="page-container DondeEstamos-page">
      <h1>Donde Estamos</h1>
      
      {/* Contenedor Flexbox para manejar el layout de Fila/Columna */}
      <div className="donde-estamos-content">
        
        {/* Sección 1: Imagen y Párrafos de Contacto */}
        <div className="info-section">
          <img src="/images/localasistvet.jpeg" alt="local asist vet" />
          <p>Domicilio: Av. Espora 1518</p>
          <p>Localidad: Valeria del Mar</p>
          <p>Provincia: Buenos Aires</p>
        </div>

        {/* Sección 2: Mapa de Google Maps (el iframe) */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.4515777374318!2d-56.8971258848723!3d-37.14196057987973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9d11a1826da1%3A0xd88b03072107e5!2sVeterinaria%20Asistvet!5e0!3m2!1ses-419!2sar!4v1666205129439!5m2!1ses-419!2sar" 
          width="600" /* Estas props de width/height se anulan por el CSS */
          height="450" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        
      </div>
      
    </div>
  );
};