import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Pessoa from '../pessoa.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input() pessoas: Pessoa[];

  @Output() eventoExcluir = new EventEmitter();

  @Output() eventoEditar = new EventEmitter();

  isInput: boolean = true;

  mostraBotaoSalvar: boolean = false;

  mostraBotaoEditar: boolean = true;

  constructor() {
    this.pessoas = [];
  }

  ngOnInit(): void {
  }


  excluiPessoa(id: number) {
    this.eventoExcluir.emit(id);
  }

  editarPessoa(id: number, nome: string, idade: number) {
    let pessoa = new Pessoa(id, nome, idade);
    this.eventoEditar.emit(pessoa);
    this.habilitaInput();
  }

  trocaVisibilidadeBotoes() {
    this.mostraBotaoEditar = !this.mostraBotaoEditar;
    this.mostraBotaoSalvar = !this.mostraBotaoSalvar;
  }

  habilitaInput() {
    this.trocaVisibilidadeBotoes();
    this.isInput = !this.isInput;
  }
}
