function winMoves(move, moves){
      const half = moves.length / 2; 
      const winMoves = []; 
      for(let i = 1; i <= half; i++){ 
        const index = (move + i) % moves.length; 
        winMoves.push(moves[index]); 
      } 
      return winMoves; 
}

function loseMoves(move, moves){
  const half = moves.length/2; 
      const loseMoves = []; 
      for(let i = 1; i<=half; i++){ 
        const index = (move - i +  moves.length) % moves.length; 
        loseMoves.push(moves[index]); 
      }

      return loseMoves;
}


function checkForWin(userChoice, computerMove, moves){ 

    const winningMoves = winMoves(userChoice, moves);
    const losingMoves = loseMoves(userChoice, moves);

    if(winningMoves.includes(computerMove)){
      return "Win!";
    }else if(losingMoves.includes(computerMove)){
      return "Loss!";
    }else{
      return "Draw!";
    }
  }


function createTable(arr){
  const tableData = [[]];
  tableData[0][0] = "v PC\\User >";
  for (let i = 0; i < arr.length; i++) {
    tableData[0][i + 1] = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    tableData.push([]);
    tableData[i + 1][0] = arr[i];
  }

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
        tableData[i][j] = checkForWin(i, arr[j], arr);
    }
  }

  return tableData;
}

const arr = ["a","b","c","d","e", "f", "g"];
console.log(createTable(arr));