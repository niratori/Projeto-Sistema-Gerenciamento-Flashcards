import { baralhos } from "../database/baralho.js";
import { gerarId } from "../utils/idGerador.js";
import { excluirCardsPorBaralho } from "./flashcardFunctions.js";

// Operação: 3.1 CREATE
export function adicionarBaralho(titulo) {
    const novo = 
    { id: gerarId(), titulo };
    baralhos.push(novo);
    return novo;
};

// Operação: 3.2 READ
export function listarBaralhos() {
    return baralhos;
};

// Operação: 3.3 UPDATE
export function atualizarBaralho(id, novoTitulo) {
    const baralho = baralhos.find(b => b.id === id);
    if (baralho) {
        baralho.titulo = novoTitulo;
        return true;
    };
    return false;
};

// Operação: 3.4 DELETE
export function removerBaralho(id) {
    const index = baralhos.findIndex(b => b.id === id);
    if (index !== -1) {
        baralhos.splice(index, 1);
        excluirCardsPorBaralho(id); // 3.4 = Deletar em cascata
        return true;
    };
    return false;

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
    };
};