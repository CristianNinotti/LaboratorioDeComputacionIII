import beers from "../beers/Beers";

const CervezasRedEIpa = beers.filter((props) => props.beerStyle === "IPA" || props.beerStyle === "Red")
.reduce((acumulador) => {
    return acumulador = acumulador + 1;
},0);

export default CervezasRedEIpa