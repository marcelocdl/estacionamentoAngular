import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Cliente } from 'src/app/core/model/cliente';
import { ClientesService } from 'src/app/core/service/clientes.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {
  msg: String = '';
  cliente: Cliente = new Cliente();
  inscricao: Subscription = new Subscription;
  id_cliente: number = 0;

  formCliente = this.formBuilder.group(
    {
      id: this.formBuilder.control('', [Validators.required]),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      cpf: this.formBuilder.control('', [Validators.required])
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.id_cliente = id;

        this.getClienteById(id);

        if(this.cliente === null){
          this.cliente;
        }
      }
    );
  }

  getClienteById(id: number){
    this.clientesService.getClienteById(id).subscribe(cli => {
      this.cliente = cli;
    })
  }

  salvar(): void{
    
    this.cliente.nome = this.formCliente.value.nome;
    this.cliente.cpf = this.formCliente.value.cpf;

      this.clientesService.editar(this.id_cliente, this.cliente).subscribe(msg =>{
        this.msg = msg;
      });
         
      this.formCliente.reset();
  }

  cancelar(){
    this.router.navigate(['/principal/clientes'], { relativeTo: this.route });
  }

}
