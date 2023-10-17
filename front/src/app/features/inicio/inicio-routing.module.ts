import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/InicioPageComponent';
import { NosotrosPageComponent } from '../nosotros/pages/nosotros-page/nosotros-page.component';
import { DonarPageComponent } from '../donar/pages/donar-page/donar-page.component';
import { SolicitarPageComponent } from '../solicitar/pages/solicitar-page/solicitar-page.component';
import { AdmPageComponent } from '../adm/pages/adm-page/adm-page.component';
import { RegistroPageComponent } from '../registro/pages/registro-page/registro-page.component';
import { SesionPageComponent } from '../sesion/pages/sesion-page/sesion-page.component';
import { PaneladmPageComponent } from '../paneladm/pages/paneladm-page/paneladm-page.component';

const routes: Routes = [
  
  


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
