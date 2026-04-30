import promptSync from "prompt-sync";
const promp = promptSync();

import { adicionarBaralho, removerBaralho, atualizarBaralho, listarBaralhos } from "./functions/baralhoFunctions.js";
import { adicionarFlashcard, removerFlashcards, atualizarFlashcards, listarFlashcards, buscarPorPergunta } from "./functions/flashcardFunctions.js";
import baralhos from "./database/baralho.js";
import flashcards from "./database/flashcard.js";

function exibirMenu() {
    console.log("\n--- Sistema de Flashcards ---")
    console.log("1. Listar Baralho (READ)")
    console.log("2. Adicionar Baralho (CREATE)")
    console.log("3. Atualizar Baralho (UPDATE)")
    console.log("4. Remover Baralho (DELETE)")
    console.log("5. Listar Flashcards (READ)")
    console.log("6. Adicionar Flashcards (CREATE)")
    console.log("7. Atualizar Flashcards (UPDATE)")
    console.log("8. Remover Flashcards (DELETE)")
    console.log("9. Buscar Por Pergunta")
    console.log("0. Sair")
}

let opcao = "";

while (opcao !== "0") {
    exibirMenu()
    opcao = prompt("Escolha uma opcao: ")

}

    switch (opcao) {
        case '1':
            listarBaralhos(baralhos)
            break;

        case '2':
            const titulo = prompt("adicione um novo titulo: ")
            adicionarBaralho(titulo)
            break;
        case '3':
            const novoId = parseInt(prompt('Novo ID: '))
            const novoTitulo = prompt('Novo titulo: ')
            atualizarBaralho(id, titulo)
            break
        case '4':
            const id = parseInt(prompt('ID do baralho: '))
            removerBaralho(id)
            break;
        case '5':
            const perguntaF = prompt('Pergunta:')
            const respostaF = prompt('Resposta: ')
            const idBaralho = parseInt(prompt('ID do baralho: '))
            adicionarFlashcard(perguntaF, respostaF, idBaralho)
            break;
        case '6':
            listarFlashcards()
            break;
        case '7':
            const busca = prompt('Termo de busca: ')
            buscarPorPergunta(busca);
            break;
        case '8':
            const idFlashcard = parseInt(prompt('ID do flashcard: '))
            removerFlashcards(id);
            break;
        case '0':
            console.log('Saindo do sistema ...');
            sistemaRodando = false
            break;
        default:
            console.log('Opcao invalida!')
            break;
    }