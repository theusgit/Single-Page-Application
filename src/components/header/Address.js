import React from 'react';


export default class Address extends React.Component {
    render(){
        return(
            <div className="address">
                <img src="/img/logoWhats.png" alt="Logo WhatsApp"></img><strong> (xx)0000-0000</strong><br></br>
                Endereço <br/>
                <strong>R$ 700,00</strong>
            </div>
        );
    }
}