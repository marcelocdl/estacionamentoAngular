import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'veiculos', loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule) },
  { path: 'estadias', loadChildren: () => import('./estadias/estadias.module').then(m => m.EstadiasModule) },
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
