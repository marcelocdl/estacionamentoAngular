import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estadia } from '../model/estadia';
import { Vaga } from '../model/vaga';
import { VeiculosService } from './veiculos.service';

@Injectable({
  providedIn: 'root'
})
export class EstadiasService {

  private readonly API_URL = 'http://localhost:8080/estadia/';  

  constructor(
    private http: HttpClient,
  ){ }

  cadastrar(estadia: Estadia): Observable<string>{
    return this.http.post(this.API_URL+'cadastrar', estadia, {responseType: 'text'});
  }

  saida(id: number, estadia: Estadia): Observable<string>{
    return this.http.put(this.API_URL+'saida/'+id, estadia, {responseType: 'text'});
  }

  getEstadias(): Observable<Estadia[]>{
    return this.http.get<Estadia[]>(this.API_URL+'estadias');
  }
  
  getEstadiaById(id: number): Observable<Estadia>{
    return this.http.get<Estadia>(this.API_URL+'estadia/'+id);
  }
 
}
