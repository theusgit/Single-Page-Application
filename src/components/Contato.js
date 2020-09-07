import React from 'react';
import Header from './Header';
import Contact from './main/Contact';

export default class Contato extends React.Component{//nos da acesso a todas as propriedades em react

    render(){
        return(
            <div>
                <Header/>
                <Contact/>
            </div>//envolver numa div

        );
    }

}