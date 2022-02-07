import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoEditarComponent } from './veiculo-editar/veiculo-editar.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculosComponent } from './veiculos.component';

const routes: Routes = [
  { path: '', component: VeiculosComponent },
  {
    path: 'cadastrar',
    component: VeiculoFormComponent,
  },
  {
    path: ':id/editar',
    component: VeiculoEditarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }