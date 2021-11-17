import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteDetalheComponent } from "./cliente-detalhe/cliente-detalhe.component";
import { ClienteFormComponent } from "./cliente-form/cliente-form.component";

import { ClientesComponent } from "./clientes.component";

const routes: Routes = [
  {
    path: 'clientes', component: ClientesComponent,
    children: [
      { path: 'cadastrar', component:  ClienteFormComponent},
      { path: ':id', component: ClienteDetalheComponent },
      { path: ':id/editar', component: ClienteFormComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }