import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Pelicula/Home"
import Pagina from "./componentes/Pelicula/Pagina"
import PeliculaDetalle from "./componentes/Pelicula/PeliculaDetalle"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/peliculas" element={<Pagina />} />
        <Route path="/peliculas/:id" element={<PeliculaDetalle />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;