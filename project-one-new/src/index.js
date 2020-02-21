import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Sobre from './Sobre/Sobre';
import NotFound from './NotFound/NotFound';
import Curso from './Curso/Curso';
import Cadastro from './Cadastro/Cadastro';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/sobre' component={Sobre} />
            <Route path='/curso' component={Curso} />
            <Route path='/cadastro' component={Cadastro} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();