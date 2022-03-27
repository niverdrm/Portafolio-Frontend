import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarAdmiComponent } from './navbar-admi/navbar-admi.component';
import { FooterAdmiComponent } from './footer-admi/footer-admi.component';

@NgModule({
  declarations: [
    NavbarAdmiComponent,
    SidebarComponent,
    MenuComponent,
    FooterAdmiComponent,
  ],
  exports: [
    NavbarAdmiComponent,
    SidebarComponent,
    MenuComponent,
    FooterAdmiComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
