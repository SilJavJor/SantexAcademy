import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from '../features/inicio/pages/inicio-page/InicioPageComponent';
import { InicioModule } from '../features/inicio/inicio.module';
import { NosotrosModule } from '../features/nosotros/nosotros.module';
import { DonarModule } from '../features/donar/donar.module';
import { SolicitarModule } from '../features/solicitar/solicitar.module';
import { AdmModule } from '../features/adm/adm.module';
import { SesionModule } from '../features/sesion/sesion.module';
import { RegistroModule } from '../features/registro/registro.module';
import { PaneladmModule } from '../features/paneladm/paneladm.module';
import { NosotrosPageComponent } from '../features/nosotros/pages/nosotros-page/nosotros-page.component';
import { DonarPageComponent } from '../features/donar/pages/donar-page/donar-page.component';
import { SolicitarPageComponent } from '../features/solicitar/pages/solicitar-page/solicitar-page.component';
import { AdmPageComponent } from '../features/adm/pages/adm-page/adm-page.component';
import { SesionPageComponent } from '../features/sesion/pages/sesion-page/sesion-page.component';
import { RegistroPageComponent } from '../features/registro/pages/registro-page/registro-page.component';
import { PaneladmPageComponent } from '../features/paneladm/pages/paneladm-page/paneladm-page.component';
import { HeaderPageComponent } from './header/pages/header-page/header-page.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioModule,
    NosotrosModule,
    DonarModule,
    SolicitarModule,
    AdmModule,
    SesionModule,
    RegistroModule,
    PaneladmModule,
  
  ],
  exports:[
     
     InicioPageComponent,
     NosotrosPageComponent,
     DonarPageComponent,
     SolicitarPageComponent,
     AdmPageComponent,
     SesionPageComponent,
     RegistroPageComponent,
     PaneladmPageComponent
  ],
})
export class SharedModule { }
