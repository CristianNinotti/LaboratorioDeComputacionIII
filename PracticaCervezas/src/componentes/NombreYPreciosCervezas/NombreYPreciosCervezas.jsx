import React from 'react'

const NombreYPreciosCervezas = ({ beers }) => {
    return (
        <>
            <div>
                <h3>Ejercicio 1</h3>
                <p>1 - Crear un componente donde muestre por pantalla una lista de todas las
                    cervezas. Además, se debe calcular el precio en pesos argentinos antes de
                    mostrarlo, ya que el precio que tenemos en el listado está expresado en USD.
                    (Consejo: utilizar alguna array function que nos brinda js)
                </p>
                <h5>Cervezas y Precios</h5>
                {beers.map((cerveza) => (

                    <li>Nombre: {cerveza.beerName}, Precio: ${cerveza.price * 1410}</li>

                ))};
            </div>
        </>
    )
}

export default NombreYPreciosCervezas