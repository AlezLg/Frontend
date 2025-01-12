import React from "react";
import "./Login.css"; 
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";

const Login = () => {
    const { setIsLogged,setAccessToken,setRefreshToken } = useContext(AuthContext);
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();
  
    const handleLoginBack = async () => {
      const data = {
        username: usuario,
        password: contraseña,
      }
      const response = await fetch(`${import.meta.env.VITE_BACK_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      return response
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      if (usuario.length > 0 && contraseña.length > 0) {
        const response = await handleLoginBack();
        const responsejson = await response.json();
        if(!response.ok){
          toast.error("usuario o contraseña incorrecto");
        }else{
          toast.success("sesion iniciada");
          setIsLogged(true);
          setRefreshToken(responsejson.data.refreshtoken)
          setAccessToken(responsejson.data.accesstoken)
          navigate("/");
        }
      } else {
        toast.error("ingrese usuario y contraseña");
      }
    };

    return (
        <div>
            <div className="login-container">
                <h1 className="login-title">Iniciar Sesión</h1>
                <div className="login-input-group">
                    <p className="login-label">Usuario</p>
                    <input className="login-input" id="usuario"  placeholder="usuario" onChange={(e) => setUsuario(e.target.value)}/>
                </div>
                <div className="login-input-group">
                    <p className="login-label">Contraseña</p>
                    <input className="login-input" type="password" id="contraseña" placeholder="contraseña" onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <button className="login-boton" onClick={(e) => handleSubmit(e)} >Ingresar</button>
            </div>
        </div>
    );
};

export default Login;
