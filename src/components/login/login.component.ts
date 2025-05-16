import { Component } from '@angular/core';

@Component({
  selector: 'app-login', //SI LO QUIERO MOSTRAR, USAR ESTO,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: string = 'ejemplo@gmail.com';
clave : string = 'prueba1234'

}
