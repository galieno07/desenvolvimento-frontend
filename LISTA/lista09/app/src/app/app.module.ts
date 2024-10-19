import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/views/login/login.component';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { HomeComponent } from './components/views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CadastrarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
