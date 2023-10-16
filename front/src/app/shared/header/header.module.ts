import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';






import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { InicioModule } from "../../features/inicio/inicio.module";





@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InicioModule
    ]
})
export class AppModule {
}

