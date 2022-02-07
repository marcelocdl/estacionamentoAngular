import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/core/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API_URL = 'http://localhost:8080/cliente/';

  constructor(private http: HttpClient) {

  }

  cadastrar(cliente: Cliente): Observable<string>{
    console.log(this.http.post(this.API_URL+'cadastrar?', cliente, {responseType: 'text'}));
    return this.http.post(this.API_URL+'cadastrar', cliente, {responseType: 'text'});
  }

  editar(id: number, cliente: Cliente): Observable<string>{
    return this.http.put(this.API_URL+'editar/'+id, cliente, {responseType: 'text'});
  }

  excluir(id: number): Observable<string>{
    return this.http.delete(this.API_URL+'deletar/'+id, {responseType: 'text'});
  }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API_URL+'clientes');
  } 

  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(this.API_URL+'cliente/'+id);
  }

}
