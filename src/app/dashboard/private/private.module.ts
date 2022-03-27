import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { PrivateComponent } from './private.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PagesAdminModule } from 'src/app/pages-admin/pages-admin.module';

@NgModule({
  declarations: [PrivateComponent],
  exports: [PrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PagesModule,
    ComponentsModule,
    PagesAdminModule,
  ],
})
export class PrivateModule {}
