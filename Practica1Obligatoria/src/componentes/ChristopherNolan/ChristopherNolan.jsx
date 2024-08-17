

const ChristopherNolan = ({peliculas}) => {
    return (
        <>
            <h3>1. Dirigidas por Cristopher Nolan.(Peliculas)</h3>
            {peliculas
                .filter((props) => props.Director === 'Christopher Nolan')
                .map((props) => (
                    <div key={props.Id}>
                        {props.Title}
                    </div>
                ))}

        </>
    );
};









export default ChristopherNolan;

