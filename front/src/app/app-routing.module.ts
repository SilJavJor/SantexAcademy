import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './features/inicio/pages/inicio-page/inicio-page.component';
import { NosotrosPageComponent  } from './features/nosotros/pages/nosotros-page/nosotros-page.component';
import { DonarPageComponent  } from './features/donar/pages/donar-page/donar-page.component';

const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./features/inicio/pages/inicio-page/inicio-page.component')
    .then(m => m.inicioModule )
    },

    {
      path: 'nosotros',
      loadChildren: () => import('./features/nosotros/pages/nosotros-page/nosotros-page.component')
      .then(m => m.nosotrosModule )
      },

      {
        path: 'donar',
        loadChildren: () => import('./features/donar/pages/donar-page/donar-page.component')
        .then(m => m.donarModule )
        },

        {
          path: 'solicitar',
          loadChildren: () => import('./features/solicitar/pages/solicitar-page/solicitar-page.component')
          .then(m => m.solicitarModule )
          },

          
            
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
