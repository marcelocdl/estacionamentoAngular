import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/core/service/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PrincipalComponent } from "./principal.component";
import { VeiculosComponent } from "./veiculos/veiculos.component";

const routes: Routes = [{
    path: '',
    component: PrincipalComponent,
    children: [
        {
            path: 'home',
            canActivate: [AuthGuardService],
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        },
        {
            path: 'clientes',
            canActivate: [AuthGuardService],
            loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
        },
        {
            path: 'veiculos',
            canActivate: [AuthGuardService],
            loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule),
        },
        {
            path: 'estadias',
            canActivate: [AuthGuardService],
            loadChildren: () => import('./estadias/estadias.module').then(m => m.EstadiasModule),
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PrincipalRoutingModule {}