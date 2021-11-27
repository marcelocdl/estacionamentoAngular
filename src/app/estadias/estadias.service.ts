import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadiasService {

  private estadias: any[] = [
    { id: 1, data: '05/08/2021', hrEntrada: '15:00', hrSaida: '20:00', veiculo: 'ICS1991', vaga: '4'},
    { id: 2, data: '10/08/2021', hrEntrada: '14:00', hrSaida: '', veiculo: 'ICS1991', vaga: '1'},
    { id: 3, data: '10/08/2021', hrEntrada: '17:00', hrSaida: '', veiculo: 'ABC4056', vaga: '2'},
  ];

  getEstadias(){
    return this.estadias;
  }
  
  getEstadiaById(id: number){
    for(let i=0; i<this.estadias.length; i++){
      let estadia = this.estadias[i];

      if(estadia.id == id){
        return estadia;
      }
    }
    return null;
  }

  constructor() { }
}
