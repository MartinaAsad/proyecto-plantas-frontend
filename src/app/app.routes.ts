import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { FormularioRegistroComponent } from '../components/formulario-registro/formulario-registro.component';
import { InfoInicioDashboardComponent } from '../components/info-inicio-dashboard/info-inicio-dashboard.component';
export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'registro', component: RegistroComponent},
    {path: 'formRegistro', component: FormularioRegistroComponent},
    {path: 'alertas', component: InfoInicioDashboardComponent}
];

