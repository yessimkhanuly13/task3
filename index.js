const readline = require('readline') 
 
class Game {  
    computerMove(moves){ 
        return moves[Math.floor(Math.random() * moves.length)]; 
    } 
 
    winMoves(move, moves){ 
      const half = moves.length / 2; 
      const winMoves = []; 
      for(let i = 1; i <= half; i++){ 
        const index = (move + i) % moves.length; 
        winMoves.push(moves[index]); 
      } 
      return winMoves; 
    } 
 
    loseMoves(move, moves){ 
      const half = moves.length/2; 
      const loseMoves = []; 
      for(let i = 1; i<=half; i++){ 
        const index = (move - i +  moves.length) % moves.length; 
        loseMoves.push(moves[index]); 
      }

      return loseMoves; 
    } 
 
 
    checkForWin(userChoice, computerMove, moves){ 

      const winningMoves = this.winMoves(userChoice, moves);
      const losingMoves = this.loseMoves(userChoice, moves);

      if(winningMoves.includes(computerMove)){
        return "You won!";
      }else if(losingMoves.includes(computerMove)){
        return "Computer won!";
      }else{
        return "It's draw!";
      }
    } 
 
     
} 
 
 
class Rules{ 
  constructor(moves){ 
    this.moves = moves 
  } 
 
  createTable(){ 
    const a = "v PC/User >"; 
    const len = this.moves.join(''); 
 
    let width = a + len; 
    
    let line = "+";
    for(let i = 0; i<width.length; i++){ 
        line+= "-";
    }
    line += "+"; 
    console.log(line);
  } 
} 
 
 
class Hmac{ 
 
} 
 
 
class KeyGen{ 
 
} 
 
 
function main() { 
    const arr = process.argv.slice(2); 
    const game = new Game(arr); 
    const rules = new Rules(arr); 
 
    arr.forEach((el, index)=>{console.log(`${index+1} - ${el}`)}) 
    console.log('0 - Exit'); 
    console.log('? - Help'); 
   
    const rl = readline.createInterface({ 
      input: process.stdin, 
      output: process.stdout 
    }); 
   
    rl.question('Enter your move: ', (userChoice) => { 
      if (userChoice === '?') { 
        rules.createTable(); 
      } else if (!isNaN(userChoice) && userChoice >= 1 && userChoice <= arr.length) { 
        const userMove = userChoice - 1; 
        const computerMove = game.computerMove(arr); 
        console.log(`Your move: ${userMove + 1}`); 
        console.log(`Computer move: ${computerMove}`); 
        console.log(game.checkForWin(userMove, computerMove, arr)); 
         
      }else if(userChoice === "0"){ 
        rl.close();  
      } else { 
        rl.close(); 
        main(); 
      } 
      rl.close(); 
    }); 
} 
 
main();
