import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { FormularioRegistroComponent } from '../components/formulario-registro/formulario-registro.component';
import { InfoInicioDashboardComponent } from '../components/info-inicio-dashboard/info-inicio-dashboard.component';
import { MenuNavegacionComponent } from '../components/menu-navegacion/menu-navegacion.component';
import { PanelUsuarioComponent } from '../components/panel-usuario/panel-usuario.component';
import { TablaPlantasComponent } from '../components/tabla-plantas/tabla-plantas.component';
import { CrearPlantaComponent } from '../components/crear-planta/crear-planta.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'registro', component: RegistroComponent},
    {path: 'formRegistro', component: FormularioRegistroComponent},
    {path: 'alertas', component: InfoInicioDashboardComponent},
    {path: 'menu', component: MenuNavegacionComponent},
    {path: 'panel', component: PanelUsuarioComponent},
    {path: 'tabla', component: TablaPlantasComponent},
    {path:'crearPlanta', component: CrearPlantaComponent}

];

