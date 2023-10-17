import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';


@NgModule({
  declarations: [
    RegistroPageComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ],
  exports:[RegistroPageComponent],
})
export class RegistroModule { }
