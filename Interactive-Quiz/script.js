// Define an array of objects for quiz questions
const questions = [
    {
        question: "Which of the following is not a front-end programming language?",
        options: ["HTML", "CSS", "React", "Python"],
        correctAnswer: "Python"
    },
    {
        question: "Which technology is commonly used for server-side scripting in full-stack development?",
        options: ["React", "HTML", "Node.js", "Mongo DB"],
        correctAnswer: "Node.js"
    },
    {
        question: "What does CRUD stand for in the context of database operations?",
        options: ["Create, Retrieve, Update, Delete", "Compile, Run, Debug, Execute", "Copy, Read, Undo, Deploy",
         "Connect, Remove, Upload, Deploy"],
        correctAnswer: "Create, Retrieve, Update, Delete"
    },
    {
        question: "What does API stand for in web development?",
        options: ["Application Program Interface", "Advanced Programming Interface",
         "Automated Program Integration", "All of the above"],
        correctAnswer: "Application Program Interface"
    },
    {
        question: "Which version control system is widely used in software development for tracking changes in source code?What does API stand for in web development?",
        options: ["CSV", "Subversion","Git", "Mercurial"],
        correctAnswer: "Git"
    }
    
];

const questionContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-btn");
const scoreDisplay = document.getElementById("score");

let userAnswers = [];
let score = 0;

// Function to populate questions and options
function displayQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        
        q.options.forEach((option) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");
            optionDiv.textContent = option;
            questionDiv.appendChild(optionDiv);

            optionDiv.addEventListener("click", () => {
                // Highlight the selected option and deselect others
                q.options.forEach((opt) => {
                    optionDiv.classList.remove("selected");
                });
                optionDiv.classList.add("selected");

                // Store the user's answer
                userAnswers[index] = option;

                // Calculate score
                if (option === q.correctAnswer) {
                    score++;
                }
            });
        });

        questionContainer.appendChild(questionDiv);
    });
}

// Function to show the user's score
function displayScore() {
    scoreDisplay.textContent = `Score: ${score}/${questions.length}`;
}

// Event listener for the submit button
submitButton.addEventListener("click", () => {
    // Calculate and display the score
    displayScore();
});

// Initialize the quiz
displayQuestions();
