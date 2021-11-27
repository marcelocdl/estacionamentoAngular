import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { EstadiaFormComponent } from "./estadia-form/estadia-form.component";
import { EstadiasRoutingModule } from "./estadias.routing.module";


@NgModule({
    declarations: [
        EstadiaFormComponent,
    ],
    imports: [
        CommonModule,
        EstadiasRoutingModule,
        FormsModule
    ]
})

export class EstadiasModule {}