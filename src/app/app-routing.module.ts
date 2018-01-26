import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


import { DashboardComponent } from './dashboard/dashboard.component';
import { FormMesaComponent } from './form-mesa/form-mesa.component';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';

const routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'nueva-mesa', component: FormMesaComponent},
  {path: 'lista', component: ListarMesasComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
