import baralhos from "../database/baralho.js";
import flashcards from "../database/flashcard.js";

export function adicionarBaralho(titulo) {
    let novoId = baralhos.length > 0 ? baralhos[baralhos.length - 1].id + 1:1;
    let novoBaralho = {id: novoId, titulo: titulo}
    baralhos.push(novoBaralho)
    console.log('Novo baralho adicionado com sucesso!')

}

export function listarBaralhos() {
    console.table(baralhos)
}
export function atualizarBaralho(id, novoTitulo){
    const indice = baralhos.findIndex(baralhos => baralhos.id === id)

    if (indice === 1) {
        baralhos[indice].titulo = novoTitulo
        console.log('Titulo atualizado!')
    } else {
        console.log('Baralho nao encontrado.')
    }

}

export function removerBaralho(id) {
    const indice = baralhos.findIndex(baralhos => baralhos.id === id)

    if (indice !== - 1) {
        baralhos.splice(indice, 1)
        
    }
    const flashcardsRestantes = flashcards.filter(flashcards > flashcards.idBaralho !== id)
    console.log(`O baralho ${id} e os flashcards foram removidos.`)
}

