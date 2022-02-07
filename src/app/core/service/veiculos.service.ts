import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../model/veiculo';


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private readonly API_URL = 'http://localhost:8080/veiculo/';

  constructor(
    //private clienteService: ClientesService,
    //private tipoService: TipoService,
    private http: HttpClient
  ) { } 

  cadastrar(veiculo: Veiculo): Observable<string>{
    console.log(this.http.post(this.API_URL+'cadastrar?', veiculo, {responseType: 'text'}));
    return this.http.post(this.API_URL+'cadastrar', veiculo, {responseType: 'text'});
  }

  editar(id: number, veiculo: Veiculo): Observable<string>{
    return this.http.put(this.API_URL+'editar/'+id, veiculo, {responseType: 'text'});
  }

  excluir(id: number): Observable<string>{
    return this.http.delete(this.API_URL+'deletar/'+id, {responseType: 'text'});
  }

  getVeiculos(): Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(this.API_URL+'veiculos');
  }
  
  getVeiculoById(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(this.API_URL+'veiculo/'+id);
  }
  
}