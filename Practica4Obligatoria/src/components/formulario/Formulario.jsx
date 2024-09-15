import { Form, Button, Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Formulario = ({ agregarTarea }) => {

    const [tareaIngresada, setTareaIngresada] = useState('');

    const HandlerTareaNueva = (e) => {
        setTareaIngresada(e.target.value);
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        const nuevaTarea = {
            tarea: tareaIngresada,
            completada: false,
        }
        agregarTarea(nuevaTarea);
        setTareaIngresada('')
    }


    return (
        <>
            <hr></hr>
            <h3>Tareas</h3>
            <hr></hr>

            <Form onSubmit={SubmitForm}>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col lg="4">
                        <Form.Control
                            style={{ margin: "1em", border: "3px solid white", backgroundColor: "lightblue", color: "black" }} placeholder="Ingrese su tarea"
                            value={tareaIngresada}
                            onChange={HandlerTareaNueva}
                        />
                    </Col>
                    <Col lg="1">
                        <Button style={{ margin: "1em", border: "3px solid white" }} variant="primary" type="submit">Agregar</Button>
                    </Col>
                </Row>
            </Form>
            <hr></hr>


        </>
    )
}

Formulario.propTypes = {
    agregarTarea: PropTypes.func,
}


export default Formulario