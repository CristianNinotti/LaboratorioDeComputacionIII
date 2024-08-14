import beers from "../beers/Beers";

const CervezasEstilo = beers.map((props) => {
    return {
        Estilo: props.beerStyle
    };
});
export default CervezasEstilo

