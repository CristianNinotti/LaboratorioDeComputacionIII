import './App.css'
import AverageIncome from './components/averageIncomes/AverageIncomes'
import netIncomes from './components/incomes/netIncomes'
import Table from './components/table/table'

function App() {


  return (
    <>
      <div>
        <Table netIncomes = {netIncomes}/>
        <AverageIncome netIncomes = {netIncomes}/>
      </div>

    </>
  )
}

export default App
