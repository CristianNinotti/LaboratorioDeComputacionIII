
const Producto = ({ products }) => {
    return (
        <>
            <hr></hr>
            <h3>Ejercicio 1</h3>
            <h3>const products = [“table”,”couch”,”chair1”,”chair2”];</h3>
            <p>Escribir el componente Products.js que reciba por props ese arreglo y devuelva un
                componente Product por cada uno de los valores del arreglo. A su vez, Product
                manda por la prop name el valor de la posición del arreglo (El primer producto
                recibirá “table” en name, el segundo “couch” y así sucesivamente)
                Pista: la etiqueta del componente Product se vería así:
                .
            </p>

            <div>
                    {products.map((product, index) => (
                        <li key={index}>
                            Numero: {index},
                            Producto: {product}
                        </li>
                    ))}
            </div>
        </>
    )
}

export default Producto