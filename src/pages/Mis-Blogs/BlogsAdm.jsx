import "../home/Blogs.css";
import { Link } from "react-router-dom";
import "./Blogadm.css";



const BlogAdmin = ({ blog ,handleDelete}) => {
  console.log(blog);

    const eliminarBlog = () => {
        handleDelete(blog.id)

    }

  return (
    <div className="contenedorCard">
      <img src={blog.imagen} alt={blog.auto} className="imagen2" />
      <div className="datos2">
        <h2 className="titulo2">{blog.auto}</h2>
        <div className="subtitulo">
          <p className="marca2">Modelo: {blog.marca}</p>
          <p className="descripcion2">Descripcion: {blog.descripcion}</p>
        </div></div>
        <div className="cajaboton">
        <Link to={`/modificar-blog/${blog.id}`}>
          <button className="botoncito">Modificar</button>
        </Link>
        <button onClick={()=>eliminarBlog()} className="botoncito"> Eliminar</button>
    </div></div>
  );
};

export default BlogAdmin;
