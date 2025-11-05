import React, { useState } from 'react';
import './Contacto.css';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombreDueno: '',
    nombreMascota: '',
    especieMascota: '',
    email: '',
    telefono: '',
    consulta: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('Consulta enviada. ¡Gracias por contactarnos!');
  };

  return (
    <div className="page-container contacto-page">
      <h1>Contacto</h1>
      <p className="contacto-intro">
        Llene el siguiente formulario para enviar su consulta a nuestro equipo de Asist Vet.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        <div className="form-main-layout">
        
          <div className="form-left-column">
            

              <div className="form-field full-width">
                <label className="labels"  htmlFor="nombreDueno">Nombre y Apellido del Dueño:</label>
                <input type="text" id="nombreDueno" name="nombreDueno" placeholder="Nombre y Apellido del dueño" value={formData.nombreDueno} onChange={handleChange} required />
              </div>

              <div className="form-field full-width">
                <label className="labels"  htmlFor="nombreMascota">Nombre de la Mascota:</label>
                <input type="text" id="nombreMascota" name="nombreMascota" placeholder="Nombre del animal" value={formData.nombreMascota} onChange={handleChange} />
              </div>

              <div className="form-field full-width">
                <label className="labels" htmlFor="especieMascota">Especie de la Mascota:</label>
                <input type="text" id="especieMascota" name="especieMascota" placeholder="Tipo de animal (Ej: perro, gato)" value={formData.especieMascota} onChange={handleChange} />
              </div>

              <div className="form-field full-width">
                <label className="labels"  htmlFor="email">Dirección de correo electrónico:</label>
                <input type="email" id="email" name="email" placeholder="Ingrese su E-Mail" value={formData.email} onChange={handleChange} required />
              </div>


            <div className="form-field full-width">
              <label className="labels"  htmlFor="telefono">Celular/Tel.: (*)</label>
              <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su Nº de Cel./Tel.:" value={formData.telefono} onChange={handleChange} required />
            </div>

          </div>
          
          <div className="form-field consulta-field">
            <label className="labels"  htmlFor="consulta">Consulta a su veterinario:</label>
            <textarea
              id="consulta"
              name="consulta"
              rows="15" 
              placeholder="Su consulta a Asist Vet..."
              value={formData.consulta}
              onChange={handleChange}
              required>
            </textarea>
          </div>

        </div> 
        
        <button type="submit" className="submit-btn">Consultar</button>
      </form>
    </div>
  );
};