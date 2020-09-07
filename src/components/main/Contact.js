import React from 'react';
import InputMask from "react-input-mask";
import {Alert} from 'react-bootstrap';

export default class Contact extends React.Component {

    render(){
        return(
            <div className="formulario" id="contact">
              
 
                <h1>Fale conosco</h1>
                <form name="form1" id="form1" method="post" action="/controllers/controllerForm.php"></form>
                <input type="nome" name="nome" id="nome" placeholder="Nome:"/>    
                <input  type="tel" name="telefone" id="telefone" placeholder="Telefone:"  
                mask = "(11)9999999"  maskChar = "  " />
                <input type="email" name="email" id="email" placeholder="Email:"/>    
                <textarea name="mensagem" id="mensagem" placeholder="Mensagem:"></textarea>
                <input type="submit" value="Enviar"/>    
            </div>
        );
    }
}