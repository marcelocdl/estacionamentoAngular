import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EstadiaDetalheComponent } from "./estadia-detalhe/estadia-detalhe.component";
import { EstadiaFormComponent } from "./estadia-form/estadia-form.component";
import { EstadiasComponent } from "./estadias.component";


const routes: Routes = [
  {
    path: 'estadias', component: EstadiasComponent,
    children: [
      { path: 'cadastrar', component:  EstadiaFormComponent },
      { path: ':id', component: EstadiaDetalheComponent },
      { path: ':id/editar', component: EstadiaFormComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadiasRoutingModule { }