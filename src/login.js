import React from 'react';
import GoogleLogin from 'react-google-login';

function login() {
    const respuestagoogle=(respuesta)=>{
        console.log(respuesta);
        console.log(respuesta.profileObj);

    }
    return (
        <div className="App">
            <br /><br />
            <GoogleLogin
                clientId="709745873867-t6rksg55cqh9lrs5snrac6tmq6g8jpb7.apps.googleusercontent.com"
                buttonText="Iniciar Sesión"
                onSuccess={respuestagoogle}
                onFailure={respuestagoogle}
                cookiePolicy={'single_host_origin'}
            />

        </div>
    );
}
export default login;