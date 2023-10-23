import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import Detalle from './Detalle';

const Pagina = () => {
    const { id } = useParams();
    const [data] = useFetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1");
    const [cargando, setCargando] = useState(true);
    const [actPeli, setPeli] = useState(null);

    useEffect(() => {
        if (!data) { setCargando(true) }
        else {
            setCargando(false)
            setPeli(data.find(peli => peli._id === id))
        }
        console.log("actPeli", actPeli);
    }, [data]);

    return(
        <div>
            {cargando ? (<span>cargando....</span>) : (<Detalle pelicula={actPeli} description={true} />)}
        </div>
    )
}

export default Pagina;