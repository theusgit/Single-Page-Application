import React from 'react';//modulo
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';//modulo principal
import Contato from'./components/Contato';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App}></Route>
        <Route path="/contato" exact={true} component={Contato}></Route>


    </Switch>
    </BrowserRouter>
    ,
    document.getElementById("root") //tudo que for renderizado vai ser renderizado aqui
);