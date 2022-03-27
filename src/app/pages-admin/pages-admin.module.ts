import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Modulo
import { SharedModule } from '../shared/shared.module';

//Component
import { PagesAdminComponent } from './pages-admin.component';
import { HomePagesAdminComponent } from './home-pages-admin/home-pages-admin.component';
import { ProyectoAdmiComponent } from './proyecto-admi/proyecto-admi.component';

@NgModule({
  declarations: [
    PagesAdminComponent,
    HomePagesAdminComponent,
    ProyectoAdmiComponent,
  ],
  exports: [
    PagesAdminComponent,
    HomePagesAdminComponent,
    ProyectoAdmiComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PagesAdminModule {}
