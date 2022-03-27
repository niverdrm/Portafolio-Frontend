import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesAdminRoutingModule } from './pages-admin/pages-admin.routing';

const routes: Routes = [
  {
    path: 'niver',
    loadChildren: () =>
      import('./dashboard/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./dashboard/private/private.module').then((m) => m.PrivateModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./dashboard/aut/aut.module').then((m) => m.AutModule),
  },
  {
    path: '**',
    redirectTo: 'niver',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
