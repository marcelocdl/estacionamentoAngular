import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClienteDetalheComponent } from "./cliente-detalhe/cliente-detalhe.component";
import { ClienteFormComponent } from "./cliente-form/cliente-form.component";
import { ClientesRoutingModule } from "./clientes.routing.module";

@NgModule({
    declarations: [
        ClienteFormComponent,
        ClienteDetalheComponent
    ],
    imports: [
        CommonModule,
        ClientesRoutingModule
    ]
})

export class ClientesModule {}