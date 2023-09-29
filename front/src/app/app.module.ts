import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './features/inicio/inicio.module';
import { NosotrosModule } from './features/nosotros/nosotros.module';
import { DonarModule } from './features/donar/donar.module'; 
import { SolicitarModule } from './features/solicitar/solicitar.module';
import { AdmModule } from './features/adm/adm.module'; 
import { PaneladmModule } from './features/paneladm/paneladm.module';
import { SesionModule } from './features/sesion/sesion.module';
import { RegistroModule } from './features/registro/registro.module';














@NgModule({
  declarations: [
    AppComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioModule,
    NosotrosModule,
    DonarModule,
    SolicitarModule,
    AdmModule,
    PaneladmModule,
    SesionModule,
    RegistroModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
