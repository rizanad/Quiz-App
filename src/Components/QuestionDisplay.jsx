import React from "react";

function QuestionDisplay({ question, options, handleClick, currentAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(option)}
              className={currentAnswer === option ? "selected" : "not-selected"}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuestionDisplay;
