const itemButtons = document.querySelectorAll('#playerField button');
const playButton = document.querySelector('#playBtn');
let userSelected = null;
let generalItems = ["rock", "scissors", "paper"]; 
let generalItemsRPSLS = ["rock", "scissors", "lizard", "paper",  "spock"];

function play(){
    let computerSelected = Math.floor(Math.random() * 3);
    console.log(`computer move => ${generalItems[computerSelected]}`);
    
    console.log(getWinner(userSelected, computerSelected));

};

/*
Але для того щоб моя функція працювала, треба аби
елементам гри відповідали індекси саме в такому порядку як нижче в масиві
rock - 0
scissors - 1
paper - 2
*/
function getWinner(firstPlayerChoice, secondPlayerChoice){
    let firstPlayerWin = (firstPlayerChoice - secondPlayerChoice + 3)%3 -1; 
    /* Значення 1 - якщо перший гравець виграв, 0 - якщо програв. 
        Добавив в кінці формули -1 чисто для того щоб круто код виглядав
        бо коли перетворюєш 0 в булеан буде фолс. 
        І тепер можна просто записати if(firstPlayerWin) 
    */
    return (firstPlayerChoice == secondPlayerChoice) ? "draw" :
        (firstPlayerWin) ? "First Player Wins" : "Second Player Wins";
}



function getWinnerRPSLSp(firstPlayerChoice, secondPlayerChoice){
    //let forDebugingPurpose = (((Math.abs(firstPlayerChoice - secondPlayerChoice) + 1) / 2) | 0) - 1;
    let firstPlayerWin = (((firstPlayerChoice-secondPlayerChoice + 5)%5 + 1) / 2 | 0) - 1; 
    //console.log(`${firstPlayerWin}`);
    return (firstPlayerChoice == secondPlayerChoice) ? "draw" :
        (firstPlayerWin) ? "1 WIN" : "2 WIN";
}

//Цикл для тестування всіх варіантів
for(let i = 0; i < 5; i++){
    console.log(`\n`);
    for(let j = 0; j < 5; j++){
        console.log(`${i} ${j} ${generalItemsRPSLS[i]} - ${generalItemsRPSLS[j]} => ${getWinnerRPSLSp(i, j)}`);
    }
}



itemButtons.forEach(button => {
    button.addEventListener('click', () => {
        userSelected = Array.from(itemButtons).indexOf(button);
        console.log(`users move => ${generalItems[userSelected]}`);
    });
});

playButton.addEventListener('click', () => {
    if(userSelected === null){
        alert('Please select an item');
    } else {
        play();
    }
});

