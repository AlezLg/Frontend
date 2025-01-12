import React from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {
    const [username, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setnumero] = useState("");
    const [password, setContraseña] = useState("");
    const navigate = useNavigate();
  
    const handleRegisterBack = async (data) => {
      const response = await fetch(`${import.meta.env.VITE_BACK_URL}auth/register`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(`${import.meta.env.VITE_BACK_URL}auth/register`);
      const responsejson = await response.json();
      console.log(responsejson.data);
      if(response.ok){
        toast.success("Usuario creado");
        navigate("/login");
      }
    }
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (
          username === "" ||
          email === "" ||
          telefono === "" ||
          password === ""
        ) {
          toast.error("complete los campos para continuar");
        } else {
              const data = {
              username: username,
              email: email,
              telefono: telefono,
              password: password,
            };
            await handleRegisterBack(data);
            console.log(data);
            toast.success("Usuario creado");
          } 
    };
    return(
        <div>
             <form onSubmit={handleSubmit} className="Contenido" >
                <h1 className="register">Registrarse</h1>
                <div className="input">
                    <p className="info">Usuario</p>
                    <input className="dato" type="text" id="usuario" onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className="input">
                    <p className="info">Email</p>
                    <input className="dato" type="mail" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <p className="info">Telefono</p>
                    <input className="dato" type="number" id="telefono" onChange={(e) => setnumero(e.target.value)}/>
                </div>
                <div className="input">
                    <p className="info">Contraseña</p>
                    <input className="dato" type="password" id="pass" onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <button type="submit" className="register-boton">Registrarse</button>
            </form>
            </div>
 );
};

export default Register