import { Cliente } from "./cliente";
import { Tipo } from "./tipo";

export class Veiculo {

    id: number | undefined;
    placa: string | undefined;
    cor: string  | undefined;
    modelo: string  | undefined;
    tipo: Tipo | undefined;
    cliente: Cliente | undefined;
    

    constructor(
        id?: number,
        placa?: string,
        cor?: string,
        modelo?: string,
        tipo?: Tipo,
        cliente?: Cliente
    ){
        this.id = id;
        this.placa = placa;
        this.cor = cor;
        this.modelo = modelo;        
        this.tipo = tipo;
        this.cliente = cliente;
    }
}
