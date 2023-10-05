function winMoves(move, moves){ 
    const half = moves.length / 2; 
    const winMoves = []; 
    for(let i = 1; i <= half; i++){ 
      const index = (move + i) % moves.length; 
      winMoves.push(moves[index]); 
    } 
    return winMoves; 
}

console.log(winMoves(3, [1,2,3,4,5,6,7]));