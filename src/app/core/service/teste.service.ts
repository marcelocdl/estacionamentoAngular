import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

    private readonly API_URL = 'http://localhost:8080/';

    constructor(
        private http: HttpClient
    ) { }

    teste(): Observable<Object>{
        return this.http.get(this.API_URL+'teste');
    }

}
