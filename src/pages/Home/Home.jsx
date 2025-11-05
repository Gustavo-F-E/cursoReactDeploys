import "./Home.css";

export const Home = () => {
  return (
    <div className="home-page">
      <div className="home-contenedor-video">
      <video
        className="home-video"
        autoPlay
        muted // autoplay a menudo requiere que el video esté silenciado
        loop
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      </div>
    </div>
  );
};
