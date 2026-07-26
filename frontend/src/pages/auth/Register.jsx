import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Register.css";

function Register() {
  const { role } = useParams();
  const isClinic = role === "clinic";

  const baslik = isClinic ? "Klinik Kaydı" : "Kullanıcı Kaydı";

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    clinicName: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isClinic && !form.username) {
      alert("Lütfen kullanıcı adını girin");
      return;
    }

    if (!form.email || !form.password || !form.confirm) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }

    if (isClinic && (!form.clinicName || !form.address)) {
      alert("Lütfen klinik bilgilerini doldurun");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Şifreler eşleşmiyor");
      return;
    }

    const expectedRole = isClinic ? "Clinic" : "PetOwner";
    console.log("Kayıt bilgileri:", { ...form, expectedRole });
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2>{baslik}</h2>
        <form onSubmit={handleSubmit}>
          {!isClinic && (
            <div className="input-group">
              <label>Kullanıcı Adı</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {isClinic && (
            <>
              <div className="input-group">
                <label>Klinik Adı</label>
                <input
                  type="text"
                  name="clinicName"
                  value={form.clinicName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Adres</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <div className="input-group">
            <label>Şifre</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Şifre Tekrar</label>
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="register-btn">
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
