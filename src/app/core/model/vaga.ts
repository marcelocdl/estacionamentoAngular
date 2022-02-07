
export class Vaga{
    
    numVaga: number | undefined;
    ocupado: boolean | undefined;

    constructor(numVaga?: number, ocupado?: boolean){
        this.numVaga = numVaga;
        this.ocupado = ocupado;
    }

}