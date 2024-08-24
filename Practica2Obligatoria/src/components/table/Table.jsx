import PropTypes from 'prop-types'

const Table = ({ netIncomes }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Marca Hamburguesa</th>
                        <th>Ganancia</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map(({id, brand, income}) =>
                        <tr key={id}>
                            <td>{brand}</td>
                            <td>{income}</td>
                        </tr>

                    )}
                </tbody>
            </table >
        </>
    )
}

export default Table

Table.propTypes = { 
    id: PropTypes.number,
    brand: PropTypes.string,
    income: PropTypes.number
}