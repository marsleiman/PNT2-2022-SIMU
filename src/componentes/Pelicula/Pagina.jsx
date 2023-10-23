import { useState, useEffect } from "react";
import ListadoPeliculas from './ListadoPeliculas'
import useFetch from '../../hooks/useFetch';

const Pagina = () => {
    const [data] = useFetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1");
    const [cargando, setCargando] = useState(true);
    console.log("pagina data", data);

    useEffect(() => {
        if (!data) { setCargando(true) }
        else {setCargando(false)}
      }, [data]);

    return(
        <div>
            <ul className="users-list">
                {
                    cargando ? (<h2>cargando....</h2>) : <ListadoPeliculas peliculas={data} description={false} />
                }
            </ul>
        </div>
    )
}

export default Pagina;