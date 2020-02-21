import React, { Fragment, Component } from 'react';
import Header from '../Header/Header';
import ApiService from '../ApiService';

class Sobre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sobre: []
        }
    }
    componentDidMount() {
        ApiService.SobreListagem()
            .then(res => {
                this.setState({ sobre: [...this.state.sobre, ...res] })
            })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    {this.state.sobre.map(sobre => (
                        <div key={sobre.id}>
                            <img src={sobre.imagePath} />
                            <h3>{sobre.titulo}</h3>
                            <p>{sobre.mensagem}</p>

                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }

}
export default Sobre;