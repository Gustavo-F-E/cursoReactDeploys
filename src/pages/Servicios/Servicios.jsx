import './Servicios.css';

export const Servicios = () => {
  return (
    <div className="page-container servicios-page">
      <h1>Servicios</h1>
      <article className='servicios-article'>
        <ul>
          <li>
            <a href="#baño">Baño y peluqueria canina</a>
          </li>
          <li>
            <a href="#controles-medicos">Controles médicos</a>
          </li>
          <li>
            <a href="#emergencias">Emergencias</a>
          </li>
          <li>
            <a href="#vacunacion">Vacunación</a>
          </li>
        </ul>
      </article>
      <article id='baño' className='servicios-article'>
        <h2>Baño y peluquería canina</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium iusto voluptate, debitis perferendis iure quia maiores nihil pariatur aliquid mollitia perspiciatis voluptas! Iusto animi nesciunt quos. Impedit, dignissimos nam. </p>
        <img src="/images/baño_perrito.jpg" alt="vacunacion perros y gatos" />
      </article>
      <article id='controles-medicos' className='servicios-article'>
        <h2>Controles médicos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium iusto voluptate, debitis perferendis iure quia maiores nihil pariatur aliquid mollitia perspiciatis voluptas! Iusto animi nesciunt quos. Impedit, dignissimos nam. </p>
        <img src="/images/vacuna.jpg" alt="controles medicos" />
      </article>
      <article id='emergencias' className='servicios-article'>
        <h2>Emergencias</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium iusto voluptate, debitis perferendis iure quia maiores nihil pariatur aliquid mollitia perspiciatis voluptas! Iusto animi nesciunt quos. Impedit, dignissimos nam. </p>
        <img src="/images/veterinary-g65d6eb90f_1280 (2).jpg" alt="emergencias" />
      </article>
      <article id='vacunacion' className='servicios-article'>
        <h2>Vacunación</h2>
        <p>Calendario de vacunación.</p>
        <img src="/images/imgbin_cat-dog-vaccine-feline-vaccination-png.png" alt="vacunacion perros y gatos" />
        <img src="/images/calendariovacunacionhd.jpg" alt="calendario de vacunacion perros y gatos" />
      </article>
    </div>
  );
};