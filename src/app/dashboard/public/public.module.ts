import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { PublicComponent } from './public.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PagesModule,
    ReactiveFormsModule,
  ],
})
export class PublicModule {}
