import promptSync from "prompt-sync";
<<<<<<< HEAD
const prompt = promptSync();

// Funções dos módulos
import * as Baralho from "./functions/baralhoFunctions.js";
import * as Card from "./functions/flashcardFunctions.js";

function menu() {
    console.log(`
    ====== GERENCIADOR DE FLASHCARDS ======
    1. Adicionar Baralho
    2. Listar Baralhos
    3. Atualizar Baralho
    4. Remover Baralho (e os seus cards)
    ---------------------------------------
    5. Adicionar Flashcard
    6. Listar TODOS os Flashcards
    7. Listar os Flashcards por Baralho
    8. Atualizar Flashcard
    9. Remover Flashcard
    ---------------------------------------
    10. Buscar por Pergunta
    0. Sair
    =======================================
        `);

    const opcao = prompt("Escolha uma opção: ");

        switch(opcao) {
            case "1":
                const titulo = prompt("Título do novo baralho: ");

                Baralho.adicionarBaralho(titulo);
                    console.log("Baralho criado!");
                    break;
            case "2":
                console.table(Baralho.listarBaralhos());
                break;
            case "3":
                console.table(Baralho.listarBaralhos());
                    const idAtuB = parseInt(prompt("ID do baralho para atualizar: "));
                const novoTit = prompt("Novo título: ");
                if (Baralho.atualizarBaralho(idAtuB, novoTit))
                    console.log("Atualizado!");
                    else console.log("ID não encontrado!");
                break;
            case "4":
                console.table(Baralho.listarBaralhos());
                    const idRemB = parseInt(prompt("ID do baralho para REMOVER: "));
                    if (Baralho.removerBaralho(idRemB))
                    console.log("Baralho e Cards Apagados!");
                        else console.log("ID não encontrado!");
                    break;
            case "5":
                console.table(Baralho.listarBaralhos());
                    const idB = parseInt(prompt("ID do baralho de destino: "));
                    const perg = prompt("Pergunta: ");
                    const resp = prompt("Resposta: ");
                Card.adicionarFlashcard(perg, resp, idB);
                console.log("Flashcard criado!");
                    break;
            case "6":
                const todosOsCards = Card.listarFlashcards();
                if (todosOsCards.length > 0) {
                    console.table(todosOsCards);
                } else {
                    console.log("Nenhum flashcard cadastrado ainda.");
                };
                break;
            case "7":
                    const idBuscaB = parseInt(prompt("ID do baralho: "));
                console.table(Card.listarPorBaralho(idBuscaB));
                break;
            case "8":
                console.table(Card.listarFlashcards());
                const idAtuC = parseInt(prompt("ID do Flashcard para atualizar: "));
                const nP = prompt("Nova Pergunta: ");
                const nR = prompt("Nova Resposta: ");
                if (Card.atualizarFlashcards(idAtuC, nP, nR))
                    console.log("Card Atualizado!");
                    else console.log("ID não encontrado!");
                break;
            case "9":
                console.table(Card.listarFlashcards());
                const idRemC = parseInt(prompt("ID do Flashcard para remover: "));
                if(Card.removerFlashCard(idRemC))
                    console.log("Flashcard removido!");
                    else console.log("ID não encontrado!");
                break;
            case "10":
                const termo = prompt("Digite o termo da pergunta: ");
                console.table(Card.buscarPorPergunta(termo));
                break;
            case "0":
                console.log("Saindo...");
                process.exit();
            default:
                console.log("Opção Inválida!");
                };
            
            // Rodar o menu
            menu();
};

// Iniciar Sistema
menu();
=======
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
>>>>>>> e3f88e284204d62b229e4f1d21dfbf3bb94b3f14
