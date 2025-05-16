import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from '../components/registro/registro.component';
import { LoginComponent } from '../components/login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[RegistroComponent, LoginComponent]
})
export class AppComponent {
  title = 'plantas';
}

//ACA VA A ESTAR LA LOGICA
