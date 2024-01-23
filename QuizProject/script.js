//  [
//   {
//     question: "Which is the largest animal in the world",
//     answers: [
//       { text: "shark", correct: false },
//       { text: "Blue Whale", correct: true },
//       { text: "Elephant", correct: false },
//       { text: "Giraffe", correct: false },
//     ],
//   },
//   {
//     question: "Which is the largest animal in the world",
//     answers: [
//       { text: "shark", correct: false },
//       { text: "Blue Whale", correct: true },
//       { text: "Elephant", correct: false },
//       { text: "Giraffe", correct: false },
//     ],
//   },
// ];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let score = 0;
let questions = "";
let currentQuestion = "";
let answers = [];
const apiUrl = "https://the-trivia-api.com/v2/questions?category='music'";

fetch(apiUrl)
  .then((res) => {
    if (!res.ok) {
      throw new Error("HTTPS error");
    } else {
      return res.json();
    }
  })
  .then((data) => {
    questions = data;
    console.log(questions);
    startQuiz();
  })
  .catch((error) => {
    // Handle errors
    console.error("Fetch error:", error);
    //   document.getElementById("output").textContent = "Error fetching data";
  });

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question.text;

  answers = currentQuestion.incorrectAnswers;
  let index = Math.floor(Math.random() * answers.length);
  // answers.push(currentQuestion.correctAnswer);
  answers.splice(index, 0, currentQuestion.correctAnswer);

  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;

    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer) {
      button.dataset.correct = answer;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect =
    selectedBtn.dataset.correct == currentQuestion.correctAnswer;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct == currentQuestion.correctAnswer) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out  of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
