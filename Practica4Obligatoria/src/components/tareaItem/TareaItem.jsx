import { Col, Card, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'


const TareaItem = ({ id, tarea, completada, borrarTarea, completarTarea }) => {

    return (
        <>
            <Col lg="4">
                <Card
                    style={{
                        width: '18rem',
                        margin: "1em",
                        color: "black",
                        backgroundColor: completada ? 'lightgray' : "lightblue",
                        border: "3px solid white"
                    }}>
                    <Card.Body>
                        <Card.Title>Numero tarea: {id}</Card.Title>
                        <Card.Text>
                            Tarea: {tarea}
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => borrarTarea(id)}
                        style={{
                            margin: "0.25em",
                            border: "solid white 3px",
                            backgroundColor: completada ? 'lightgray' : "#0d6efd",
                            color: "black"
                        }}>Borrar</Button>
                    <Button onClick={() => completarTarea(id)}
                        style={{
                            margin: "0.25em",
                            border: "solid white 3px",
                            backgroundColor: completada ? 'lightgray' : "#0d6efd",
                            color: "black"
                        }}>{completada ? "Completada" : "Completar"}</Button>
                </Card>
            </Col>
        </>
    )
}

TareaItem.propTypes = {
    id: PropTypes.number,
    tarea: PropTypes.string,
    completada: PropTypes.bool,
    borrarTarea: PropTypes.func,
}




export default TareaItem