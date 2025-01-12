import "./Blogs.css"
import { Link } from "react-router-dom";

const Blog = ({blog}) =>{
    console.log(blog)
    return(
        <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'black'}}>
        <div  className="contenedor">
            <img src={blog.imagen} alt={blog.title} className="imagen" />
            <div className="datos">
                <h1 className="titulo">{blog.auto}</h1>
                <p className="marca">Marca: {blog.marca}</p>
                <button className="botoncito2">Informacion</button>
            </div>
        </div></Link>
    )

}

export default Blog