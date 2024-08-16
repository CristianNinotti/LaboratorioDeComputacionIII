const CervezasEstilo = ({ beers }) => {
    const count = beers
        .filter((cerveza) => cerveza.beerStyle === 'Red' || cerveza.beerStyle === 'IPA')
        .reduce((acumulador) => {
            return acumulador + 1;
        }, 0);

    return (
        <>
            <hr></hr>
            <h3>Ejercicio 3</h3>
            <p>
                3 - Crear otro componente donde internamente haga un conteo y nos
                muestre por pantalla la cantidad de cervezas de estilo Red e IPA que
                tenemos en la lista. (Prestar atención en la manera de pasar el arreglo
                por props)
            </p>
            <h5>Cervezas RED o IPA</h5>
            <p>Cantidad: {count}</p>
        </>
    );
};

export default CervezasEstilo;

