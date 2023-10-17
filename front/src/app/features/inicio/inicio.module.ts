import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPageComponent } from './pages/inicio-page/InicioPageComponent';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    InicioPageComponent
  ],
  imports: [
    CommonModule,
   
    AppRoutingModule
    
  ],
  exports:[
    InicioPageComponent
  ]
})
export class InicioModule { }
