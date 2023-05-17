import { lerArquivo, escreverNoArquivo } from '../01/index';
import { Usuario } from '../02/index';

const detalharUsuario = (cpf: string): Usuario | string => {
  const listaUsuarios = lerArquivo() as Usuario[]

  const usuarioEncontrado = listaUsuarios.find(usuario => {
    return usuario.cpf === cpf
  })

  if (!usuarioEncontrado) {
    return `Usuário não encontrado`
  }

  return usuarioEncontrado
}

const atualizarUsuario = (dadosAtualizados: Usuario): Usuario | string => {

  const usuarioEncontrado = detalharUsuario(dadosAtualizados.cpf)

  if (typeof usuarioEncontrado === 'string') {
    return `Usuário não encontrado`
  }

  const listaUsuarios = lerArquivo() as Usuario[]

  const listaAtualizada = listaUsuarios.map(usuario => {
    if (usuario.cpf === dadosAtualizados.cpf) {
      usuario = { ...dadosAtualizados }
    }
    return usuario
  })

  escreverNoArquivo(listaAtualizada)

  return dadosAtualizados
}


console.log(detalharUsuario('654789132'));

console.log(atualizarUsuario({
  nome: 'Joao',
  cpf: '65478932110',
  email: 'Joao@email.com',
  endereco: null
}));