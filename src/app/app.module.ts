import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

import { EstadiasComponent } from './estadias/estadias.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ClientesModule } from './clientes/clientes.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { EstadiasModule } from './estadias/estadias.module';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    VeiculosComponent,
    EstadiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    VeiculosModule,
    EstadiasModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
