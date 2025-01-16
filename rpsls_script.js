function whoWins(player, computer){
    //функці бомжа для rpsls
    let win_matrix = [
        [1, 2, 0, 0, 2],
        [0, 1, 2, 2, 0],
        [2, 0, 1, 0, 2],
        [2, 0, 2, 1, 0],
        [0, 2, 0, 2, 1]
    ];
    let result = win_matrix[player][computer];
    switch (result) {
        case 0:
            console.log("Loh");
            break;
        case 1:
            console.log("Draw. Let's go again");
            break;
        case 2:
            console.log("WIN BIYATCH");
            break;
    }
}

/*
Але для того щоб моя функція працювала, треба аби
елементам гри відповідали індекси саме в такому порядку як нижче в масиві
rock - 0
scissors - 1
paper - 2
*/
let generalItems = ["rock", "scissors", "paper"]; 

function getWinner(firstPlayerChoice, secondPlayerChoice){
    let firstPlayerWin = (firstPlayerChoice - secondPlayerChoice + 3)%3 -1; 
    /* Значення 1 - якщо перший гравець виграв, 0 - якщо програв. 
        Добавив в кінці формули -1 чисто для того щоб круто код виглядав
        бо коли перетворюєш 0 в булеан буде фолс. 
        І тепер можна просто записати if(firstPlayerWin) 
    */
    return (firstPlayerChoice == secondPlayerChoice) ? "draw" :
        (firstPlayerWin) ? "firstPlayerWin" : "secondPlayerWin";
}

function getWinnerRPSLSp(firstPlayerChoice, secondPlayerChoice){
    let firstPlayerWin = (firstPlayerChoice - secondPlayerChoice + 5)%5 -2; 
    return (firstPlayerChoice == secondPlayerChoice) ? "draw" :
        (firstPlayerWin) ? "firstPlayerWin" : "secondPlayerWin";
}