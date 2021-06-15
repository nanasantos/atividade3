import { Injectable } from '@angular/core';
import { Loja } from './loja';



@Injectable({
  providedIn: 'root'
})
export class LojaService {

  lojas : Loja[]


  constructor() {
    this.lojas = [
      new Loja('j@g.com','12321251ds','Joaquim Silva','Quim Peças','1211224000112','3534654125','Rua X, 45 - Centro - Anatricé/MG','41.40338, 2.17403'),
      new Loja('g@g.com','45fd4f5d','Geralda Santos','Autopeças Esmeralda','123654000145','3534652225','Rua Z, 54 - Centro - Conceição das Rochas/MG','41.60978, 1.99005')
    ]
  }

  
  public get getLojas() : Loja[] {
    return this.lojas
  }

  
  public addloja(email:string,senha:string,nome_gerente:string,nome:string,cnpj:string,endereco:string,telefone:string,coordenada:string){
    this.lojas.push(new Loja(email,senha, nome_gerente,nome,cnpj,endereco,telefone,coordenada))
  }
    
}
