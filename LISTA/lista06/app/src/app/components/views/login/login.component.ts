import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
[x: string]: any;
  public email: string = '';
  public passaword: string = '';

  login() {
    if (this.email ) {
      alert('Login feito com sucesso');

    }
    if(this.passaword == "123admin"){
      alert("Entrando")
    }
    else {
      alert('Preencha o email e a senha');
    }
  }
}
