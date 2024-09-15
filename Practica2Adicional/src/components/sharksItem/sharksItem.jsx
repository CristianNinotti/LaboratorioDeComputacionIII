import PropTypes from 'prop-types'
import Shark from '../shark/Shark'
import { Row, Form, InputGroup, Button  } from 'react-bootstrap'
import { useState } from 'react'

const SharksItem = ({ sharks }) => {

        const [filterValue, setFilterValue] = useState('');
        const [filteredSharks, setFilteredSharks] = useState(sharks);
    
        const handleFilterChange = (e) => {
            setFilterValue(e.target.value);
        };
    
        const handleFilterClick = () => {
            const filtered = sharks.filter(shark => shark.lifeExpectancy >= filterValue);
            setFilteredSharks(filtered);
        };
    return (
        <>
      <InputGroup>
        <Form.Control 
        type="number"
        style={{margin:"1em",maxWidth: "30em",border:"3px solid white", backgroundColor:"lightblue", color:"black"}} placeholder="Ingrese la expectativa de vida"
        value={filterValue}
        onChange={handleFilterChange}
        />
        <Button style={{margin:"1em", border:"3px solid white"}} variant="primary"
        onClick={handleFilterClick}>Filtrar</Button>{' '}
      </InputGroup>
            <Row>
                {filteredSharks.map((shark, id) => (
                    <Shark key={id}
                        id={shark.id}
                        species={shark.species}
                        family={shark.family}
                        lifeExpectancy={shark.lifeExpectancy}

                    />
                ))}

            </Row>
        </>
    )
}


SharksItem.propTypes = {
    sharks: PropTypes.array
}

export default SharksItem

