//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
const player1 = 'papel';
const player2 = 'tesoura'; //pedra

if (player1 == 'pedra' && player2 == 'papel') {
    console.log('Player 2 venceu');
} else if (player1 == 'pedra' && player2 == 'tesoura') {
    console.log('Player 1 venceu');
} else if (player1 == 'tesoura' && player2 == 'pedra') {
    console.log('Player 2 venceu');
} else if (player1 == 'papel' && player2 == 'tesoura') {
    console.log('Player 2 venceu');
} else if (player1 == 'tesoura' && player2 == 'papel') {
    console.log('Player 1 venceu');
} else if (player1 == 'papel' && player2 == 'pedra') {
    console.log('Player 1 venceu');
} else if (player1 == player2) {
    console.log('Empate');
} else {
    console.log("Tente digitar uma das opções: papel, pedra ou tesoura")
}