import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Cliente } from 'src/app/core/model/cliente';
import { Tipo } from 'src/app/core/model/tipo';
import { Veiculo } from 'src/app/core/model/veiculo';
import { ClientesService } from 'src/app/core/service/clientes.service';
import { TipoService } from 'src/app/core/service/tipo.service';
import { VeiculosService } from '../../../../core/service/veiculos.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  inscricao: Subscription = new Subscription;
  msg: String = '';
  veic: Veiculo = new Veiculo();

  clientes: Cliente[] = [];
  cliente: any;
  tipos: Tipo[] = [];

  formVeiculo = this.formBuilder.group(
    {
      placa: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      modelo: this.formBuilder.control('', [Validators.required]),
      cor: this.formBuilder.control('', [Validators.required]),
      tipo: this.formBuilder.control('', [Validators.required]),
      codCliente: this.formBuilder.control('', [Validators.required]),
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tiposService: TipoService,
    private router: Router,
    private clientesService: ClientesService,
    private veiculosService: VeiculosService,
  ) { }

  ngOnInit(): void {
    this.getClientes();
    this.getTipos();
  }

  cadastrar(): void{
    this.veic.placa = this.formVeiculo.value.placa;
    this.veic.modelo = this.formVeiculo.value.modelo;
    this.veic.cor = this.formVeiculo.value.cor;
    this.veic.tipo = this.formVeiculo.value.tipo;
    this.veic.cliente = this.formVeiculo.value.codCliente;

      this.veiculosService.cadastrar(this.veic).subscribe(msg =>{
        this.msg = msg;
      });
         
      this.formVeiculo.reset();
  }

  getClientes(){
    this.clientesService.getClientes().subscribe( cliente => {
      this.clientes = cliente;
    })
  }

  getTipos(){
    this.tiposService.getTipos().subscribe( tip => {
      this.tipos = tip;
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  cancelar(){
    this.router.navigate(['/principal/veiculos']);
  }

}
