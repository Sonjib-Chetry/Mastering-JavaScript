

const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    category: "Math",
    question: "What is the square root of 64?",
    choices: ["6", "8", "10"],
    answer: "8"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare"
  }
];


function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

const selectedQuestion = getRandomQuestion(questions);

console.log("Question:", selectedQuestion.question);
console.log("Choices:", selectedQuestion.choices);



function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log("Computer's Choice:", computerChoice);



function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

const result = getResults(selectedQuestion, computerChoice);

console.log("Result:", result);