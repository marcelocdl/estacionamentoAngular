
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { ClienteEditarComponent } from "./cliente-editar/cliente-editar.component";

import { ClienteFormComponent } from "./cliente-form/cliente-form.component";
import { ClientesComponent } from "./clientes.component";

const routes: Routes = [
  { path: '', component: ClientesComponent },
  {
    path: 'cadastrar',
    component: ClienteFormComponent,
  },
  {
    path: ':id/editar',
    component: ClienteEditarComponent,
  }
  /*{
    path:'',
    component: ClientesComponent,
    children: [
      {
        path: 'cadastrar',
        component: ClienteFormComponent,
      },
      {
        path: ':id/editar',
        component: ClienteFormComponent,
      }
    ]
  }*/
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ClientesRoutingModule { }