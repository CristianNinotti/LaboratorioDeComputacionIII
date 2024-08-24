import PropTypes from 'prop-types'

const AverageIncome = ({netIncomes}) => {
   
        const totalIncome = netIncomes.reduce((acumulador, ganancia) => {
            return acumulador = acumulador + ganancia.income
       
        },0);
        return (
            <>
            <p>Promedio de Ganancias: {totalIncome / netIncomes.length}</p>
            </>
        )}


AverageIncome.PropTypes = {
    id: PropTypes.number,
    income: PropTypes.number
}


export default AverageIncome