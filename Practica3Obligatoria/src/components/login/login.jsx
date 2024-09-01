import {Form, InputGroup, Button,} from 'react-bootstrap';
import React, {useState} from 'react';


const Login = () => {

    const [userName, setUserName] = useState('');
    
    const validacionNombreUsuarioo = () => {

        if (!userName.trim() || /\s/.test(userName) ) {
            alert ("Nombre de usuario inválido");
            return false;
        }

        if (userName.includes('o') || userName.includes('O')) {
            alert('El nombre de usuaro tiene que contener ni "o" ni "O" ')
            return false;
        }
        return true;

    };

    const handlerRegister = () => {
        if (validacionNombreUsuarioo()) {
            alert('El usuario se ha registrado con éxito');
        }
    };



    return (
        <>

            <InputGroup className="mb-3">
            <InputGroup.Text style={{ margin: '15px' }} id="basic-addon2">Ingrese su nombre de usuario </InputGroup.Text>
                <Form.Control
                    placeholder="Nombre de usuario"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                </InputGroup>

                <Button 
                style={{ margin: '15px' }} 
                variant="light"
                onClick = {handlerRegister}>
                    Registrarse
                </Button>
                <p> Usuario input: {userName}</p>

            </>
            )
}

export default Login
