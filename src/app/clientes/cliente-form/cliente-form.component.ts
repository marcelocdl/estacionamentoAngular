import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: any = {};
  inscricao: Subscription = new Subscription;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.cliente = this.clientesService.getClienteById(id);

        if(this.cliente === null){
          this.cliente = {};
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
    this.router.navigate(['/clientes']);
  }

  podeMudarRota(){

    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;

  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
