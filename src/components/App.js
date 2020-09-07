import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends React.Component{//nos da acesso a todas as propriedades em react

    render(){
        return(
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>//envolver numa div

        );
    }

}