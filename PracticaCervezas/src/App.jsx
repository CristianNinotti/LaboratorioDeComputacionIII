import './App.css'
import CervezasDisponibles from './componentes/cervezasDisponibles/cervezasDisponibles';
import NombreYPreciosCervezas from './componentes/NombreYPreciosCervezas/NombreYPreciosCervezas';
import CervezasRedEIpa from './componentes/cervezasRedEIpa/cervezasRedEIpa';
import CervezasEstilo from './componentes/cervezasEstilos/cervezasEstilos';
import beers from './componentes/beers/Beers';
import Producto from './componentes/Products/Products';
import Person from './componentes/Person/Person';
import Family from './componentes/family/Family';




function App() {

  
  const products = ["table", "couch", "chair1", "chair2"];
  const names = ["Parker","Simmons","Lewis","Poe"];
  const persons = [{ name:'Juan', age: 26 },{ name: 'Gabriel', age: 27 }, { name:
    'Valentina', age: 22 }, { name: 'Paula', age: 25 }, { name: 'Andrés', age: 20 } ];
  const personsSorted = persons.sort((a,b) => b.age - a.age)

  return (
    
      <>
      <div>
        <h3>Practica Principal</h3>
        <hr></hr>

        <NombreYPreciosCervezas beers={beers}/>

        <CervezasDisponibles beers={beers}/>

        <CervezasEstilo beers={beers}/>

        <CervezasRedEIpa beers={beers}/>

        <hr></hr>
        <h3>Practica Adicional</h3>

        <Producto products={products}/>

        <Person names={names}/>

        <Family personsSorted = {personsSorted}/>

      </div>

      </>

)
}

export default App
