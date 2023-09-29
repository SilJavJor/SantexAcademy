import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
<<<<<<< Updated upstream
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
=======
import { InicioPageComponent } from './pages/inicio-page/InicioPageComponent';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    InicioPageComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
<<<<<<< Updated upstream
=======
  ],
  exports:[
    InicioPageComponent
>>>>>>> Stashed changes
  ]
})
export class InicioModule { }
