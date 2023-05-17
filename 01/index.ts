export const fs = require('fs');

export const lerArquivo = (): unknown => {
  return JSON.parse(fs.readFileSync('./bd.json'))
}

export const escreverNoArquivo = (dados: any) => {
  fs.writeFileSync('./bd.json', JSON.stringify(dados))
}

