// import beers from "../beers/Beers"

// const NombreYPreciosCervezas = beers.map((props) => {
//     return {
//             Nombre: props.beerName,
//             Precio: props.price * 1410
//     };




// export default NombreYPreciosCervezas

import React from 'react'

const NombreYPreciosCervezas = () => {
    return (
        <div>NombreYPreciosCervezas
            {NombreYPreciosCervezas.map((cerveza) => (
                <div>
                    Nombre: {cerveza.Nombre}, Precio: ${cerveza.Precio}
                </div>
            ))};
        </div>
    )
}

export default NombreYPreciosCervezas