import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private veiculos: any[] = [
    { id: 1, placa: 'ICS1991', modelo:'Parati', cor:'Prata', tipo: 'Carro', cliente: 'João'},
    { id: 2, placa: 'ABC4056', modelo:'Factor 125', cor:'Vermelha', tipo: 'Motocicleta', cliente: 'Maria'}
  ];

  getVeiculos(){
    return this.veiculos;
  }
  
  getVeiculoById(id: number){
    for(let i=0; i<this.veiculos.length; i++){
      let veiculo = this.veiculos[i];

      if(veiculo.id == id){
        return veiculo;
      }
    }
    return null;
  }

  constructor() { } 
}
