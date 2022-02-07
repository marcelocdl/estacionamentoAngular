import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Estadia } from 'src/app/core/model/estadia';
import { Veiculo } from 'src/app/core/model/veiculo';
import { VeiculosService } from 'src/app/core/service/veiculos.service';
import { EstadiasService } from '../../../../core/service/estadias.service';

@Component({
  selector: 'app-estadia-form',
  templateUrl: './estadia-form.component.html',
  styleUrls: ['./estadia-form.component.css']
})
export class EstadiaFormComponent implements OnInit {

  veiculos: Veiculo[] = [];
  vaga: any;
  msg: String = '';
  estadia: Estadia = new Estadia();
  inscricao: Subscription = new Subscription;
  
  formEstadia = this.formBuilder.group(
    {
      hrEntrada: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      codVeiculo: this.formBuilder.control('', [Validators.required]),
      vaga: this.formBuilder.control('', [Validators.required])
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private estadiasService: EstadiasService,
    private veiculosService: VeiculosService,
  ) { }

  ngOnInit(): void {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.getEstadiaById(id);
        this.vaga = this.estadia.vaga;

        if(this.estadia === null){
          this.estadia;
        }
      }
    ); */
    this.getVeiculos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.vaga = queryParams['vaga'];
      }
    );

  }

  cadastrar(): void{
    this.estadia.hr_entrada = this.formEstadia.value.hrEntrada;
    this.estadia.veiculo = this.formEstadia.value.codVeiculo;
    this.estadia.vaga = this.formEstadia.value.vaga;

    this.estadiasService.cadastrar(this.estadia).subscribe( msg => {
      this.msg = msg;
    });

    this.formEstadia.reset();
  }

  getVeiculos(){
    this.veiculosService.getVeiculos().subscribe(veic => {
      this.veiculos = veic;
    })
  }

  getEstadiaById(id: number){
    this.estadiasService.getEstadiaById(id).subscribe(est => {
      this.estadia = est;
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  cancelar(){
    this.router.navigate(['../../estadias'], {relativeTo: this.route} );
  }

}
