import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loja } from '../loja';
import { PecaService } from '../peca.service';

@Component({
  selector: 'app-nova-peca',
  templateUrl: './nova-peca.component.html',
  styleUrls: ['./nova-peca.component.css']
})
export class NovaPecaComponent implements OnInit {

  codigo : string = ''
  descricao : string = ''
  preco : number = 0
  tipo :  string = ''
  quantidade : number = 0
  quantidadeMinima : number = 0
  quantidadeMaxima : number = 0
  loja!: Loja; 

  constructor(
    private pecaService : PecaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form : any){
    this.codigo = form.value.codigo
    this.descricao = form.value.descricao
    this.preco = Number(form.value.preco)
    this.tipo = form.value.tipo
    this.quantidade = Number(form.value.quantidade)
    this.quantidadeMinima = Number(form.value.quantidadeMinima)
    this.quantidadeMaxima = Number(form.value.quantidadeMaxima)
    this.loja = this.loja

    this.pecaService.addPeca(this.codigo,this.descricao,this.preco,this.tipo, this.quantidade,this.quantidadeMinima,this.quantidadeMaxima,this.loja)

    this.router.navigate([''])
  }

}
