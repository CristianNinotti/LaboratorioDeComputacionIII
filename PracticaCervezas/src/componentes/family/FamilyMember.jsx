const FamilyMember = ({personsSorted}) => {
    return (
        <>
        <div>
            {personsSorted.map ((persona, index)  => (
                <div key={index}>
                    <h3>Persona: {persona.name}</h3>
                    <p>Edad: {persona.age}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default FamilyMember