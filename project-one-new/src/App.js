import React, { Fragment, Component } from 'react';


import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header/Header';
import Tabela from './Tabela';

class App extends Component {

  listao = [
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    }
  ];

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Meu projeto</h1>
          <Tabela lista={this.listao} />
        </div>
      </Fragment>
    );
  }

}
export default App;
