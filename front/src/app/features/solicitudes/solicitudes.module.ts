import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { SolicitudesPageComponent } from './pages/solicitudes-page/solicitudes-page.component';


@NgModule({
  declarations: [
    SolicitudesPageComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
