import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        <h1>Bize Ulaşın</h1>
        <p>
          Soru , İstek , Önerileriniz ve İşbirliği İçin Bizimle İletişime
          Geçebilirsiniz.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Ad Soyad" />
          <input type="email" placeholder="E-posta" />
          <textarea placeholder="Mesajınız"></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
