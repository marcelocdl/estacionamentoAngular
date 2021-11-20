import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetalheComponent } from './clientes/cliente-detalhe/cliente-detalhe.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { HomeComponent } from './home/home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoDetalheComponent } from './veiculos/veiculo-detalhe/veiculo-detalhe.component';
import { VeiculoFormComponent } from './veiculos/veiculo-form/veiculo-form.component';
import { EstadiasComponent } from './estadias/estadias.component';
import { EstadiaDetalheComponent } from './estadias/estadia-detalhe/estadia-detalhe.component';
import { EstadiaFormComponent } from './estadias/estadia-form/estadia-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ClientesModule } from './clientes/clientes.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { EstadiasModule } from './estadias/estadias.module';

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
