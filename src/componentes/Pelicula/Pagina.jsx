import { useState, useEffect } from "react";
import ListadoPeliculas from './ListadoPeliculas'
import useFetch from '../../hooks/useFetch';

const Pagina = () => {
    const [pagination, setPagination] = useState(1);
    const [data] = useFetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=${pagination}`);
    const [cargando, setCargando] = useState(true);
    console.log("pagina data", data);
    console.log("pagina pagination", pagination);

    useEffect(() => {
        if (!data) { setCargando(true) }
        else {setCargando(false)}
      }, [data]);

    const backPag = () => {
        if (pagination > 1) {
            setPagination(pagination-1)
        }
    };

    const nextPage = () => setPagination(pagination+1);

    return(
        <div>
            <ul className="users-list">
                {
                    cargando ? (<h2>cargando....</h2>) : <ListadoPeliculas peliculas={data} description={false} />
                }
            </ul>
            <button onClick={backPag}>atrás</button> | <button onClick={nextPage}>siguiente</button>
        </div>
    )
}

export default Pagina;