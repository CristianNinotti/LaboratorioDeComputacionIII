import { useState } from "react"
import PropTypes from "prop-types";
import { Button, Row, Col } from 'react-bootstrap';
import BeersItem from "../beersItem/BeersItem";


const ChangeDollar = ({ beers }) => {


    const [newPrice, setNewPrice] = useState('')
    const changeDollarHandle = (price) => {
        setNewPrice(newPrice + 1);
    }

    return (
        <>
            <div>
                <h2>Practica 2</h2>
            </div>
            <Row>
                {beers.map((beer) => (
                    <Col lg={4} key={beer.id}>
                        <BeersItem
                            id={beer.id}
                            beerName={beer.beerName}
                            beerStyle={beer.beerStyle}
                            price={beer.price}
                            available={beer.available}
                        />
                    </Col>
                ))}
            </Row>


            <Button variant="primary" onClick={changeDollarHandle}>Convertir a dolar</Button>
        </>

    )
}

ChangeDollar.propTypes = {
    beers: PropTypes.array,
};


export default ChangeDollar