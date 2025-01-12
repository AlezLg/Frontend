import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Crear-blog/Crearblog.css"


const ModificarBlog = () => {
  const backurl = import.meta.env.VITE_BACK_URL
  const { idblog } = useParams();
  const [blog, setBlog] = useState({});
  const [auto, setAuto] = useState(blog?.auto);
  const [imagen, setImagen] = useState(blog?.Image);
  const [descripcion, setDescripcion] = useState(blog?.descripcion);
  const [marca, setMarca] = useState(blog?.modelo);

  useEffect(() => {
    const fetchBack = async () => {
      const response = await fetch(`${backurl}blogs/${idblog}`);
      const responsejson = await response.json();
      console.log(responsejson.data);
      setBlog(responsejson.data);
    };
    fetchBack();
  },[])

  useEffect(() => {
    setAuto(blog.auto)
    setImagen(blog.imagen)
    setDescripcion(blog.descripcion)
    setMarca(blog.modelo)
  },[blog])


  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      auto: auto,
      descripcion: descripcion,
      marca: marca,
      imagen: imagen,
      autor: "678357925660216674b1ee20",
   
    };

    const respuesta = await handlefetch(blog)
    console.log(respuesta);
    console.log(respuesta.ok)
    if(respuesta.status === "success"){
      toast.success("Blog modificado");
      navigate("/mis-blogs");
    }else{
      toast.error("Blog no modificado");
    }
  };

  const handlefetch = async (blog) => {
    const response = await fetch(`${backurl}blogs/${idblog}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
    const responsejson = await response.json()
    return responsejson
  }

  return (
    <div className="contenedor-crear">
      <form onSubmit={handleSubmit} className="form">
        <h1>Modificar Auto</h1>
        <div className="input-crear">
          <label htmlFor="titulo" className="label">
            Auto
          </label>
          <input
            className="inputs"
            type="text"
            id="auto"
            onChange={(e) => setAuto(e.target.value)}
            value={auto}
          />
        </div>
        <div className="input-crear">
          <label htmlFor="modelo" className="label-crear">
            Marca
          </label>
          <input
            className="inputs"
            type="text"
            id="marca"
            onChange={(e) => setMarca(e.target.value)}
            value={marca}
          />
        </div>
        <div className="input">
          <label htmlFor="descripcion" className="label-crear">
            Descripcion
          </label>
          <textarea
          className="inputs"
            name=""
            id="descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
            cols={"50"}
            rows={"10"}
            value={descripcion}
          ></textarea>
        </div>
        <div className="input">
          <label htmlFor="imagen" className="label-crear">
            Imagen
          </label>
          <input
            className="inputs"
            type="text"
            id="imagen"
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
          />
        </div>

        <button type="submit" className="boton-crear">
          Modificar
        </button>
      </form>
    </div>
  );
};

export default ModificarBlog;
