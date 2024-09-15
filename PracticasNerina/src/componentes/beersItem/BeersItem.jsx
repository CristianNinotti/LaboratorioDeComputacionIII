import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const BeersItem = ({ id, beerName, beerStyle, price, available }) => {

    return (
        <>
            <Card style={{background: 'orange', margin: '2rem'}}>
                <Card.Body>
                    <div>
                        Id: {id}
                    </div>
                    <div>
                        Nombre: {beerName}
                    </div>
                    <div>
                        Price: {price}
                    </div>
                    <Card.Title>{beerName}</Card.Title>
                    <Card.Text>
                        <div>
                            Estilo: {beerStyle}
                        </div>
                        <div>
                            Disponible: {available ? 'Sí' : 'No'}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>



        </>
    )
}

BeersItem.propTypes = {
    id: PropTypes.number,
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.bool,
}

export default BeersItem