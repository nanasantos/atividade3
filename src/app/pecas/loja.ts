import { Peca } from "./peca"

export class Loja {
    private email : string
    private senha : string
    private nome_gerente : string
    private nome : string
    private cnpj : string
    private telefone : string
    private endereço : string
    private coordenadas : string

    constructor(
        email : string,
        senha : string,
        nome_gerente : string,
        nome : string,
        cnpj : string,
        telefone : string,
        endereço : string,
        coordenadas : string
    ){
        this.email = email
        this.senha = senha
        this.nome_gerente = nome_gerente
        this.nome = nome
        this.cnpj = cnpj
        this.telefone = telefone
        this.endereço = endereço
        this.coordenadas = coordenadas
    }

    public get getEmail() : string {
        return this.email
    }
    public get getSenha() : string {
        return this.senha
    }
    public get getNome_Grente() : string {
        return this.nome_gerente
    }
    public get getNome() : string {
        return this.nome
    }
    public get getCnpj() : string {
        return this.cnpj
    }
    public get getTelefone() : string {
        return this.telefone
    }
    public get getEndereço() : string {
        return this.endereço
    }
    public get getCoordenadas() : string {
        return this.coordenadas
    }

    
    
}