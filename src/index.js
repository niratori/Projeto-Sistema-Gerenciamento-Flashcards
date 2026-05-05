import promptSync from "prompt-sync";
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