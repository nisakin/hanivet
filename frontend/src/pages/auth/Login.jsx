import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

function Login() {
  const { role } = useParams(); // user or clinic from the URL
  const navigate = useNavigate();

  const isClinic = role === "clinic";
  const baslik = isClinic ? "Klinik Girişi " : "Kullanıcı Girişi";
  const expectedRole = isClinic ? "Clinic" : "PetOwner";

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Lütfen tüm alanları doldurun");
      return;
    }

    try {
      const response = await api.post("/Auth/login", {
        email: form.email,
        password: form.password,
        expectedRole,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);

      navigate("/");
    } catch (err) {
      const data = err.response?.data;
      setError(
        typeof data == "string"
          ? data
          : "Giriş başarısız. Lütfen tekrar deneyin."
      );
    }
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

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="login-btn">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
