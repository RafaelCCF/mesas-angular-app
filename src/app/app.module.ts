import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormMesaComponent } from './form-mesa/form-mesa.component';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestTestService} from './rest-test.service';


@NgModule({
  declarations: [
    AppComponent,
    FormMesaComponent,
    ListarMesasComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
