import React, { Fragment, Component } from 'react';
import Header from '../Header/Header';
import ApiService from '../ApiService';

class Curso extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cursos: []
        }
    }
    componentDidMount() {
        ApiService.CursoListagem()
            .then(res => {
                this.setState({ cursos: [...this.state.cursos, ...res] })
            })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <div className="row">
                        <h5 className="blue-text text-darken-2">Cursos</h5>
                        {this.state.cursos.map(cursos => (
                            <div className="col s12 m4" key={cursos.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={cursos.imagePath} />
                                        <span className="card-title">{cursos.titulo}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{cursos.mensagem}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Curso;