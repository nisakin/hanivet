import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Register.css";

function Register() {
  const { role } = useParams(); // user or clinic from the URL
  const navigate = useNavigate();

  const isClinic = role === "clinic";
  const baslik = isClinic ? "Klinik Kaydı" : "Kullanıcı Kaydı";

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    clinicName: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password || !form.confirm) {
      setError("Lütfen tüm alanları doldurun");
      return;
    }

    if (isClinic && !form.clinicName) {
      setError("Lütfen klinik adını girin");
      return;
    }

    if (!isClinic && !form.username) {
      setError("Lütfen kullanıcı adını girin");
      return;
    }
    if (form.password.length < 6) {
      setError("Şifre en az 6 karakter olmalıdır");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Şifreler eşleşmiyor");
      return;
    }

    try {
      await api.post("/Auth/register", {
        email: form.email,
        password: form.password,
        role: isClinic ? "Clinic" : "PetOwner",
        ...(isClinic
          ? { clinicName: form.clinicName }
          : { username: form.username }),
      });

      navigate(`/login/${role}`);
    } catch (err) {
      const data = err.response?.data;
      setError(
        typeof data === "string"
          ? data
          : "Kayıt başarısız. Lütfen tekrar deneyin."
      );
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2>{baslik}</h2>
        <form onSubmit={handleSubmit}>
          {isClinic ? (
            <div className="input-group">
              <label>Klinik Adı</label>
              <input
                type="text"
                name="clinicName"
                value={form.clinicName}
                onChange={handleChange}
              />
            </div>
          ) : (
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

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="register-btn">
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
