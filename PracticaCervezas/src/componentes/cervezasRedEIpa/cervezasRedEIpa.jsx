const CervezasRedEIpa = ({ beers }) => {
    return (
        <>
        <hr></hr>
        <h3>Ejercicio 4</h3>
        <p>4 - Crear un componente que muestre por pantalla solamente los estilos de cerveza
que hay en esta lista de cervezas.</p>
        <h5>Cervezas y Estilos Red - IPA</h5>
     
            {beers
                .filter((beer) => beer.beerStyle === "IPA" || beer.beerStyle === "Red")
                .map((beer) => (
                    <li key={beer.id}>
                        Nombre: {beer.beerName}, Estilo: {beer.beerStyle}
                    </li>
                ))}
  
        </>
    );
};

export default CervezasRedEIpa;
