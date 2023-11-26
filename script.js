let score = 0;
let correctAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Adiciona 1 para evitar zero emojis
    const num2 = Math.floor(Math.random() * 10) + 1;

    const fingerEmoji1 = '☝️'.repeat(num1);
    const fingerEmoji2 = '☝️'.repeat(num2);

    document.getElementById('question').innerHTML = `(${fingerEmoji1}) ${num1} + (${fingerEmoji2}) ${num2} = ?`;

    // Chama a função para redefinir o texto e a cor do h1
    resetHeader();

    return num1 + num2;
}





function resetHeader() {
    const header = document.getElementById('header');
    header.innerText = 'Jogo de Soma';  // Texto padrão
    header.style.color = '';  // Resseta a cor do texto
}

function updateHeaderText(isCorrect) {
    const header = document.getElementById('header');

    if (isCorrect) {
        header.innerText = 'Parabéns! Resposta Correta!';
        
    } else {
        header.innerText = 'Resposta Incorreta. Tente Novamente.';
          
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').textContent.trim();
    const correctAnswer = generateQuestion().toString();

    // Função para converter emojis em números
    function emojiToNumber(emoji) {
        return emoji.match(/☝️/g)?.length || 0;
    }

    if (emojiToNumber(userAnswer) === emojiToNumber(correctAnswer)) {
        
        score++;
        updateHeaderText(true);
        document.body.style.backgroundColor = '#4CAF50';  // Verde para resposta correta
    } else {
        
        updateHeaderText(false);
        document.body.style.backgroundColor = '#FF5733';  // Vermelho para resposta incorreta
    }

    document.getElementById('points').innerText = score;

    // Redefina a cor de fundo e o texto após um breve intervalo de tempo (por exemplo, 1 segundo)
    setTimeout(() => {
        document.body.style.backgroundColor = '';
        resetHeader();  // Redefina o texto e a cor do cabeçalho para os padrões
        generateQuestion();
    }, 1200);
}



// Iniciar o jogo gerando a primeira pergunta
generateQuestion();
