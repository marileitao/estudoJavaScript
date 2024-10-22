// criar um array com as palavras
// contas as ocorrências
// montar um objeto com o resultado

export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    // const contagem = paragrafos
    //     // falsy caso o parágrafo for uma string vazia
    //     .filter(paragrafo => paragrafo.trim() !== '')
    //     .map((paragrafo) => {
    //     return verificaPalavrasDuplicadas(paragrafo);
    // })
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    return contagem;
}
// FlatMap:
// [1, 2, [3, 4]]
// [1, 2, 3, 4]

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
  
function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto[propriedade] = valor
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
          const palavraLimpa = limpaPalavras(palavra);
          resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    // console.log(resultado);
    return resultado;
}