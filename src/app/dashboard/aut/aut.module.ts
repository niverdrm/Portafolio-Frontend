import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutRoutingModule } from './aut-routing.module';
import { AutComponent } from './aut.component';
import { PagesModule } from 'src/app/pages/pages.module';

@NgModule({
  declarations: [AutComponent],
  imports: [CommonModule, AutRoutingModule, PagesModule],
})
export class AutModule {}
