import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vaga } from "../model/vaga";

@Injectable({
    providedIn: 'root'
})
export class VagasService{

    private readonly API_URL = 'http://localhost:8080/vaga/';

    constructor(private http: HttpClient) {

    }

    getVagas(): Observable<Vaga[]>{
        return this.http.get<Vaga[]>(this.API_URL+'vagas');
    } 
    
    getVagaById(id: number): Observable<Vaga>{
        return this.http.get<Vaga>(this.API_URL+'vaga/'+id);
    }

}