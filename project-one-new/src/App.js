import React, { Fragment, Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header/Header';
import Tabela from './Tabela';
import ApiService from './ultils/ApiService';

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
        this.setState({ listao: [...this.state.listao, ...res.data] })
      });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Meu projeto</h1>
          <Tabela lista={this.state.listao} />
        </div>
      </Fragment>
    );
  }

}
export default App;
