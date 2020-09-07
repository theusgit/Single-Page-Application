import React from 'react';


export default class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <div>
                    <img src="/img/logomarca.png" alt="Logomarca footer"></img>

                </div>
                <div>
                    Endereço <br/>
                    Telefone <br/>
                    Email <br/>
                    
                </div>
            </div>
        );
    }
}