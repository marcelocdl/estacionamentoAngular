import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Veiculo } from 'src/app/core/model/veiculo';
import { VeiculosService } from '../../../core/service/veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  msg: string = '';
  veiculos?: Veiculo[] = [];
  veiculo: any;
  inscricao: Subscription = new Subscription;

  constructor(
    private veiculosService: VeiculosService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getVeiculos();
  }

  getVeiculos(){
    this.veiculosService.getVeiculos().subscribe( veiculo => {
      this.veiculos = veiculo;
    });
  }

  cadastrarVeiculo(){
    this.router.navigate(['cadastrar'], {relativeTo: this.route}) ;
  }

  editarVeiculo(id: number){
    this.router.navigate(['/principal/veiculos/', id, 'editar']);
  }

  removerVeiculo(id?: number){
    this.veiculosService.excluir(id!).subscribe( msg => {
      this.msg = msg;
      alert(this.msg);
      this.getVeiculos();
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
