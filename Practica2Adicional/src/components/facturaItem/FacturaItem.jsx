import { Row, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';
import Factura from '../factura/Factura';
import { useState } from 'react';

const FacturaItem = ({ facturas }) => {

    const [facturasFiltradas, setFacturasFiltradas] = useState(facturas)

    const mostrarDulces = () => {
        const facturasDulces = facturas.filter(factura=>factura.type == "dulce");
        setFacturasFiltradas(facturasDulces)
    }

    const mostrarTodas = () => {
        setFacturasFiltradas(facturas)
    }

    return (
        <>
            <Button style={{margin: "1em", border: "3px solid white",backgroundColor:"pink",color:"black"}} variant="primary" onClick={mostrarDulces}>Mostrar Dulces</Button>
            <Button style={{margin: "1em", border: "3px solid white", backgroundColor:"pink", color:"black"}} variant="primary" onClick={mostrarTodas}>Mostrar Todas</Button>


            <Row>
                {facturasFiltradas.map((factura, id) => (
                    <Factura key={id}
                        id={factura.id}
                        name={factura.name}
                        type={factura.type}
                        price={factura.price}
                    />
                ))}
            </Row>

        </>
    )
}

FacturaItem.propTypes = {
    facturas: PropTypes.array
}


export default FacturaItem

