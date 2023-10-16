import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonarRoutingModule } from './donar-routing.module';
import { DonarPageComponent } from './pages/donar-page/donar-page.component';


@NgModule({
  declarations: [
    DonarPageComponent
  ],
  imports: [
    CommonModule,
    DonarRoutingModule
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  ]
=======
  ],
  exports:[DonarPageComponent],
  
>>>>>>> Stashed changes
=======
  ],
  exports:[DonarPageComponent],
  
>>>>>>> Stashed changes
})
export class DonarModule { }
