import { lerArquivo } from '../01/index';
import { Usuario } from '../02/index';

const filtrarUsuarios = (profissao: string): Usuario[] | string => {

  const listaUsuario = lerArquivo() as Usuario[]

  const listaFiltrada = listaUsuario.filter(usuario => {
    return usuario.profissao === profissao
  })

  if (listaFiltrada.length === 0) {
    return 'Nenhum usuário encontrado'
  }

  return listaFiltrada
}

console.log(filtrarUsuarios('programador'));
