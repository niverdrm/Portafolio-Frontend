import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { PagesAdminRoutingModule } from 'src/app/pages-admin/pages-admin.routing';
import { PagesAdminComponent } from '../../pages-admin/pages-admin.component';

import { PrivateComponent } from './private.component';

const children: Routes = [
  { path: '', component: PagesAdminComponent, canActivate: [AuthGuard] },
];
const routes: Routes = [{ path: '', component: PrivateComponent, children }];

@NgModule({
  imports: [RouterModule.forChild(routes), PagesAdminRoutingModule],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
