import beers from "../beers/Beers";

const CervezasDisponibles = beers.filter((props) => props.available === true).map((props) => ({
    Nombre: props.beerName,
    Precio: props.price,
}));

export default CervezasDisponibles