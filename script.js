const questions = [
    {
        question: "What is the capital of India?",
        options: ["Bihar", "New Delhi", "Uttarakhand", "Banglore"],
        answer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: 2
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Jane Austen", "Mark Twain", "J.K. Rowling"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const optionButtons = document.getElementsByClassName('option');

    questionContainer.textContent = questions[currentQuestionIndex].question;

    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = questions[currentQuestionIndex].options[i];
    }
}

function selectOption(selectedOptionIndex) {
    if (selectedOptionIndex === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const percentageElement = document.getElementById('percentage');

    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    scoreElement.textContent = score;
    percentageElement.textContent = (score / questions.length * 100).toFixed(2);
}

// Initialize quiz
loadQuestion();
