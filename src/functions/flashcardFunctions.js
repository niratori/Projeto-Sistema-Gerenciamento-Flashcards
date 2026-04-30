import flashcards from "../database/flashcard.js";

export function adicionarFlashcard(pergunta, resposta, idBaralho) {
    let novoId = flashcards.length > 0 ? flashcards[flashcards.length - 1].id + 1:1;
    flashcards.push( {id: novoId, pergunta, resposta, idBaralho} )
    console.log('Flashcard criado!')

}
export const listarFlashcards = (idBaralho = null) =>{
    if (flashcards.length === 0) {
        console.log('Nenhum flashcard cadastrado!')
        return
        
    }

    flashcards.forEach(flashcards => {
        console.log(`\nID: ${flashcards.id}`)
        console.log(`Pergunta: ${flashcards.pergunta}`)
        console.log(`Resposta: ${flashcards.resposta}`)
        console.log(`IdBaralho: ${flashcards.idBaralho}`)
    })
}

export const buscarPorPergunta = (termo)=> {
    const resultados = flashcards.filter(flashcards =>  
        flashcards.pergunta.toLocaleLowerCase().includes(termo.toLocaleLowerCase())
        );
        console.table(resultados)
}
export const atualizarFlashcards = (id, novaPergunta, novaResposta) => {
    const card = flashcards.find(flashcards => flashcards.id === id)

    if (card) {
        card.pergunta = novaPergunta;
        card.resposta = novaResposta;
        
    }
}

export const removerFlashcards = (id) => {

    const index = flashcards.findIndix(flashcards => flashcards.id === id)

    if (index !== -1) {
        flashcards.splice(index, 1);
    }
    
}

