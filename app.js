const playBtn = document.querySelector('#playBtn');
const resultDiv = document.querySelector('#result');

playBtn.addEventListener('click', startGame);

function startGame() {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 100));
    alert(numbers[i]);
  }

  setTimeout(() => {
    let userInput = [];
    for (let i = 0; i < 5; i++) {
      userInput.push(+prompt(`Inserisci i numeri che hai visto ${i + 1} di 5`));
    }

    let correctNumbers = [];
    numbers.forEach(number => {
      if (userInput.includes(number)) {
        correctNumbers.push(number);
      }
    });

    console.log(`Hai trovato ${correctNumbers.length} dei 5 numeri: ${correctNumbers}`);
    resultDiv.innerHTML = `Hai trovato ${correctNumbers.length} dei 5 numeri: ${correctNumbers}`;
  }, 30000);
}