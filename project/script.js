document.getElementById('startBtn').addEventListener('click', function() {
    // Create falling numbers effect
    createFallingNumbers();

    // Play background music
    document.getElementById('bgMusic').play();

    // Delay the transition to the game room
    setTimeout(() => {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('game').style.display = 'block';
    }, 4000); // Duration for falling effect
});

function createFallingNumbers() {
    const numberOfDigits = 100;
    const container = document.body;

    for (let i = 0; i < numberOfDigits; i++) {
        createFallingNumber(container);
    }

    setInterval(() => {
        createFallingNumber(container);
    }, 200);
}

function createFallingNumber(container) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('falling-numbers');
    numberElement.textContent = Math.random() < 0.5 ? '0' : '1';
    numberElement.style.left = `${Math.random() * 100}vw`;
    numberElement.style.animationDuration = `${Math.random() * 2 + 2}s`;

    container.appendChild(numberElement);

    setTimeout(() => {
        container.removeChild(numberElement);
    }, 4000);
}

// Quiz code
const puzzles = {
    topRight: {
        question: "What is the password to unlock the door? (Hint: It starts with 's')",
        answer: "S",
        hint: "This is a common word in cybersecurity."
    },
    bottomLeft: {
        question: "Identify the phishing email: (A: Win a free iPhone, B: Your account has been compromised, C: Newsletter)",
        answer: "A", // Ensure this is correct
        hint: "Phishing often uses attractive offers."
    }
};




document.getElementById('topRight').addEventListener('click', (event) => {
    event.stopPropagation();
    showQuizPopup('topRight');
});

document.getElementById('bottomLeft').addEventListener('click', (event) => {
    event.stopPropagation();
    showQuizPopup('bottomLeft');
});

function showQuizPopup(area) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <h2>${puzzles[area].question}</h2>
        <input type="text" id="quizAnswerInput" placeholder="Type your answer here">
        <button id="quizSubmitBtn">Submit</button>
        <p id="quizHint" style="display: none;">Hint: ${puzzles[area].hint}</p>
        <button id="quizHintBtn">Show Hint</button>
    `;
    document.body.appendChild(popup);
    popup.style.display = 'block';

    document.addEventListener('click', function closePopup(event) {
        if (!popup.contains(event.target)) {
            document.body.removeChild(popup);
            document.removeEventListener('click', closePopup);
        }
    });

    document.getElementById('quizSubmitBtn').addEventListener('click', () => {
        const answer = document.getElementById('quizAnswerInput').value.trim().toLowerCase();
        if (answer === puzzles[area].answer) {
            alert('Correct! You have the code to escape.');
            checkVictory();
            document.body.removeChild(popup);
        } else {
            alert('Wrong answer! Try again.');
            document.getElementById('quizHint').style.display = 'block';
        }
    });

    document.getElementById('quizHintBtn').addEventListener('click', () => {
        document.getElementById('quizHint').style.display = 'block';
    });
}

function checkVictory() {
    document.getElementById('bgMusic').pause();
    document.getElementById('victorySound').play();
    document.getElementById('game').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'block';
}

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const finalMessage = document.getElementById('finalMessage');
    finalMessage.innerHTML = `
        <h2>Oops!</h2>
        <p>You got fooled!</p>
        <p>You just provided your personal information:</p>
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>You have been hacked and are now trapped in this matrix forever!</p>
    `;
    finalMessage.style.display = 'block';

    document.getElementById('infoForm').reset();
});
