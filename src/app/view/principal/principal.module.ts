import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MenuNavbarComponent } from "src/app/view/menu-navbar/menu-navbar.component";
import { ClientesModule } from "./clientes/clientes.module";
import { ClientesRoutingModule } from "./clientes/clientes.routing.module";
import { EstadiasModule } from "./estadias/estadias.module";
import { PrincipalComponent } from "./principal.component";
import { PrincipalRoutingModule } from "./principal.routing.module";
import { VeiculosModule } from "./veiculos/veiculos.module";

@NgModule({
    declarations: [
        MenuNavbarComponent,
        PrincipalComponent,
    ],
    imports: [
        CommonModule,
        PrincipalRoutingModule,
        RouterModule,
        
    ]
})

export class PrincipalModule {}