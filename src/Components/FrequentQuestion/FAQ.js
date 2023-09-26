import React, { useState } from "react";
import FrequentQuestion from "./FrequentQuestion";

function FAQ() {
  const [questions, setQuestions] = useState([
    {
      question: "Question 1?",
      answer: "Answer 1 goes here.",
      isOpen: false,
    },
    {
      question: "Question 2?",
      answer: "Answer 2 goes here.",
      isOpen: false,
    },
  ]);

  const toggleQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].isOpen = !updatedQuestions[index].isOpen;
    setQuestions(updatedQuestions);
  };

  return (
    <FrequentQuestion
      questions={questions}
      toggleQuestion={toggleQuestion}
    ></FrequentQuestion>
  );
}

export default FAQ;
