let listNumber = [];
let maxNumber = 100;
let secretNumber = generateRandomNumber();
let tentativas = 1;

// Create a screen Message with DOM
function createMessage(tag, text)    {
    let textBox = document.querySelector(tag);
    textBox.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

// Show start message
function showStartMessage() {
    let textMessage = `Escolha um número entre 1 e ${maxNumber}`
    createMessage('h1','Jogo do número secreto');
    createMessage('.texto__paragrafo',textMessage);
}

showStartMessage()


// Verify the user Number
function verifyNumber() {
    let userNumber = document.querySelector('input').value;

    if (userNumber == secretNumber) {
        let tentativasWord = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let tentativasMessage = `Você acertou o número secreto com ${tentativas} ${tentativasWord}`
        createMessage('h1', 'Parabéns!!');
        createMessage('.texto__paragrafo', tentativasMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (userNumber > secretNumber)   {
            createMessage('.texto__paragrafo', 'O número secreto é menor');
        } else {
            createMessage('.texto__paragrafo', 'O número secreto é maior');
        }
        tentativas++;
        clearArea();
    }
}

// Generate a random number with Math.random
function generateRandomNumber() {
    let choiceNumber = parseInt(Math.random() * maxNumber + 1);
    let allChoicesNumber = listNumber.length;

    if (allChoicesNumber == maxNumber) {
        listNumber = [];
    }

    if (listNumber.includes(choiceNumber)) {
        return generateRandomNumber();
    }   else    {
        listNumber.push(choiceNumber);
        console.log(listNumber);
        return choiceNumber;
    }
}

// Clear Button
function clearArea() {
    chute = document.querySelector('input');
    chute.value = '';
}

// Restart Game
function restartGame() {
    secretNumber = generateRandomNumber();
    clearArea();
    tentativas = 1;
    showStartMessage()

    document.getElementById('reiniciar').setAttribute('disabled', true);
}