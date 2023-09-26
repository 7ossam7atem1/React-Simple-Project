import React from "react";

const FrequentQuestion = ({ questions, toggleQuestion }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      {questions?.map((q, index) => (
        <div key={index} className="card mb-3">
          <div className="card-header" onClick={() => toggleQuestion(index)}>
            <h5 className="mb-0">
              {q.question}{" "}
              <button
                className={`btn btn-link float-right ${
                  q.isOpen ? "text-danger" : ""
                }`}
              >
                {q.isOpen ? "-" : "+"}
              </button>
            </h5>
          </div>
          {q.isOpen && (
            <div className="card-body">
              <p className="card-text">{q.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FrequentQuestion;
