import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/core/model/cliente';
import { ClientesService } from '../../../core/service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  msg: String = '';
  clientes: Cliente[] = [];
  cliente: any;
  inscricao: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService 
  ) { }

  ngOnInit(): void {
    console.log("CHEGOU NO CLIENTES COMPONENT");
    this.getClientes();
  }

  getClientes(){
    this.clientesService.getClientes().subscribe( cliente => {
      this.clientes = cliente;
    })
  }

  editarCliente(id: number){
    this.router.navigate(['/principal/clientes/', id, 'editar']);
  }

  removerCliente(id?: number){
    this.clientesService.excluir(id!).subscribe( msg => {
      this.msg = msg;
      alert(this.msg);
      this.getClientes();
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
 
}
