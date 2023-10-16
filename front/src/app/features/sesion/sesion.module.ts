import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionRoutingModule } from './sesion-routing.module';
import { SesionPageComponent } from './pages/sesion-page/sesion-page.component';


@NgModule({
  declarations: [
    SesionPageComponent
  ],
  imports: [
    CommonModule,
    SesionRoutingModule
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  ]
=======
  ],
  exports:[SesionPageComponent],
>>>>>>> Stashed changes
=======
  ],
  exports:[SesionPageComponent],
>>>>>>> Stashed changes
})
export class SesionModule { }
