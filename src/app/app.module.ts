import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//materials
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { AdminMatsComponent } from './components/admin-mats/admin-mats.component';
import { InMovsComponent } from './components/in-movs/in-movs.component';
import { InCalidadComponent } from './components/in-calidad/in-calidad.component';
import { AdminTivasComponent } from './components/admin-tivas/admin-tivas.component';
import { AdminTivas2Component } from './components/admin-tivas2/admin-tivas2.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminMatsComponent,
    InMovsComponent,
    InCalidadComponent,
    AdminTivasComponent,
    AdminTivas2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
