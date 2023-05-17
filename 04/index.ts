import { lerArquivo, escreverNoArquivo } from '../01/index';
import { Usuario } from '../02/index';

const excluirUsuario = (cpf: string): Usuario | string => {

  const listaUsuarios = lerArquivo() as Usuario[]

  const usuarioEncontrado = listaUsuarios.find(usuario => {
    return usuario.cpf === cpf
  })

  if (!usuarioEncontrado) {
    return `Usuário não encontrado`
  }

  const listaAtualizada = listaUsuarios.find(usuario => {
    return usuario.cpf !== cpf
  })

  escreverNoArquivo(listaAtualizada)

  return usuarioEncontrado
}

console.log(excluirUsuario('654789132'));
