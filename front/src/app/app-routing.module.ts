import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './features/inicio/pages/inicio-page/InicioPageComponent';
import { NosotrosPageComponent } from './features/nosotros/pages/nosotros-page/nosotros-page.component';
import { DonarPageComponent } from './features/donar/pages/donar-page/donar-page.component';
import { SolicitarPageComponent } from './features/solicitar/pages/solicitar-page/solicitar-page.component';
import { RegistroPageComponent } from './features/registro/pages/registro-page/registro-page.component';
import { AdmPageComponent } from './features/adm/pages/adm-page/adm-page.component';
import { SesionPageComponent } from './features/sesion/pages/sesion-page/sesion-page.component';
import { PaneladmPageComponent } from './features/paneladm/pages/paneladm-page/paneladm-page.component';
const routes: Routes = [
  
  { path :'**',component:InicioPageComponent},
  { path :'',component:InicioPageComponent},
  { path :'inicio',component:InicioPageComponent},
  {path:'nosotros',component:NosotrosPageComponent},
  {path:'donar',component:DonarPageComponent},
  {path:'solicitar',component:SolicitarPageComponent},
  {path:'adm',component:AdmPageComponent},
  {path:'registro',component:RegistroPageComponent},
  {path:'sesion',component:SesionPageComponent},
  {path:'panel',component:PaneladmPageComponent},
  


  
];

            


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
