import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegistroComponent } from '../components/registro/registro.component';
export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'registro', component: RegistroComponent}
];

