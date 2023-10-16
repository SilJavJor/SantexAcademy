import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
<<<<<<< Updated upstream
=======
import { AppRoutingModule } from 'src/app/app-routing.module';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    NosotrosPageComponent
  ],
  imports: [
    CommonModule,
<<<<<<< Updated upstream
    NosotrosRoutingModule
<<<<<<< Updated upstream
  ]
=======
  ],
  exports:[NosotrosPageComponent],

>>>>>>> Stashed changes
=======
    NosotrosRoutingModule,
    AppRoutingModule
  ],
  exports:[NosotrosPageComponent],

>>>>>>> Stashed changes
})
export class NosotrosModule { }
