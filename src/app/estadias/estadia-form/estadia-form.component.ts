import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstadiasService } from '../estadias.service';

@Component({
  selector: 'app-estadia-form',
  templateUrl: './estadia-form.component.html',
  styleUrls: ['./estadia-form.component.css']
})
export class EstadiaFormComponent implements OnInit {

  vaga: any;
  estadia: any = {};
  inscricao: Subscription = new Subscription;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estadiasService: EstadiasService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.estadia = this.estadiasService.getEstadiaById(id);
        this.vaga = this.estadia.vaga;

        if(this.estadia === null){
          this.estadia = {};
        }
      }
    );

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.vaga = queryParams['vaga'];
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
    this.router.navigate(['/estadias']);
  }

}
