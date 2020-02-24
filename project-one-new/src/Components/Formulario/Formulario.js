import React, { Fragment, Component } from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <h6 className="">Cadastro de listagem</h6>
                    <form>
                        <div className="row">
                            <div className="input-field col s4">
                                <label className="input-field" htmlFor="nome">Nome</label>
                                <input
                                    className="validate"
                                    id="nome"
                                    type="text"
                                    name="nome"
                                />
                            </div>
                            <div className="input-field col s4">
                                <label className="input-field" htmlFor="Curso">Curso</label>
                                <input
                                    className="validate"
                                    id="Curso"
                                    type="text"
                                    name="Curso"
                                />
                            </div>
                            <div className="input-field col s4">
                                <label className="input-field" htmlFor="preco">Preço</label>
                                <input
                                    className="validate"
                                    id="preco"
                                    type="text"
                                    name="preco"
                                />
                            </div>
                        </div>
                        <div>
                            <button className="waves-effect waves-light indigo lighten-2 btn" type="button">Salvar</button>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default Formulario;