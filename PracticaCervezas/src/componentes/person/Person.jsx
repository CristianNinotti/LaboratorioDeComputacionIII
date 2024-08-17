
const Person = ({ names }) => {
    return (
        <>
            <hr></hr>
            <h3>Ejercicio 2</h3>
            <h3>const names = [“Parker”,”Simmons”,”Lewis”,”Poe””];</h3>
            <p>2. En el componente App.js poseo el siguiente arreglo:
                const names = [“Parker”,”Simmons”,”Lewis”,”Poe””];
                Escribir el componente Persons.js que reciba por props ese arreglo, filtre aquellos
                nombres que comiencen con la letra P y devuelva un componente Person por cada
                una de las personas que cumplen esa condición. A su vez, Person recibirá por props
                el valor del nombre.
            </p>
            <div>
                {names.filter(persona => persona.startsWith('P'))
                .map((persona, index) => (
                    <li key={index}>
                        Indice: {index},
                        Nombre Persona: {persona}
                    </li>
                ))}
            
                
            </div>
        </>
    )
}

export default Person;