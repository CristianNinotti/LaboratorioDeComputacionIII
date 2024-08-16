import './App.css'
import CervezasDisponibles from './componentes/cervezasDisponibles/cervezasDisponibles';
import NombreYPreciosCervezas from './componentes/NombreYPreciosCervezas/NombreYPreciosCervezas';
import CervezasRedEIpa from './componentes/cervezasRedEIpa/cervezasRedEIpa';
import CervezasEstilo from './componentes/cervezasEstilos/cervezasEstilos';
import beers from './componentes/beers/Beers';

function App() {

  return (
      <>
      <div>
        <NombreYPreciosCervezas beers={beers}/>
      </div>
      <div>
        <CervezasDisponibles beers={beers}/>
      </div>
      <div>
        <CervezasEstilo beers={beers}/>
      </div>
      <div>
        <CervezasRedEIpa beers={beers}/>
      </div>

      </>

)
}

export default App
