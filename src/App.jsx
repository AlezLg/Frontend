import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {AuthProvider} from "./context/AuthContext";
import Home from './pages/home/Home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import CrearBlog from './pages/Crear-blog/Crear-blog'
import ModificarBlog from './pages/Modificar-blog/modificarblog';
import Header from './components/Header';
import Footer from './components/Footer';
import MisBlogs from './pages/Mis-Blogs/MisBlogs';
import DetalleBlog from './pages/home/Detalleblog';




function App() {


  return (
    <AuthProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/crear-blog" element={<CrearBlog/>} />
      <Route path="/Modificar-blog/:idblog" element={<ModificarBlog/>} />
      <Route path="/mis-blogs" element={<MisBlogs/>} />
      <Route path="/blogs/:id" element={<DetalleBlog />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App
