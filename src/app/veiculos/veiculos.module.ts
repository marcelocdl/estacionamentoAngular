import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VeiculoDetalheComponent } from "./veiculo-detalhe/veiculo-detalhe.component";
import { VeiculoFormComponent } from "./veiculo-form/veiculo-form.component";
import { VeiculosRoutingModule } from "./veiculos.routing.module";

@NgModule({
    declarations: [
        VeiculoFormComponent,
        VeiculoDetalheComponent
    ],
    imports: [
        CommonModule,
        VeiculosRoutingModule
    ]
})

export class VeiculosModule {}