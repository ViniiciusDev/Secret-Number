let secretNumber = generateRandomNumber();

// Create a screen Message with DOM
function createMessage(tag, text)    {
    let textBox = document.querySelector(tag);
    textBox.innerHTML = text;
}
createMessage('h1','Jogo do número secreto');
createMessage('.texto__paragrafo','Escolha um número entre 1 e 10');

// Verify the user Number
function verifyNumber() {
    let userNumber = document.querySelector('input').value;

    if (userNumber == secretNumber) {
        createMessage('h1', 'Parabéns!!');
        createMessage('.texto__paragrafo', 'Você acertou o número secreto.')
    } else {
        if (userNumber > secretNumber)   {
            createMessage('.texto__paragrafo', 'O número secreto é menor');
        } else {
            createMessage('.texto__paragrafo', 'O número secreto é maior');
        }
    }
}

// Generate a random number with Math.random
function generateRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}

