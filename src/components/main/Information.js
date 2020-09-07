import React from 'react';
import InformationItem from './InformationItem';



export default class Information extends React.Component {

    render(){
        return(
        <div>
            <div className="information">
                <ul>
                <li>2 quartos</li>
                <li>1 vaga de garagem</li>
                <li>1 banheiro</li>
                <li>Cozinha americana</li>
                <li>Ampla cozinha</li>
                </ul>
            </div>
            
            <div className="informationText" id="information">
                    Apartamento com dois quartos com piso em cerâmica, sala ampla, cozinha americana com piso e revestimento em cerâmica e bancada de granito, banho social com piso e revestido em cerâmica e área de serviço compartilhada bem arejada. Uma vaga de garagem demarcada e descoberta Portaria 24h. <br/>
                    Agende hoje mesmo uma visita e venha conhecer este imóvel. Preços poderão sofrer alterações sem aviso prévio, consulte condições com nosso departamento de locação.
            </div>
            <div className="vantagens">
                <InformationItem 
                image="like.png"               
                alt="Excelente imóvel"
                text="Apartamento com preço incrivel"
                value="600"
                />
                 <InformationItem 
                image="like.png"               
                alt="Excelente imóvel"
                text="Apartamento com preço incrivel"
                value="800"
                />
            
            
            
            
            
            </div>
        </div>
        );
    }
}