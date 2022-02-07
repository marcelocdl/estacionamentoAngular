
export class Cliente{

    id: number | undefined;
    nome: string | undefined;
    cpf: string  | undefined;
    
    constructor(id?: number, nome?: string, cpf?:string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }
}