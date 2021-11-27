import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { EstadiasService } from './estadias.service';

@Component({
  selector: 'app-estadias',
  templateUrl: './estadias.component.html',
  styleUrls: ['./estadias.component.css']
})
export class EstadiasComponent implements OnInit {

  estadias: any[] = [];
  estadia: any;
  inscricao: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estadiasService: EstadiasService
  ) { }

  ngOnInit(): void {
    this.estadias = this.estadiasService.getEstadias();
  }

  cadastrarEstadia(){
    this.router.navigate(['/estadias', 'cadastrar'])
  }

  editarEstadia(id: number){
    this.router.navigate(['/estadias', id, 'editar']);
  }

  removerEstadia(id: number){
    
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
