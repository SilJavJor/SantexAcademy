import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaneladmRoutingModule } from './paneladm-routing.module';
import { PaneladmPageComponent } from './pages/paneladm-page/paneladm-page.component';


@NgModule({
  declarations: [
    PaneladmPageComponent
  ],
  imports: [
    CommonModule,
    PaneladmRoutingModule
  ],
  exports:[PaneladmPageComponent],
})
export class PaneladmModule { }
