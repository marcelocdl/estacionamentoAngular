import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VeiculoDetalheComponent } from "./veiculo-detalhe/veiculo-detalhe.component";
import { VeiculoFormComponent } from "./veiculo-form/veiculo-form.component";
import { VeiculosComponent } from "./veiculos.component";


const routes: Routes = [
  {
    path: 'veiculos', component: VeiculosComponent,
    children: [
      { path: 'cadastrar', component:  VeiculosComponent},
      { path: ':id', component: VeiculoDetalheComponent },
      { path: ':id/editar', component: VeiculoFormComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }