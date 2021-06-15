import { Loja } from "./loja"

export class Peca {
    private cod: string
    private descricao: string
    private preco : number
    private tipo : string
    private quantidade: number
    private quantidadeMinima: number
    private quantidadeMaxima: number
    private loja : Loja
   
    constructor(
        cod: string,
        descricao: string,
        preco: number,
        tipo : string,
        quantidade: number,
        quantidadeMinima: number,
        quantidadeMaxima: number,
        loja: Loja
    ){
        this.cod = cod
        this.descricao = descricao
        this.preco = preco
        this.tipo = tipo
        this.quantidade = quantidade
        this.quantidadeMinima = quantidadeMinima
        this.quantidadeMaxima = quantidadeMaxima
        this.loja = loja
    }


    
    public get getCod() : string {
        return this.cod
    }

    public get getDescricao() : string {
        return this.descricao
    }
    public get getPreco() : number {
        return this.preco
    }

    public get getTipo() : string {
        return this.tipo
    }    
    public get getQuantidade() : number {
        return this.quantidade
    }

    public get getQuantidadeMinima() : number {
        return this.quantidadeMinima
    }

    public get getQuantidadeMaxima() : number {
        return this.quantidadeMaxima
    }
    
    
    public set setQuantidade(quantidade : number) {
        this.quantidade += quantidade;
    }

    public getAlert() : number{
        if(this.getQuantidade/this.getQuantidadeMinima < 1)
            return 2;
        else if(this.getQuantidade/this.getQuantidadeMaxima < 0.3)
            return 3;
        else
            return 1;

    }
    public get getLoja() : Loja {
        return this.loja
    }
    



    

}