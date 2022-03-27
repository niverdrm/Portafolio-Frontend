import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from 'src/app/pages/contacto/contacto.component';
import { ExperienciaComponent } from 'src/app/pages/experiencia/experiencia.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProyectoComponent } from 'src/app/pages/proyecto/proyecto.component';
import { SobreMiComponent } from 'src/app/pages/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from 'src/app/pages/tecnologias/tecnologias.component';
import { PublicComponent } from './public.component';

const children: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'tecnologia', component: TecnologiasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'proyectos', component: ProyectoComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
];

const routes: Routes = [{ path: '', component: PublicComponent, children }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
