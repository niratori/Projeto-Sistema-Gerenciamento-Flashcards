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
};