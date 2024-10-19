import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { LoginComponent } from './components/views/login/login.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  { path: "Cadastrar", component: CadastrarComponent},
  {path: "Login", component: LoginComponent},
  {path: "Home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
