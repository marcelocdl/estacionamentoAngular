import { Vaga } from "./vaga";
import { Veiculo } from "./veiculo";

export class Estadia{

    id: number | undefined;
    data: Date | undefined;
    hr_entrada: string | undefined;
    hr_saida: string | undefined;
    vaga: Vaga | undefined;
    veiculo: Veiculo | undefined;
    
    constructor(
        id?: number,
        data?: Date,
        hr_entrada?: string,
        hr_saida?: string,
        vaga?: Vaga,
        veiculo?: Veiculo
    ){
        this.id = id;
        this.data = data;
        this.hr_entrada = hr_entrada;
        this.hr_saida = hr_saida;
        this.vaga = vaga;
        this.veiculo = veiculo;
    }
}