import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    NosotrosPageComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    AppRoutingModule
  ],
  exports:[NosotrosPageComponent],

})
export class NosotrosModule { }
