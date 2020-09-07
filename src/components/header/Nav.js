import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
                <AnchorLink href='#home'>Home</AnchorLink>
                    <AnchorLink href='#mapa'>Mapa</AnchorLink>
                    <AnchorLink href='#information'>Informações</AnchorLink>
                    <AnchorLink href='#contact'>Contato</AnchorLink>
            </div>
        );
    }
}