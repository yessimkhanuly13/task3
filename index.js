const readline = require('readline')

function main() {
    const arr = process.argv.slice(2);

    arr.forEach((el, index)=>{console.log(`${index+1} - ${el}`)})
    console.log('0 - Exit');
    console.log('? - Help');
  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Enter your move: ', (userChoice) => {
      if (userChoice === '?') {

      } else if (!isNaN(userChoice) && userChoice >= 1 && userChoice <= arr.length) {
        const userMove = arr[userChoice - 1];
        const computerMove = arr[Math.floor(Math.random() * arr.length)];
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