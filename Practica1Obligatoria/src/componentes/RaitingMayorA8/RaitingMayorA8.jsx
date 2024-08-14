import peliculas from "../Peliculas/Peliculas";

const RaitingMayorA8 = () => {
    return (
        <>
        <h3>2. Con un imdbRating Mayor a 8.0</h3>
        {
            peliculas
            .filter((props) =>
            parseFloat(props.imdbRating) > 8.0 )
            .map((props) => (
                <div key={props.Title}>
                    {props.Title}
                </div>
            ))}

        </>
    )
}

export default RaitingMayorA8