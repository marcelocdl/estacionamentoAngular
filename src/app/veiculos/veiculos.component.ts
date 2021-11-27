import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VeiculosService } from './veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: any[] = [];
  veiculo: any;
  inscricao: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veiculosService: VeiculosService
  ) { }

  ngOnInit(): void {
    this.veiculos = this.veiculosService.getVeiculos();
  }

  cadastrarVeiculo(){
    this.router.navigate(['/veiculos', 'cadastrar'])
  }

  editarVeiculo(id: number){
    this.router.navigate(['/veiculos', id, 'editar']);
  }

  removerVeiculo(id: number){
    
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
