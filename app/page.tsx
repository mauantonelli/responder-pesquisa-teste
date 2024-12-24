import "./page.module.css"

const LoginPage = () => {


    return (<>
        <div className="row">
            <div className="col s12 center">
                <img src="./img/logo-neuroredes-header.png" alt="Neuroredes" className="img-responsive" />
            </div>
        </div>
        <div className="row">
            <div className="col s3"></div>
            <div className="col s6">
                <div className="login">
                    <h2 className="center-align">Pesquisas</h2>
                    <h4 className="center-align">Login</h4>
                    <form action="index.php" method="post">
                        <div className="login row">
                            <div className="input-field col s12">
                                <input type="text" id="cpf" name="cpf" className="validate" pattern="(([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})|([0-9]{11}))" value="" />
                                <label htmlFor="cpf">
                                    <i className="material-icons left">call_to_action</i>
                                    Digite seu CPF
                                </label>
                                <span className="helper-text" data-error="CPF inválido" data-success=""></span>
                            </div>
                            <div className="col s12 center-align">
                                <button className="waves-effect waves-light blue darken-4 btn" type="submit">
                                    <i className="material-icons left">person</i>Entrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col s3"></div>
        </div>

    </>

    );
};

export default LoginPage