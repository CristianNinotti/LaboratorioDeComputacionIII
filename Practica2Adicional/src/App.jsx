import './App.css'
import Consigna1 from './components/consigna1/Consigna1'
import Consigna2 from './components/consigna2/Consigna2'
import Consigna3 from './components/consigna3/Consigna3'
import FacturasItem from './components/facturaItem/FacturaItem'
import Facturas from './components/facturas/Facturas'
import SharksItem from './components/sharksItem/sharksItem'
import Sharks from './components/sharks/Sharks'

function App() {


  return (
    <>

        <Consigna1 />
        <FacturasItem facturas = {Facturas}/>
        <Consigna2 />
        <SharksItem sharks = {Sharks}/>
        <Consigna3 />

    </>
  )
}

export default App
