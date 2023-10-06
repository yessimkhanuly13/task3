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

    createTable(arr){
      const tableData = [];

  
      for (let i = 0; i < arr.length; i++) {
        tableData.push([]);
      }
  
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            tableData[i][j] = this.checkForWin(i, arr[j], arr);
        }
      }
  
      return tableData;
    }
 
     
} 
 
 
class Rules{
    drawTable(data) {
      let lastline = '-'; 
      const width = 15;
      for (let i = 0; i < data.length; i++) {
        let row = '|';
        let line = "-";
        for (let j = 0; j < data[i].length; j++) {
          row += data[i][j];
          for(let k = 0; k < width - data[i][j].length-1; k++){
            row += " ";
          }
          row += "|";
        }
        
        for(let l = 0; l < row.length - 3; l++){
          line += "-";
        }

        lastline = line;

        console.log('+' + line + '+');
        line = "-";
        console.log(row);
      }
    
      console.log('+' + lastline + '+');
    }


    displayTheTable(tableData, arr){
      const moves = [];
      moves[0] = "v PC\\User >";

      for (let i = 0; i < arr.length; i++) {
        moves[i + 1] = arr[i];
        tableData[i].unshift(arr[i]);
      }

      tableData.unshift(moves);

      this.drawTable(tableData);
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
        rules.displayTheTable(game.createTable(arr), arr); 
      } else if (!isNaN(userChoice) && userChoice >= 1 && userChoice <= arr.length) { 
        const userMove = userChoice - 1; 
        const computerMove = game.computerMove(arr); 
        console.log(`Your move: ${arr[userMove]}`); 
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
