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

// Display the question and options
function displayQuestion() {
    questionContainer.textContent = question.questionText;

    answersContainer.innerHTML = '';
    question.options.forEach(option => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = "radio";
        input.name = "answer";
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        answersContainer.appendChild(label);
        answersContainer.appendChild(document.createElement('br'));
    });
}

// Check the user's answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        resultContainer.textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;
    if (userAnswer === question.correctAnswer) {
        resultContainer.textContent = "Correct! Well done.";
        resultContainer.style.color = 'green';
    } else {
        resultContainer.textContent = "Oops! That's incorrect. Try again.";
        resultContainer.style.color = 'red';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', checkAnswer);

// Display the question when the page loads
displayQuestion();
