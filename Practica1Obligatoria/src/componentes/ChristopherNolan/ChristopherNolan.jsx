import peliculas from "../Peliculas/Peliculas";

const ChristopherNolan = () => {
    return (
        <>
            <h3>1. Dirigidas por Cristopher Nolan.(Peliculas)</h3>
            {peliculas
                .filter((props) => props.Director === 'Christopher Nolan')
                .map((props) => (
                    <div key={props.Title}>
                        {props.Title}
                    </div>
                ))}

        </>
    );
};









export default ChristopherNolan;

