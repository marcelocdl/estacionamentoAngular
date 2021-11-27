import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: any[] = [];
  cliente: any;
  inscricao: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService 
  ) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
  }

  cadastrarCliente(){
    this.router.navigate(['/clientes', 'cadastrar'])
  }

  editarCliente(id: number){
    this.router.navigate(['/clientes', id, 'editar']);
  }

  removerCliente(id: number){
  //  this.router.navigate(['/clientes', id, 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
