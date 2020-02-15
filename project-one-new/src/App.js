import React, { Fragment, Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Meu projeto</h1>
        </div>
      </Fragment>
    );
  }
}


export default App;
