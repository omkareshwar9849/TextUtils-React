const questionContainer = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

// A simple question with options
const question = {
    questionText: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
};