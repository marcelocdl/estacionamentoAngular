import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EstadiaFormComponent } from "./estadia-form/estadia-form.component";
import { EstadiasComponent } from "./estadias.component";


const routes: Routes = [
  { path: '', component: EstadiasComponent },
  {
    path: 'cadastrar',
    component: EstadiaFormComponent,
  },
  {
    path: ':id/editar',
    component: EstadiaFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadiasRoutingModule { }