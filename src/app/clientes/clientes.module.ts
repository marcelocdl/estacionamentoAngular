import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ClienteFormComponent } from "./cliente-form/cliente-form.component";
import { ClientesRoutingModule } from "./clientes.routing.module";

@NgModule({
    declarations: [
        ClienteFormComponent,
    ],
    imports: [
        CommonModule,
        ClientesRoutingModule,
        FormsModule
    ]
})

export class ClientesModule {}