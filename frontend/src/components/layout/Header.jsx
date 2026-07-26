import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthDropdown from "../ui/AuthDropdown";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        {/* LOGO */}
        <Link to="/" className="logo">
          hanivet
        </Link>

        {/* NAV LINKS */}
        <nav className="nav-links">
          <Link to="/">Anasayfa</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/clinics">Klinikler</Link>
          <Link to="/contact">Bize Ulaşın</Link>
        </nav>

        {/* AUTH */}
        <div className="auth-buttons">
          <AuthDropdown
            label="Giriş Yap"
            icon={<FontAwesomeIcon icon={faRightToBracket} beat />}
            options={[
              { text: "Kullanıcı Girişi", path: "/login/user" },
              { text: "Klinik Girişi", path: "/login/clinic" },
            ]}
          />

          <AuthDropdown
            label="Kayıt Ol"
            icon={<FontAwesomeIcon icon={faUserPlus} beat />}
            options={[
              { text: "Kullanıcı Kaydı", path: "/register/user" },
              { text: "Klinik Kaydı", path: "/register/clinic" },
            ]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
