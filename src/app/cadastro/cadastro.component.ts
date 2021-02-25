import { Component, OnInit } from '@angular/core';
import Dados from './database';
import Pessoa from './pessoa.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  db: Dados;

  isInput: boolean = true;

  mostraBotaoSalvar: boolean = false;

  mostraBotaoEditar: boolean = true;

  constructor() {
    this.db = new Dados();
  }

  ngOnInit(): void {
  }

  save(pessoa: Pessoa){
    this.db.adicionaPessoa(pessoa.nome, pessoa.idade);
  }

  delete(id: number){
    this.db.excluiPessoa(id);
  }

  update(pessoa: Pessoa){
    this.db.editaPessoa(pessoa.id, pessoa.nome, pessoa.idade);
  }

}

