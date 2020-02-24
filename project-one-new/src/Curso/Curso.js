import React, { Fragment, Component } from 'react';
import Header from '../Header/Header';
import ApiService from '../ApiService';
// import 'material-icons/iconfont/material-icons.scss';


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
                                <div class="card">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator" src={cursos.imagePath} />
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title activator grey-text text-darken-4">{cursos.titulo} <i class="material-icons right">more_vert</i></span>
                                        <p><a href="#">Ver mais</a></p>
                                    </div>
                                    <div class="card-reveal">
                                        <span class="card-title grey-text text-darken-4">{cursos.tagCurso}<i class="material-icons right">close</i></span>
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