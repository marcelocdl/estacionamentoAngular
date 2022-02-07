import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosComponent } from './veiculos.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { RouterModule } from '@angular/router';
import { VeiculoEditarComponent } from './veiculo-editar/veiculo-editar.component';
import { VeiculosRoutingModule } from './veiculos.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VeiculosComponent,
    VeiculoFormComponent,
    VeiculoEditarComponent
  ],
  imports: [
    CommonModule, 
    VeiculosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class VeiculosModule { }