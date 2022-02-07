import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Estadia } from 'src/app/core/model/estadia';
import { Veiculo } from 'src/app/core/model/veiculo';
import { EstadiasService } from 'src/app/core/service/estadias.service';
import { VeiculosService } from 'src/app/core/service/veiculos.service';

@Component({
  selector: 'app-estadia-editar',
  templateUrl: './estadia-editar.component.html',
  styleUrls: ['./estadia-editar.component.css']
})
export class EstadiaEditarComponent implements OnInit {
  
  msg: String = '';
  vaga: any;

  estadia: Estadia = new Estadia();
  id_estadia: number = 999;

  veiculo: Veiculo = new Veiculo();

  inscricao: Subscription = new Subscription;

  formEstadia = this.formBuilder.group(
    {
      id: this.formBuilder.control('', [Validators.required]),
      hrSaida: this.formBuilder.control('', [Validators.required])
    }
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estadiasService: EstadiasService,
    private veiculosService: VeiculosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void { 
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.id_estadia = id;

        this.getEstadiaById(id);

        if(this.estadia === null){
          this.estadia;
        }
      }
    );
  }

  salvar():void{
    this.estadia.hr_saida = this.formEstadia.value.hrSaida;

    this.estadiasService.saida(this.id_estadia, this.estadia).subscribe(msg =>{
      this.msg = msg;
    }); 
       
    this.formEstadia.reset();
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  getVeiculo(id: number){
    this.veiculosService.getVeiculoById(id).subscribe(veic => {
      this.veiculo = veic;
    })
  }

  getEstadiaById(id: number){
    this.estadiasService.getEstadiaById(id).subscribe(est => {
      this.estadia = est;
    })
  }

  cancelar(){
    this.router.navigate(['/principal/estadias']);
  }

}
