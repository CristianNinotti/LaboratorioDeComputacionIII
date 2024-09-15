import './App.css'
import beers from './componentes/beers/beers'
import ChangeDollar from './componentes/changeDollar/ChangeDollar'


function App() {

  return (
    <>
      <ChangeDollar beers={beers}/>
    </>
  )
}

export default App
