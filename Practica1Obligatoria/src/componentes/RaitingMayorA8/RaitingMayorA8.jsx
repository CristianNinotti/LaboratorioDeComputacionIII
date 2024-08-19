import PropTypes from 'prop-types';

const RaitingMayorA8 = ({peliculas}) => {
    return (
        <>
        <h3>2. Con un imdbRating Mayor a 8.0</h3>
        {
            peliculas
            .filter(({imdbRating}) =>
            parseFloat(imdbRating) > 8.0 )
            .map(({Id, Title}) => (
                <div key={Id}>
                    {Title}
                </div>
            ))}

        </>
    )
}

RaitingMayorA8.propType = {
    Id: PropTypes.number,
    Title: PropTypes.string,
    imdbRating: PropTypes.float
} 


export default RaitingMayorA8