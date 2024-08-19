import PropTypes from 'prop-types';

const ChristopherNolan = ({peliculas}) => {
    return (
        <>
            <h3>1. Dirigidas por Cristopher Nolan.(Peliculas)</h3>
            {peliculas
                .filter(({Director}) => Director === 'Christopher Nolan')
                .map(({Id, Title}) => (
                    <div key={Id}>
                        {Title}
                    </div>
                ))}

        </>
    );
};


ChristopherNolan.propType = {
    Id: PropTypes.number,
    Title: PropTypes.string,
    Director: PropTypes.string
} 

export default ChristopherNolan;

