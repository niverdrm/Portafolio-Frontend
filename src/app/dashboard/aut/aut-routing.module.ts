import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { PinComponent } from 'src/app/pages/pin/pin.component';
import { AutComponent } from './aut.component';

const children: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pin', component: PinComponent, canActivate: [AuthGuard] },
];
const routes: Routes = [{ path: '', component: AutComponent, children }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutRoutingModule {}
