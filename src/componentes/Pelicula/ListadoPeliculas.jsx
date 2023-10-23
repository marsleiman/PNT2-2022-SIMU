import { Link } from "react-router-dom";
import Detalle from './Detalle';

const ListadoPeliculas = (props) => {
    const { peliculas, description } = props;

    return (
        <>
            {peliculas.map(peli => (
                <Link key={peli._id} to={`/peliculas/${peli._id}`}>
                    <Detalle pelicula={peli} description={false}/>
                </Link>)
            )}
        </>
    );
}

export default ListadoPeliculas;