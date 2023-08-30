import { LitElement, html } from "lit-element";
import styleScss from './login-formStyle' 

export class LoginForm extends LitElement {
    static get styles() {
        return [styleScss];
    }
    render(){
        return html`<body>
        <div class="form-login">
        <form class="login">
          <div class="space-title">
            <h1 class="title-login">PUMAS DC</h1>
          </div>
          <div class="center">
            <input type="text" placeholder="Usuario" class="input-login">
          </div>
          <div class="center">
            <input type="password" placeholder="Contraseña" class="input-login">
          </div>
          <div class="center">
            <button type="menu" class="button-login">
              <a href="principal.html" class="a-button">INGRESAR</a>
            </button>
          </div>
          <div class="center">
            <a class="forgot-pass" href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
                    </body>`
    }
}

customElements.define('login-form', LoginForm);