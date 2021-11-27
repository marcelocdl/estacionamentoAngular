import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VeiculoFormComponent } from "./veiculo-form/veiculo-form.component";
import { VeiculosComponent } from "./veiculos.component";

const routes: Routes = [
  { path: '', component: VeiculosComponent },  
  {
    path: 'cadastrar',
    component: VeiculoFormComponent,
  },   
  {
    path: ':id/editar',
    component: VeiculoFormComponent,
  }
  /*{
    path: 'veiculos', component: VeiculosComponent,
    children: [
      { path: 'cadastrar', component:  VeiculosComponent},
      { path: ':id', component: VeiculoDetalheComponent },
      { path: ':id/editar', component: VeiculoFormComponent }
    ]
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }