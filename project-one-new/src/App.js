import React, { Fragment, Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header/Header';
import Tabela from './Tabela';
import ApiService from './ApiService';
import PopUp from './Utils/PoupUp';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listao: []
    };
  }
  componentDidMount() {
    ApiService.ListagemGeral()
      .then(res => {
        this.setState({ listao: [...this.state.listao, ...res] })
        PopUp.exibeMensagem('success', 'Listagem carrecada com sucesso');
      })
      .catch(err => {
        PopUp.exibeMensagem(
          "error",
          "Error na comunicação na API ao tentar listar os lista"
        )
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h4>Meu projeto</h4>
          <Tabela lista={this.state.listao} />
        </div>
      </Fragment>
    );
  }

}
export default App;
