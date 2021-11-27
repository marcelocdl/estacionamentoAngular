import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { VeiculoFormComponent } from "./veiculo-form/veiculo-form.component";
import { VeiculosRoutingModule } from "./veiculos.routing.module";

@NgModule({
    declarations: [
        VeiculoFormComponent,
    ],
    imports: [
        CommonModule,
        VeiculosRoutingModule,
        FormsModule
    ]
})

export class VeiculosModule {}