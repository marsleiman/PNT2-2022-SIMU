import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>¡Bienvenidos!</h1>
            <h2>Para ver el listado de películas</h2>
            <Link to={"/peliculas"}>Ver listado</Link>
        </div>
    );
}

export default Home;