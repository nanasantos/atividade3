import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LojaService } from '../loja.service';

@Component({
  selector: 'app-nova-loja',
  templateUrl: './nova-loja.component.html',
  styleUrls: ['./nova-loja.component.css']
})
export class NovaLojaComponent implements OnInit {

  email : string = ''
  senha : string = ''
  nome_gerente : string = ''
  nome :  string = ''
  cnpj : string = ''
  telefone : string = ''
  endereco : string = ''
  coordenadas: string = '';

  constructor(
    private pecaService : LojaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form : any){
    this.email = form.value.email
    this.senha = form.value.senha
    this.nome_gerente = form.value.nome_gerente
    this.nome = form.value.nome
    this.cnpj = form.value.cnpj
    this.telefone = form.value.telefone
    this.endereco = form.value.endereco
    this.coordenadas = this.coordenadas

    this.pecaService.addloja(this.email,this.senha,this.nome_gerente,this.nome, this.cnpj,this.telefone,this.endereco,this.coordenadas)

    this.router.navigate([''])
  }

}
