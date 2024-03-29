import "./Login.css";

export default function Login() {
    return (
        <>

                    <div className="login">
                        <div className="background">
                            <div className="shape"></div>
                            <div className="shape"></div>
                        </div>
                        <div > {/* Agrega un contenedor de Bootstrap */}
                            <div className="row">
                                <div className="col-md-6 offset-md-3"> {/* Coloca el formulario en una columna centrada */}
                                    <form>
                                        <div className="logo">
                                            {/* <h1><a href="index.html">Gestore</a></h1> */}
                                            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
                                        </div>
                                        <img src="logo.png" className="img-centrada" />
                                        <label htmlFor="username">Correo de usuario</label>
                                        <input type="text" className="lgn form-control" placeholder="Email" id="username" />
                                        <label htmlFor="password">Contraseña</label>
                                        <input
                                            type="password"
                                            className="lgn form-control"
                                            placeholder="Password"
                                            id="password"
                                        />
                                        <a className="link2" href="Reset_password.html">
                                            Olvide mi contraseña
                                        </a>
                                        <input
                                            type="button"
                                            id="btnLogin"
                                            className="btn btn-primary"
                                            value="Iniciar sesión"
                                        />
                                        <a className="link" href="registros.html">
                                            ¿Aun no estoy registrado?
                                        </a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}