import React from "react";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Header = () => {
    const { isLogged, setIsLogged,setAccessToken,setRefreshToken } = useContext(AuthContext);
  
    const links = [{ to: "/", text: "Inicio" }];
    const linksLogin = [
      { to: "/mis-blogs", text: "Mis Autos" },
      { to: "/crear-blog", text: "Agregar nuevo Auto" },
    ];
    const linksLogout = [
      { to: "/login", text: "Login" },
      { to: "/register", text: "Register" },
    ];
  
  const handleLogout = () => {
    setIsLogged(false);
    setAccessToken(null);
    setRefreshToken(null);
    toast.success("Logout");
  };


  return (
    <nav className="Cabeza">
      <div className="izquierda">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className="derecha">
        {isLogged &&
          linksLogin.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.text}
            </Link>
          ))}
        {isLogged && <a onClick={() => handleLogout()}>Cerrar Sesion</a>}
        {!isLogged &&
          linksLogout.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.text}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Header;

