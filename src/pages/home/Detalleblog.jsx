import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./Detalleblog.css"


const DetalleBlog = () => {
  const backurl = import.meta.env.VITE_BACK_URL
    const { id } = useParams()
    const [blog, setBlog] = useState({});
    
    useEffect(() => {
      const fetchback = async () => {
        const response = await fetch(`${backurl}blogs/${id}`)
      const responsejson = await response.json()
      console.log(responsejson.data)
      setBlog(responsejson.data)
      }
      fetchback()
    },[])
    
  return (
    <div className="contenedorCard2">
      <img src={blog.imagen} alt={blog.auto} className="imagen3" />
      <div className="datos3">
        <h2 className="titulo3">{blog.auto}</h2>
        <div className="subtitulo3">
          <p className="marca3">Modelo: {blog.marca}</p>
          <p className="descripcion3">Descripcion: {blog.descripcion}</p>
        </div></div>
    </div>
  );
};

export default DetalleBlog;
