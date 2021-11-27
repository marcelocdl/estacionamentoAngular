import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: any[] = [
    { id: 1, nome: 'João', cpf:'000.000.000-00'},
    { id: 2, nome: 'Maria', cpf:'111.111.111-11'} 
  ];

  getClientes(){
    return this.clientes;
  }
  
  getClienteById(id: number){
    for(let i=0; i<this.clientes.length; i++){
      let cliente = this.clientes[i];

      if(cliente.id == id){
        return cliente;
      }
    }
    return null;
  }

  constructor() { } 
}
