import React, { useState, useEffect } from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
  section: string;
  status: 'answered' | 'marked' | 'not-visited' | 'not-answered';
  selectedOption: string | null;  
  correctanswer: string;
}



interface QuestionProps {
  question: Question;
  onAnswer: (id: number, answer: string) => void;
  onSaveAndNext: () => void;
  onMarkForReview: () => void;
  onClearResponse: () => void;
  onNavigate: (direction: 'next' | 'previous') => void;
}


const Questions: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  onSaveAndNext,
  onMarkForReview,
  onClearResponse,
  onNavigate
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(question.selectedOption);


  useEffect(() => {
    setSelectedOption(question.selectedOption);
  }, [question.selectedOption]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleSaveAndNext = () => {
    if (selectedOption !== null) {
      onAnswer(question.id, selectedOption);
    } else {
      onAnswer(question.id, ''); // or some default value like ''
    }
    onSaveAndNext();
  };
  
  

  return (
    <div className="bg-white rounded-md shadow-md py-10 px-16">
      <h2 className="mb-4 text-xl font-bold">Question {question.id}</h2>
      <p className="mb-6">{question.text}</p>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="form-radio"
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-20">
        <button
          className="p-2 bg-gray-500 text-white rounded-md"
          onClick={() => onNavigate('previous')}
        >
          Previous
        </button>
        <div className="space-x-4">
          <button
            className="p-2 bg-blue-500 text-white rounded-md"
            onClick={handleSaveAndNext}
          >
            Save & Next
          </button>
          <button
            className="p-2 bg-yellow-500 text-white rounded-md"
            onClick={onMarkForReview}
          >
            Mark for Review
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded-md"
            onClick={onClearResponse}
          >
            Clear Response
          </button>
        </div>
        <button
          className="p-2 bg-gray-500 text-white rounded-md"
          onClick={() => onNavigate('next')}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;
