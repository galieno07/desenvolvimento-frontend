import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  public email!: string;
  public senha!: string;
  public cpf!: string;
  public confirmar_senha!: string;
}
