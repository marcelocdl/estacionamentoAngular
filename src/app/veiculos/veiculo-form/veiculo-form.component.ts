import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  veiculo: any = {};
  inscricao: Subscription = new Subscription;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veiculosService: VeiculosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.veiculo = this.veiculosService.getVeiculoById(id);

        if(this.veiculo === null){
          this.veiculo = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;

  }

  cancelar(){
    this.router.navigate(['/veiculos']);
  }

}
