import { useState } from "react";
import { useNavigate } from "react-router-dom"; // kullanıcı seçim yaptığında hem dropdown kapanacak hemde sayfa değişecek.
import useClickOutside from "../../hooks/useClickOutside";
import "./AuthDropdown.css";

const AuthDropdown = ({ label, icon, options }) => {
  const [open, setOpen] = useState(false); //dropdown başlangıçta açık mı kapalı mı ? bunu tutan hafıza
  const navigate = useNavigate(); // sayfa yönlendirmesi yapmak için gereken fonk. alındı.

  const ref = useClickOutside(() => setOpen(false));
  return (
    <div className="auth-dropdown" ref={ref}>
      <button
        className="auth-dropdown-btn"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        {icon}
      </button>
      {open && (
        <div className="auth-dropdown-menu">
          {options.map((opt) => (
            <button
              key={opt.path}
              onClick={() => {
                setOpen(false);
                navigate(opt.path);
              }}
            >
              {opt.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default AuthDropdown;
