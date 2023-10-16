import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
=======
import { InicioPageComponent } from './pages/inicio-page/InicioPageComponent';
>>>>>>> Stashed changes
=======
import { InicioPageComponent } from './pages/inicio-page/InicioPageComponent';
import { AppRoutingModule } from 'src/app/app-routing.module';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    InicioPageComponent
  ],
  imports: [
    CommonModule,
<<<<<<< Updated upstream
    InicioRoutingModule
<<<<<<< Updated upstream
=======
  ],
  exports:[
    InicioPageComponent
>>>>>>> Stashed changes
=======
   
    AppRoutingModule
    
  ],
  exports:[
    InicioPageComponent
>>>>>>> Stashed changes
  ]
})
export class InicioModule { }
