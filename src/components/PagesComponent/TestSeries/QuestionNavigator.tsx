import React from 'react';

interface QuestionNavigatorProps {
  questions: Question[];
  currentQuestion: number;
  handleNavigation: (index: number) => void;
  time:number;
}

interface Question {
  id: number;
  status: 'answered' | 'marked' | 'not-visited' | 'not-answered';
}

const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  currentQuestion,
  handleNavigation,
  time
}) => {
  // Calculate the count for each status
  const statusCounts = questions.reduce(
    (acc, question) => {
      acc[question.status] = (acc[question.status] || 0) + 1;
      return acc;
    },
    { 'answered': 0, 'marked': 0, 'not-visited': 0, 'not-answered': 0 }
  );

  

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };


  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-md">
      <div className="text-center text-black">
            <span className="text-2xl">{formatTime(time)}</span>
          </div>
      <div className="grid grid-cols-2 place-items-start gap-8 my-8">
        <div className="flex justify-center items-center gap-2">
          <button className="p-2 text-xs font-semibold rounded-md bg-green-500"></button>
          <p>Answered ({statusCounts['answered']})</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="p-2 text-xs font-semibold rounded-md bg-purple-500"></button>
          <p>Mark for Review ({statusCounts['marked']})</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="p-2 text-xs font-semibold rounded-md bg-gray-500"></button>
          <p>Not visited ({statusCounts['not-visited']})</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="p-2 text-xs font-semibold rounded-md bg-red-500"></button>
          <p>Not Answered ({statusCounts['not-answered']})</p>
        </div>
      </div>

<div className="grid grid-cols-6 gap-2 mb-4">
        {questions.map((question, index) => (
          <button
            key={index}
            className={`p-2 text-xs font-semibold rounded-md ${
              question.status === 'answered' 
                ? 'bg-green-500 text-white' 
                : question.status === 'marked' 
                ? 'bg-purple-500 text-white' 
                : question.status === 'not-answered'
                ? 'bg-red-500 text-white'
                : 'bg-gray-500 text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div> 
    </div>
  );
};

export default QuestionNavigator;


//import React from 'react';
//
//interface QuestionNavigatorProps {
//  questions: Question[];
//  currentQuestion: number;
//  handleNavigation: (index: number) => void;
//}
//
//interface Question {
//  id: number;
//  status: 'answered' | 'marked' | 'not-visited' | 'not-answered';
//  section:string;
//}
//
//const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
//  questions,
//  currentQuestion,
//  handleNavigation,
//}) => {
//  // Calculate the count for each status
//  const statusCounts = questions.reduce(
//    (acc, question) => {
//      acc[question.status] = (acc[question.status] || 0) + 1;
//      return acc;
//    },
//    { 'answered': 0, 'marked': 0, 'not-visited': 0, 'not-answered': 0 }
//  );
//
//  const extractSections = (data: typeof questions) => {
//    const allQuestions = data;
//    const sections = new Set<string>();
//    allQuestions.forEach(q => sections.add(q.section));
//    return Array.from(sections);
//  };
//
//  const sections = extractSections(questions);
//
//  return (
//    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-md">
//      <div className='grid grid-cols-2 place-items-start gap-8 my-8'>
//        <div className='flex justify-center items-center gap-2'>
//          <button className='p-2 text-xs font-semibold rounded-md bg-green-500'></button>
//          <p>Answered ({statusCounts['answered']})</p>
//        </div>
//        <div className='flex justify-center items-center gap-2'>
//          <button className='p-2 text-xs font-semibold rounded-md bg-purple-500'></button>
//          <p>Mark for Review ({statusCounts['marked']})</p>
//        </div>
//        <div className='flex justify-center items-center gap-2'>
//          <button className='p-2 text-xs font-semibold rounded-md bg-gray-500'></button>
//          <p>Not visited ({statusCounts['not-visited']})</p>
//        </div>
//        <div className='flex justify-center items-center gap-2'>
//          <button className='p-2 text-xs font-semibold rounded-md bg-red-500'></button>
//          <p>Not Answered ({statusCounts['not-answered']})</p>
//        </div>
//      </div>
//      <div>
//        <select>
//        <option>
//      {sections.map(section => (
//              <button key={section} className="bg-[#337ab7] px-4 py-2 text-xl font-semibold text-white">
//                {section}
//              </button>
//            ))}
//            </option>
//            </select>
//      </div>
//    {/*  <div className="grid grid-cols-8 gap-2 mb-4">
//        {questions.map((question, index) => (
//          <button
//            key={index}
//            className={`p-2 text-xs font-semibold rounded-md ${
//              question.status === 'answered' 
//                ? 'bg-green-500 text-white' 
//                : question.status === 'marked' 
//                ? 'bg-purple-500 text-white' 
//                : question.status === 'not-answered'
//                ? 'bg-red-500 text-white'
//                : 'bg-gray-500 text-white'
//            }`}
//            onClick={() => handleNavigation(index)}
//          >
//            {index + 1}
//          </button>
//        ))}
//      </div> */}
//    </div>
//  );
//};
//
//export default QuestionNavigator;
