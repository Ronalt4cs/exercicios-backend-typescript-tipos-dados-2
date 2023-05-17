import { lerArquivo, escreverNoArquivo } from '../01/index';

export type Usuario = {
  nome: string,
  email: string,
  cpf: string,
  profissao?: string,
  endereco: Endereco | null
}

export type Endereco = {
  cep: string,
  rua: string,
  complemento?: string,
  bairro: string,
  cidade: string,
}

const cadastrarUsuario = (dadosDoUsuario: Usuario): Usuario => {
  const listaUsuarios = lerArquivo() as Usuario[];
  listaUsuarios.push(dadosDoUsuario)

  escreverNoArquivo(listaUsuarios);
  return dadosDoUsuario
}

cadastrarUsuario({
  nome: 'Joao',
  cpf: '65478932110',
  email: 'Joao@email.com',
  endereco: {
    bairro: 'centro',
    cep: '1233454-53',
    cidade: 'qualquer',
    rua: 'rua qualquer',
  }
});

console.log(lerArquivo())