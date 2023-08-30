import { LitElement, html } from "lit-element";
import styleScss from './SecondFormStyle' 

export class SecondForm extends LitElement {
    static get styles() {
        return [styleScss];
    }
    render(){
        return html`<header> 
        <header class="xd"> 
            <div class="logo"><img src="img/logo.jpeg" alt="Imagen"></div> 
            <h1>usuarios</h1> 
        </header> 
         
    </header> 
 
    <div class="gray-box">
        <ul class="list">
            <li><img src="img/balon.png" alt="Icono 1">Home</li>
            <li><img src="img/balon.png" alt="Icono 2">Presidencia</li>
            <li><img src="img/balon.png" alt="Icono 3">Presidencia</li>
            <li><img src="img/balon.png" alt="Icono 4">Vice-presidencia</li>
            <li><img src="img/balon.png" alt="Icono 5">Secretaria</li>
            <li><img src="img/balon.png" alt="Icono 6">Tesoreria</li>
            <li><img src="img/balon.png" alt="Icono 7">Revisoria fiscal</li>
            <li><img src="img/balon.png" alt="Icono 8">Lista afiliados</li>
            <li><img src="img/balon.png" alt="Icono 9">Lista jugadores</li>
            <li><img src="img/balon.png" alt="Icono 10">Lista coach's</li>
        </ul>
        
    </div>
        <div class="modules"> 
            <div class="module"> 
                <div class="module-content"> 
                    <h2>Actas</h2> 
                    <img src="img/actas.jpeg" alt="actas"> 
                </div> 
                <button><a href="" class="a">Gestionar</a></button> 
            </div> 
 
            <div class="module"> 
                <div class="module-content"> 
                    <h2>Certificados</h2> 
                    <img src="img/certificados.jpeg" alt="certificados"> 
                </div> 
                <button><a href="" class="a">Gestionar</a></button> 
            </div> 
 
            <div class="module"> 
                <div class="module-content"> 
                    <h2>Reuniones</h2> 
                    <img src="img/reunion.jpeg" alt="reuniones"> 
                </div> 
                <button><a href="" class="a">Gestionar</a></button> 
            </div> 
            <div class="module"> 
                <div class="module-content"> 
                    <h2>Asistencia</h2> 
                    <img src="img/asistenia.png" alt="Asistencia"> 
                </div> 
                <button><a href="" class="a">Gestionar</a></button> 
            </div> 
 
            <div class="module"> 
                <div class="module-content"> 
                    <h2>Comunicacion</h2> 
                    <img src="img/comunicacion.jpeg" alt="comunicacion"> 
                </div> 
                <button><a href="" class="a">Gestionar</a></button> 
            </div> 
 
            <div class="module"> 
                <div class="module-content"> 
                    <h2>Estado de cuenta</h2> 
                    <img src="img/cuenta.jpeg" alt="Estado de cuenta"> 
                </div> 
                <button><a href="" class="a">Gestionar</a></button> 
            </div> 
        </div> 
    </div>`
    }
}

customElements.define('second-form', SecondForm);

