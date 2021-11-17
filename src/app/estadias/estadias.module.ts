import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { EstadiaDetalheComponent } from "./estadia-detalhe/estadia-detalhe.component";
import { EstadiaFormComponent } from "./estadia-form/estadia-form.component";
import { EstadiasRoutingModule } from "./estadias.routing.module";


@NgModule({
    declarations: [
        EstadiaFormComponent,
        EstadiaDetalheComponent
    ],
    imports: [
        CommonModule,
        EstadiasRoutingModule
    ]
})

export class EstadiasModule {}