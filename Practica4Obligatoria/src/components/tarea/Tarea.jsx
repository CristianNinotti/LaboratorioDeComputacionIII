import { Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import TareaItem from '../tareaItem/TareaItem'

const Tarea = ({ arrayObjetos, borrarTarea, completarTarea }) => {

return (
    <>
        <Row>
            {arrayObjetos.map((objeto) =>
                <TareaItem 
                    completarTarea = {completarTarea}
                    borrarTarea = {borrarTarea}
                    key={objeto.id}
                    id={objeto.id}
                    tarea={objeto.tarea}
                    completada={objeto.completada}
                />
            )}
        </Row>
    </>
)
}

Tarea.propTypes = {
    arrayObjetos: PropTypes.array,
    borrarTarea: PropTypes.func,
    completarTarea: PropTypes.func,
}



export default Tarea