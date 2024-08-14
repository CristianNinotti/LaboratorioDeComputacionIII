import './App.css'
import CervezasDisponibles from './componentes/cervezasDisponibles/cervezasDisponibles';
import NombreYPreciosCervezas from './componentes/NombreYPreciosCervezas/NombreYPreciosCervezas';
import CervezasRedEIpa from './componentes/cervezasRedEIpa/cervezasRedEIpa';
import CervezasEstilo from './componentes/cervezasEstilos/cervezasEstilos';
import PropTypes from 'prop-types' // No esta funcionando, no lo estoy usando //

function App() {

  return (
    <>
      <h3>Ejercicio 1</h3>
      <p>1 - Crear un componente donde muestre por pantalla una lista de todas las
        cervezas. Además, se debe calcular el precio en pesos argentinos antes de
        mostrarlo, ya que el precio que tenemos en el listado está expresado en USD.
        (Consejo: utilizar alguna array function que nos brinda js)
      </p>
      <h5>Cervezas y Precios</h5>
      <div>
        <NombreYPreciosCervezas/>
      </div>
      </>

)
}
export default App

      {/* <h3>Ejercicio 2</h3>
      <p>2 - Crear un componente donde se muestren en pantalla solo las cervezas
        disponibles. (Mirando la propiedad available)</p>
      <div>
        <h5>Cervezas Disponibles</h5>
        {CervezasDisponibles.map((cerveza, i) => (
          <div key={}>
            Nombre: {cerveza.Nombre}, Precio ${cerveza.Precio}
          </div>
        ))}
      </div>
      <h3>Ejercicio 3</h3>
      <p>3 - Crear otro componente donde internamente haga un conteo y nos muestre por
        pantalla la cantidad de cervezas de estilo Red e IPA que tenemos en la lista.
        (Prestar atención en la manera de pasar el arreglo por props)
      </p>
      <div>
        <h5>Cervezas Red e Ipa</h5>
        {CervezasRedEIpa}
      </div>
      <h3>Ejercicio 4</h3>
      <p>4 - Crear un componente que muestre por pantalla solamente los estilos de cerveza
        que hay en esta lista de cervezas.
      </p>
      <div>
      </div>
      <h5>Estilos de cervezas</h5>
      <div>
        {CervezasEstilo.map((cerveza) => (
          <div>
            Estilo: {cerveza.Estilo}
          </div>
        ))}
      </div>
      <div>
        <h3>Práctica adicional</h3>
        <div>
          <p>En el componente App.js poseo el siguiente arreglo:
            const products = [“table”,”couch”,”chair1”,”chair2”];
            Escribir el componente Products.js que reciba por props ese arreglo y devuelva un
            componente Product por cada uno de los valores del arreglo. A su vez, Product
            manda por la prop name el valor de la posición del arreglo (El primer producto
            recibirá “table” en name, el segundo “couch” y así sucesivamente)
            Pista: la etiqueta del componente Product se vería así:
            Product name={ /* aca el valor */}
