// --- 1. DATA ---
// A simple list of questions to start with.
const questions = [
    "What is your earliest childhood memory?",
    "Describe one of your favorite family traditions.",
    "Who was your best friend growing up and what were they like?",
    "What was the most mischievous thing you did as a child?",
    "Tell me about a time you were proud of an accomplishment."
];

let currentQuestionIndex = 0;

// --- 2. HTML ELEMENTS ---
// Connect our script to the elements on the page.
const questionTextElement = document.getElementById('question-text');
const storyInputElement = document.getElementById('story-input');
const saveButton = document.getElementById('save-button');
const skipButton = document.getElementById('skip-button');

// --- 3. FUNCTIONS ---
// A function to display the current question.
function displayQuestion() {
    questionTextElement.textContent = questions[currentQuestionIndex];
}

// A function to move to the next question.
function nextQuestion() {
    // Move to the next index
    currentQuestionIndex++;
    
    // If we've run out of questions, loop back to the start
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }
    
    // Display the new question and clear the text box
    displayQuestion();
    storyInputElement.value = '';
}

// --- 4. EVENT LISTENERS ---
// What happens when you click the "Save & Next" button.
saveButton.addEventListener('click', () => {
    // Get the current question and the user's answer
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = storyInputElement.value;
    
    // Save the answer to the browser's local storage
    // It's a good practice to check if the answer isn't empty
    if (currentAnswer.trim() !== '') {
        localStorage.setItem(currentQuestion, currentAnswer);
        console.log(`Saved: ${currentQuestion} - ${currentAnswer}`);
        alert('Story Saved!'); // Simple confirmation for now
    }
    
    // Move to the next question
    nextQuestion();
});

// What happens when you click the "Skip" button.
skipButton.addEventListener('click', () => {
    // We don't save, just move to the next question
    nextQuestion();
});

// --- 5. INITIALIZATION ---
// Display the very first question when the page loads.
displayQuestion();