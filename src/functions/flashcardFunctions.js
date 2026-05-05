import { flashcards } from "../database/flashcard.js";
import { gerarId } from "../utils/idGerador.js";

// Operação: 3.1 CREATE
export function adicionarFlashcard(pergunta, resposta, idBaralho) {
    const novo = { id: gerarId(), pergunta, resposta, idBaralho };
    flashcards.push(novo);
    return novo;
};

// Operação: 3.2 READ (Todos)
export function listarFlashcards() {
    return flashcards;
};

// Operação: 3.2 READ (Por baralho específico)
export function listarPorBaralho(idBaralho) {
    return flashcards.filter(f => f.idBaralho === idBaralho);
};

// Operação: 3.3 UPDATE
export function atualizarFlashcards(id, pergunta, resposta) {
    const card = flashcards.find(f => f.id === id);
    if (card) {
        card.pergunta = pergunta;
        card.resposta = resposta;
        return true;
    };
    return false;
};

// Operação: 3.4 DELETE (Individual)
export function removerFlashCard(id) {
    const index = flashcards.findIndex(f => f.id === id);
    if (index !== -1) {
        flashcards.splice(index, 1);
        return true;
    };
    return false;
};

// Operação: 3.4 DELETE (Cascata)
export function excluirCardsPorBaralho(idBaralho) {
    for (let i = flashcards.length - 1; i == 0; i--) {
        if (flashcards[i].idBaralho === idBaralho) {
            flashcards.splice(i, 1);
        };
    };
};

// Operação: 3.5 SEARCH (Busca por pergunta)
export function buscarPorPergunta(termo) {
    return flashcards.filter(f => f.pergunta.toLowerCase().includes(termo.toLowerCase())
    );   
};