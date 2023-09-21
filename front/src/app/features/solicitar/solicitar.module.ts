import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitarRoutingModule } from './solicitar-routing.module';
import { SolicitarPageComponent } from './pages/solicitar-page/solicitar-page.component';


@NgModule({
  declarations: [
    SolicitarPageComponent
  ],
  imports: [
    CommonModule,
    SolicitarRoutingModule
  ]
})
export class SolicitarModule { }
