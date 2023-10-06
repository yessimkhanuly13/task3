const crypto = require('crypto');
const readline = require('readline');

function generateRandomKey(lengthInBytes) {
  return crypto.randomBytes(lengthInBytes);
}

function computeHMAC(key, message) {
  const hmac = crypto.createHmac('sha256', key); // Используем SHA-256 для HMAC
  hmac.update(message);
  return hmac.digest('hex'); // Возвращаем HMAC в формате шестнадцатеричной строки
}

function main() {
  const keyLengthInBytes = 32; // Длина ключа в байтах (32 байта = 256 бит)

  const randomKey = generateRandomKey(keyLengthInBytes);
  const moves = ['Rock', 'Paper', 'Scissors'];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(`Generated random key: ${randomKey.toString('hex')}`);

  rl.question('Enter your move: ', (userChoice) => {
    if (moves.includes(userChoice)) {
      const computerMove = moves[Math.floor(Math.random() * moves.length)];
      console.log(`Computer move: ${computerMove}`);

      const message = `User: ${userChoice}, Computer: ${computerMove}`;
      const hmac = computeHMAC(randomKey, message);
      
      console.log(`HMAC: ${hmac}`);
    } else {
      console.log('Invalid move. Please enter one of: Rock, Paper, Scissors');
    }
    
    rl.close();
  });
}

main();
