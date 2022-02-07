import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClienteEditarComponent } from "./cliente-editar/cliente-editar.component";

import { ClienteFormComponent } from "./cliente-form/cliente-form.component";
import { ClientesComponent } from "./clientes.component";
import { ClientesRoutingModule } from "./clientes.routing.module";

@NgModule({
    declarations: [
        ClientesComponent,
        ClienteFormComponent,
        ClienteEditarComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        ClientesRoutingModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})

export class ClientesModule {}