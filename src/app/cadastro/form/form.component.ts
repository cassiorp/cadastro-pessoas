import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import Pessoa from '../pessoa.model';
import {CadastroComponent} from '../cadastro.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome: string;
  idade: number;

  cadastro: CadastroComponent[];

  @Output() pegaValores = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  click() {
    let pessoa = new Pessoa(null ,this.nome, this.idade);
    this.pegaValores.emit(pessoa);
  }

}
