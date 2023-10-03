const readline = require('readline')

class Game {
    constructor(moves){
        this.moves = moves
    }

    computerMove(){
        return this.moves[Math.floor(Math.random() * this.moves.length)];
    }
}


function main() {
    const arr = process.argv.slice(2);
    const game = new Game(arr);


    game.moves.forEach((el, index)=>{console.log(`${index+1} - ${el}`)})
    console.log('0 - Exit');
    console.log('? - Help');
  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Enter your move: ', (userChoice) => {
      if (userChoice === '?') {

      } else if (!isNaN(userChoice) && userChoice >= 1 && userChoice <= game.moves.length) {
        const userMove = game.moves[userChoice - 1];
        const computerMove = game.computerMove();
        console.log(`Your move:: ${userMove}`);
        console.log(`Computer move: ${computerMove}`);
      } else {
        rl.close();
        main();
      }
      rl.close();
    });
}

main();