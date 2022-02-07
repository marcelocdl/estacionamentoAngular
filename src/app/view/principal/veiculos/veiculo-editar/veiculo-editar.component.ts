import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Cliente } from 'src/app/core/model/cliente';
import { Tipo } from 'src/app/core/model/tipo';
import { Veiculo } from 'src/app/core/model/veiculo';
import { ClientesService } from 'src/app/core/service/clientes.service';
import { TipoService } from 'src/app/core/service/tipo.service';
import { VeiculosService } from 'src/app/core/service/veiculos.service';

@Component({
  selector: 'app-veiculo-editar',
  templateUrl: './veiculo-editar.component.html',
  styleUrls: ['./veiculo-editar.component.css']
})
export class VeiculoEditarComponent implements OnInit {

  inscricao: Subscription = new Subscription;
  msg: String = '';
  veiculo: Veiculo = new Veiculo();
  id_veiculo: number = 0;

  clientes: Cliente[] = [];
  //cliente: any; 
  tipos: Tipo[] = [];

  formVeiculo = this.formBuilder.group(
    {
      id: this.formBuilder.control('', [Validators.required]),
      placa: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      cor: this.formBuilder.control('', [Validators.required]),
      modelo: this.formBuilder.control('', [Validators.required]),
      id_tipo: this.formBuilder.control('', [Validators.required]),
      cod_cliente: this.formBuilder.control('', [Validators.required]),
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private veiculosService: VeiculosService,
    private clientesService: ClientesService,
    private tiposService: TipoService,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.id_veiculo = id;

        this.getClientes();
        this.getTipos();
        this.getVeiculoById(id);

        if(this.veiculo === null){
          this.veiculo;  
        }
      }
    );
  }

  getClientes(){
    this.clientesService.getClientes().subscribe( cliente => {
      this.clientes = cliente;
    })
  }

  getVeiculoById(id: number){
    this.veiculosService.getVeiculoById(id).subscribe(veic => {
      this.veiculo = veic;
    })
  }

  getTipos(){
    this.tiposService.getTipos().subscribe( tip => {
      this.tipos = tip;
    })
  }

  salvar(): void{
    this.veiculo.tipo = this.formVeiculo.value.id_tipo;
    this.veiculo.cliente = this.formVeiculo.value.cod_cliente;
    this.veiculo.placa = this.formVeiculo.value.placa;
    this.veiculo.cor = this.formVeiculo.value.cor;
    this.veiculo.modelo = this.formVeiculo.value.modelo;
    

    this.veiculosService.editar(this.id_veiculo, this.veiculo).subscribe(msg =>{
      this.msg = msg;
    }); 
       
    this.formVeiculo.reset();

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  cancelar(){
    this.router.navigate(['/principal/veiculos']);
  }

}
