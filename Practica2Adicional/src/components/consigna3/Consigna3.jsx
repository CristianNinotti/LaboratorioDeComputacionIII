
const Consigna3 = () => {
    return (
        <>
            <div>
                3- Debemos escribir dos componentes para calcular el precio total del producto que
                deseamos vender.

                ● ProductForm: este componente poseerá un input del tipo numérico que permita al
                usuario ingresar el valor del producto que desea vender, además de un dropdown
                con las siguientes opciones:

                ○ “Envío a la casa”, suma 1000 al valor del producto.
                ○ “Retiro por correo”, suma 300 al valor del producto.
                ○ “Retiro presencial”, no suma al valor del producto.
                ● App: posee un botón con la leyenda “Mostrar valor final”, que dentro de un elemento
                p muestra el valor final del producto: “El valor final del producto es: valorFinal”. App
                es un componente que contiene al componente ProductForm.
            </div>
        </>
    )
}

export default Consigna3
