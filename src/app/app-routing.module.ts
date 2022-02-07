import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/service/auth-guard.service';
import { LoginComponent } from './view/login/login.component';
import { PrincipalComponent } from './view/principal/principal.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  {
    path: 'principal', 
    canActivate: [AuthGuardService],
    loadChildren: () => import('./view/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
