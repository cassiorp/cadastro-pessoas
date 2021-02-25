import Pessoa from './pessoa.model';

export default class Dados {

  id: number = 0;
  pessoas: Pessoa[];

  constructor() {
    this.pessoas = [];
  }

  adicionaPessoa(nome, idade) {
    this.pessoas.push(new Pessoa(this.id++, nome, idade));
    console.log(this.pessoas);
  }

  excluiPessoa(id: number) {
    let index: number = this.pessoas.findIndex(p => p.id === id);
    console.log(index);
    this.pessoas.splice(index, 1);
  }

  editaPessoa(id: number, novoNome: string, novaIdade: number) {
    let pessoa = this.pessoas.find(p => p.id === id);

    pessoa.nome = novoNome;

    pessoa.idade = novaIdade;

    console.log("DATA BASE EDICAO")
    console.log(this.pessoas);

  }


}




