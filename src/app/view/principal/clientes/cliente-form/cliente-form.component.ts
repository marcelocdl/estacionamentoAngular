import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Cliente } from 'src/app/core/model/cliente';
import { ClientesService } from '../../../../core/service/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
 
  msg: String = '';
  cli: Cliente = new Cliente();

  formCliente = this.formBuilder.group(
    {
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      cpf: this.formBuilder.control('', [Validators.required])
    }
  );

  inscricao: Subscription = new Subscription;
  formMudou: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
        
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.getClienteById(id);
      }
    ); */
  }

  cadastrar(): void{
    this.cli.nome = this.formCliente.value.nome;
    this.cli.cpf = this.formCliente.value.cpf;

      this.clientesService.cadastrar(this.cli).subscribe(msg =>{
        this.msg = msg;
      });
         
      this.formCliente.reset();
  }

  getClienteById(id: number){
    this.clientesService.getClienteById(id).subscribe(cliente => {
      
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  cancelar(){
    this.router.navigate(['/principal/clientes'], { relativeTo: this.route });
  }

}
