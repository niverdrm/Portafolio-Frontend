import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ComponentsModule } from '../components/components.module';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PinComponent } from './pin/pin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    TecnologiasComponent,
    ContactoComponent,
    ExperienciaComponent,
    ProyectoComponent,
    SobreMiComponent,
    PinComponent,
    LoginComponent,
  ],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, FormsModule],
  exports: [ComponentsModule],
})
export class PagesModule {}
