import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Login.css"; // CSS dosyasıyla birlikte kullanılacak

function Login() {
  const { role } = useParams(); // URL den kullanici yada klinik gelecek.
  const baslik = role === "klinik" ? "Klinik Girişi " : "Kullanıcı Girişi";
  const expectedRole = role === "klinik" ? "Clinic" : " PetOwner";
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }

    console.log("Giriş bilgileri:", { form, expectedRole });
    // Buraya backend çağrısı eklenebilir
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>{baslik}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email gir"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Şifre</label>
            <input
              type="password"
              name="password"
              placeholder="Şifre gir"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login-btn">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
