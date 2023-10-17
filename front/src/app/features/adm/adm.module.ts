import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import { AdmPageComponent } from './pages/adm-page/adm-page.component';


@NgModule({
  declarations: [
    AdmPageComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule
  ],
  exports:[AdmPageComponent],
})
export class AdmModule { }
