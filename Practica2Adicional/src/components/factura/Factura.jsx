import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Factura = ({ id, name, type, price }) => {
    return (
        <>
        
            <Col lg="4">

                <Card style={{ width: '18rem', margin: "1em", color:"black", backgroundColor:"salmon", border:"3px solid white"}}>
                    <Card.Body>
                        <Card.Title>{id} - {name}</Card.Title>
                        <Card.Text>
                            Price: {price} -
                            Type: {type}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}

Factura.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number
}

export default Factura