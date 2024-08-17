import './App.css'
import ChristopherNolan from './componentes/ChristopherNolan/ChristopherNolan';
import RaitingMayorA8 from './componentes/raitingMayorA8/RaitingMayorA8';
import Peliculas from './componentes/peliculas/Peliculas';

function App() {

  return (
    <>   
    <ChristopherNolan peliculas = {Peliculas} />
    <RaitingMayorA8 peliculas = {Peliculas}/>
    </>
  )
}

export default App
