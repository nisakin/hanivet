import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* overlay */}
      <div className="overlay"></div>

      <div className="hero">
        <h1>Evcil Dostların İçin Güvenilir Veteriner Ağı</h1>
        <p>
          Hanivet ile klinikleri keşfet, randevu oluştur, chat üzerinden diğer
          hayvan sahipleriyle deneyim paylaş ve evcil dostunun sağlığını kolayca
          takip et.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Klinikleri Keşfet</button>
          <button className="secondary-btn">Chat’e Gir</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
