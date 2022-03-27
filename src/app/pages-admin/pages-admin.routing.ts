import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesAdminComponent } from './pages-admin.component';
import { HomePagesAdminComponent } from './home-pages-admin/home-pages-admin.component';
import { ProyectoAdmiComponent } from './proyecto-admi/proyecto-admi.component';

const routes: Routes = [
  {
    path: '',
    component: PagesAdminComponent,
    children: [
      {
        path: '',
        component: HomePagesAdminComponent,
        data: { titulo: 'Home' },
      },
      {
        path: 'proyecto',
        component: ProyectoAdmiComponent,
        data: { titulo: 'Proyecto' },
      },
      //   {
      //     path: 'grafica1',
      //     component: Grafica1Component,
      //     data: { titulo: 'Graficas #1' },
      //   },
      //   {
      //     path: 'account-settings',
      //     component: AccountSettingsComponent,
      //     data: { titulo: 'Accoutn-Sentiings' },
      //   },
      //   {
      //     path: 'promesas',
      //     component: PromesasComponent,
      //     data: { titulo: 'Promesas' },
      //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesAdminRoutingModule {}
