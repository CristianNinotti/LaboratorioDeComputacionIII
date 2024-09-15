import PropTypes from 'prop-types'
import { Card, Col } from 'react-bootstrap';

const Shark = ({ species, family, lifeExpectancy }) => {
    return (

        <Col lg="4">
            <Card style={{ width: '18rem', margin: "1em", color:"black", backgroundColor:"lightblue", border:"3px solid white"}}>
                <Card.Body>
                    <Card.Title>Especie: {species}</Card.Title>
                    <Card.Text>
                      Familia:  {family}  Esperanza de Vida: {lifeExpectancy}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )
}

Shark.propTypes = {
    species: PropTypes.string,
    family: PropTypes.string,
    lifeExpectancy: PropTypes.number
}


export default Shark