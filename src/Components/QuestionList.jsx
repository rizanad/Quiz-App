import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";

function QuestionList() {
  const questions = [
    {
      question: "What is the capital of Russia ?",
      options: ["Beijing", "Moscow", "Ottawa", "New Mexico"],
      answer: "Moscow",
    },
    {
      question: "What is the value of 2 + 2 ?",
      options: [4, 6, 7, 2],
      answer: 4,
    },
    {
      question: "Which is the most spoken language in the world ?",
      options: ["Spanish", "English", "Mandarin", "Russian"],
      answer: "Mandarin",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  function handleClick(option) {
    setCurrentAnswer(option);
    if (option == questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    // setCurrentAnswer(null)
  }
  function handleNextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer(null);
    } else {
      setQuizComplete(true);
    }
  }

  return (
    <div>
      <h1>Quiz</h1>

      {quizComplete ? (
        <div>
          <h2>Quiz Completed</h2>
          <h1>Your score is {score}</h1>
        </div>
      ) : (
        <div>
          <QuestionDisplay
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />

          <button
            disabled={currentAnswer == null}
            className={currentAnswer == null ? "button-disable" : "button"}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionList;
