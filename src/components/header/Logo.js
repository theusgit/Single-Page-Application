import React from 'react';


export default class Logo extends React.Component {
    render(){
        return(
            <div className="logo">
                <picture>
                    <source media="(max-width: 768)" srcSet="/img/logomarca.png"></source>
                    <source media="(max-width: 769)" srcSet="/img/logomarcaS.png"></source>
                    <img src="/img/logomarca.png" alt="LogoMarca"/>
                </picture>

            </div>
            );
    }
}