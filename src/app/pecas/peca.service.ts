import { Injectable } from '@angular/core';
import { Loja } from './loja';
import { Peca } from './peca';


@Injectable({
  providedIn: 'root'
})
export class PecaService {

  lojas : Loja[]
  pecas: Peca[]

  constructor() {
    this.lojas = [
      new Loja('j@g.com','12321251ds','Joaquim Silva','Quim Peças','1211224000112','3534654125','Rua X, 45 - Centro - Anatricé/MG','41.40338, 2.17403'),
      new Loja('g@g.com','45fd4f5d','Geralda Santos','Autopeças Esmeralda','123654000145','3534652225','Rua Z, 54 - Centro - Conceição das Rochas/MG','41.60978, 1.99005')
    ]
    this.pecas = [
      new Peca('1215','Peça 1',150.50,'Tipo 1',100,10,150,this.lojas[0]),
      new Peca('5214','Peça 2',562.99,'Tipo 1',66,10,150,this.lojas[1])
    ]
  }

  
  public get getPecas() : Peca[] {
    this.ordenar(this.pecas)
    return this.pecas
  }

  public getPeca(cod: string){
    for(let peca of this.pecas){
      if(peca.getCod == cod){
        return peca
      }
    }
    return undefined
  }

  
  public atualizaQuantidadePeca(cod: string, quantidade : number) {
    for(let peca of this.pecas){
      if(peca.getCod == cod){
        peca.setQuantidade = quantidade
      }
    }
  }

  public addPeca(cod : string, descricao : string, preco: number,tipo : string, quantidade : number,quantidadeMinima : number,quantidadeMaxima : number, loja :Loja){
    this.pecas.push(new Peca(cod,descricao,preco,tipo,quantidade,quantidadeMinima,quantidadeMaxima,loja))
  }

  private ordenar(arr: Peca[]){
    arr.sort((a, b) => (
      a.getQuantidade/a.getQuantidadeMinima < 
      b.getQuantidade/b.getQuantidadeMinima) ? -1 : 1);
  }
  
  
}
