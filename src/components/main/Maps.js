import React from 'react';

export default class Maps extends React.Component {

    render(){
        return(
            <div className="mapsImovel" id="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58497.883559305425!2d-46.51590710310511!3d-23.600110623764184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67d20ba38873%3A0x5137128655a7611f!2sS%C3%A3o%20Mateus%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1597279101902!5m2!1spt-BR!2sbr" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            
            </div>
        );
    }
}