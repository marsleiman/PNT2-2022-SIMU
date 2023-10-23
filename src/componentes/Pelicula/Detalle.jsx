const Detalle = (props) => {
    const { pelicula, description } = props;

    return(
        <div>
            <h2>{pelicula.title}</h2>
            <img src={pelicula.poster} alt={`${pelicula.tile} poster`}/>
            {description && <h2>{pelicula.fullplot}</h2>}
        </div>
    )
}

export default Detalle;