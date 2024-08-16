const CervezasDisponibles = ({ beers }) => {
    return (
        <>
            <hr></hr>
            <h3>Ejercicio 2</h3>
            <p>2 - Crear un componente donde se muestren en pantalla solo las cervezas
                disponibles. (Mirando la propiedad available)
            </p>
            <h5>Cervezas Disponibles</h5>
           
                {beers
                    .filter(beer => beer.available === true)  
                    .map((cerveza, id) => (                   
                        <li key={id}>                     
                            Nombre: {cerveza.beerName}
                        </li>
                    ))}
          
        </>
    );
}

export default CervezasDisponibles;