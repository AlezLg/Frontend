import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import "./Crearblog.css";

const CrearBlog = () => {
  const navigate = useNavigate();
  const backurl = import.meta.env.VITE_BACK_URL;
  const [auto, setAuto] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [marca, setContenido] = useState("");
  const { accessToken, handleRefreshToken } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      auto: auto, 
      marca: marca,
      descripcion: descripcion,
      imagen: imagen,
      autor: "674f8962175ed4e77e7dc125"
      
    };
    let respuesta = await fetchback(blog);
    if(respuesta === -1){
      respuesta = await fetchback(blog);
    }
    if(respuesta.status)
    if (respuesta){
      toast.success("Blog creado");
      navigate("/mis-blogs");
    }else{
      toast.error("Blog no creado");
    }
    console.log(blog);
};


const fetchback = async (blog) => {
  try {
    console.log("Token usado:", accessToken);
console.log("Encabezados enviados:", {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${accessToken}`,
});

    const response = await fetch(`${backurl}blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify(blog),
    });

    if (response.status === 401) {
      const res = await handleRefreshToken();
      if (res === -1) {
        navigate("/login");
        return null;
      }
      return await fetchback(blog);
    }

    if (!response.ok) {
      console.error(`Error del servidor: ${response.statusText}`);
      return null;
    }

    const responsejson = await response.json();
    return responsejson.data;
  } catch (error) {
    console.error("Error en fetchback:", error);
    toast.error("No se pudo conectar con el servidor.");
    return null;
  }
};


  return (
    <div>
      <div className="contenedor-crear">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="titulo-crear">Ingresar nuevo auto</h1>
          <div className="input-crear">
            <label htmlFor="auto" className="label-crear">Auto</label>
            <input className="inputs" type="text" id="auto" onChange={(e) => setAuto(e.target.value)}/>
          </div>
          <div className="input-crear">
            <label htmlFor="marca" className="label-crear">Marca</label>
            <input  className="inputs" type="text" id="marca" onChange={(e) => setContenido(e.target.value)} />
          </div>
          <div className="input-crear">
            <label htmlFor="descripcion" className="label-crear">Descripcion</label>
            <textarea
              className="inputs" name="" id="descripcion" onChange={(e) => setDescripcion(e.target.value)}></textarea>
          </div>
          <div className="input-crear">
            <label htmlFor="imagen" className="label-crear">Imagen</label>
            <input className="inputs" type="text" id="imagen" onChange={(e) => setImagen(e.target.value)} />
          </div>
          <button type="submit" className="boton-crear">Crear Blog</button>
        </form>
      </div>
    </div>
  );
};

export default CrearBlog;
