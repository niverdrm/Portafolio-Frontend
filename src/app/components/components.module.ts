import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture/picture.component';
import { ToolComponent } from './tool/tool.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ItemServiceComponent } from './item-service/item-service.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { ExperienciaListComponent } from './experiencia-list/experiencia-list.component';
import { ExperienciaItemComponent } from './experiencia-item/experiencia-item.component';
import { ItemProyectoComponent } from './item-proyecto/item-proyecto.component';
import { ProyectoListComponent } from './proyecto-list/proyecto-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    PictureComponent,
    ToolComponent,
    CarouselComponent,
    ItemServiceComponent,
    FooterComponent,
    ExperienciaListComponent,
    ExperienciaItemComponent,
    ItemProyectoComponent,
    ProyectoListComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    NavbarComponent,
    PictureComponent,
    ToolComponent,
    CarouselComponent,
    ItemServiceComponent,
    FooterComponent,
    ExperienciaListComponent,
    ExperienciaItemComponent,
    ItemProyectoComponent,
    ProyectoListComponent,
  ],
})
export class ComponentsModule {}
