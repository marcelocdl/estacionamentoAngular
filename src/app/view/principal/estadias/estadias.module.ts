import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EstadiaEditarComponent } from "./estadia-editar/estadia-editar.component";

import { EstadiaFormComponent } from "./estadia-form/estadia-form.component";
import { EstadiasComponent } from "./estadias.component";
import { EstadiasRoutingModule } from "./estadias.routing.module";


@NgModule({
    declarations: [
        EstadiasComponent,
        EstadiaFormComponent,
        EstadiaEditarComponent
    ],
    imports: [
        CommonModule,
        EstadiasRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})

export class EstadiasModule {}