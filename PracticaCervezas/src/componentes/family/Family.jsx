import FamilyMember from "./FamilyMember"
const Family = ({personsSorted }) => {
    return (
        <>
            <hr></hr>
            <h3>Ejercicio 3</h3>
            <p>Escribir el componente Family.js que reciba ese arreglo previamente ordenado de
                mayor a menor según su edad y luego devuelva un componente FamilyMember.js
                que posea una etiqueta h3 que muestre en pantalla el nombre de la persona y luego
                una etiqueta p con su edad.
                Se debe utilizar funciones map y sort para la resolución de estos ejercicios.</p>
            <div>
                <FamilyMember personsSorted={personsSorted}/>
            </div>
        </>
    )

}

export default Family

