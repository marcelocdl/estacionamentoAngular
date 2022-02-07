import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Estadia } from 'src/app/core/model/estadia';

import { EstadiasService } from '../../../core/service/estadias.service';

@Component({
  selector: 'app-estadias',
  templateUrl: './estadias.component.html',
  styleUrls: ['./estadias.component.css']
})
export class EstadiasComponent implements OnInit {

  msg: String = '';
  estadias?: Estadia[] = [];
  estadia: any;
  inscricao: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estadiasService: EstadiasService
  ) { }

  ngOnInit(): void {
    this.getEstadias();
  }

  getEstadias(){
    this.estadiasService.getEstadias().subscribe( estadia => {
      this.estadias = estadia;
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
