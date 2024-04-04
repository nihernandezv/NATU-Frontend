import "./Login.css";

export default function Login() {
    return (
        <>
            <div id="login">
                {/*<div id="background">
                    <div id="shape"></div>
                    <div id="shape"></div>
    </div>*/}
                <div id="container"> {/* Agrega un contenedor de Bootstrap */}
                        <div className=""> {/* Coloca el formulario en una columna centrada */}
                            <form id="login-form">
                                <div id="logo">
                                    {/* <h1><a href="index.html">Gestore</a></h1> */}
                                    {/* <a href="index.html"><img src="assets/img/logo.png" alt="" id="img-fluid"></a> */}
                                </div>
                                <img src="Natu_Logo_.png" id="img-centrada" />
                                <label htmlFor="username">Correo de usuario</label>
                                <input type="text" id="username" className="form-control" placeholder="Email" />
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <a id="link2" href="reset">
                                    Olvide mi contraseña
                                </a>
                                <button
                                    type="button"
                                    id="btnLogin"
                                    className="btn-primary"
                                >
                                    Iniciar sesión
                                </button>
                                <a id="link2" href="register">
                                    ¿Aun no estoy registrado?
                                </a>
                            </form>
                        </div>
                </div>
            </div>
        </>
    );
}
