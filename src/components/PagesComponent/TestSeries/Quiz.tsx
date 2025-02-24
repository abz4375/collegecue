import React, { useState, useEffect } from "react";
import Questions from "./Questions";
import QuestionNavigator from "./QuestionNavigator";
import { QuestionsData } from "@/components/DummyData/TestseriesDummy";
import Modal from "@/components/Modals/QuizModal";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  text: string;
  options: string[];
  section: string;
  status: 'answered' | 'marked' | 'not-visited' | 'not-answered';
  selectedOption: string | null;
  correctanswer: string;
}

const Quiz = () => {
  const router = useRouter();
  const [time, setTime] = useState(QuestionsData[0].time);
  const [timerExpired, setTimerExpired] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Initialize questionData with selectedOption field
  const initialQuestionData = QuestionsData[0].question.map(question => ({
    ...question,
    selectedOption: null, // Ensure this is set to null
    status: question.status as 'answered' | 'marked' | 'not-visited' | 'not-answered',
  }));
  

  const [questionData, setQuestionData] = useState<Question[]>(initialQuestionData);

  const [showUserModal, setShowUserModal] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', phone: '', email: '' });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setTimerExpired(true);
          handleSubmit(); // Submit automatically when time expires
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      setTimerExpired(true);
    }
  }, [time]);

  const handleNavigation = (index: number) => {
    if (index >= 0 && index < questionData.length) {
      setCurrentQuestion(index);
    }
  };

  const handleAnswer = (id: number, answer: string) => {
    const updatedQuestions = [...questionData];
    const questionIndex = updatedQuestions.findIndex(q => q.id === id);
    if (questionIndex !== -1) {
      updatedQuestions[questionIndex].selectedOption = answer;
      updatedQuestions[questionIndex].status = answer ? 'answered' : 'not-answered';
      setQuestionData(updatedQuestions);
    }
  };

// const handleMarkForReview = (id: number,answer:string) => {
//   const updatedQuestions = [...questionData];
//   const questionIndex = updatedQuestions.findIndex(q => q.id === id);
//   updatedQuestions[questionIndex].selectedOption = answer;
//   updatedQuestions[questionIndex+1].status = 'marked';
//   setQuestionData(updatedQuestions);
// };

const handleMarkForReview = (id: number, answer: string) => {
  const updatedQuestions = [...questionData];
  const questionIndex = updatedQuestions.findIndex(q => q.id === id);

  if (questionIndex === -1) {
    console.error(`Question with id ${id} not found`);
    return;
  }

  // Update the selectedOption for the current question
  updatedQuestions[questionIndex].selectedOption = answer;

  // Check if the next question exists before marking its status
  if (questionIndex + 1 < updatedQuestions.length) {
    updatedQuestions[questionIndex + 1].status = 'marked';
  } else {
    console.warn(`No question to mark as reviewed after question id ${id}`);
  }

  setQuestionData(updatedQuestions);
};
 
 const handleclose = ()=>{
  router.push('/testseries')
  setShowScoreModal(false);
 }

  const handleSaveAndNext = () => {
    handleAnswer(questionData[currentQuestion].id, questionData[currentQuestion].selectedOption || '');
    handleNavigate('next');
  };

  const handleClearResponse = () => {
    const updatedQuestions = [...questionData];
   updatedQuestions[currentQuestion].selectedOption = null ;
   updatedQuestions[currentQuestion].status = 'not-visited'; // Mark as not answered when cleared
    setQuestionData(updatedQuestions);
  };

  const handleNavigate = (direction: 'next' | 'previous') => {
    const updatedQuestions = [...questionData];

    if (updatedQuestions[currentQuestion].selectedOption === null && updatedQuestions[currentQuestion].status !== 'marked') {
      updatedQuestions[currentQuestion].status = 'not-answered';
    }

    setQuestionData(updatedQuestions);

    if (direction === 'next') {
      setCurrentQuestion(prev => Math.min(prev + 1, updatedQuestions.length - 1));
    } else if (direction === 'previous') {
      setCurrentQuestion(prev => Math.max(prev - 1, 0));
    }
  };

  const handleSubmit = () => {
    setShowUserModal(true);
  };

  const handleUserDetailsSubmit = (details: { name: string, phone: string, email: string }) => {
    setUserDetails(details);
    calculateScore();
    setShowUserModal(false);
    setShowScoreModal(true);
  };

  const calculateScore = () => {
    let totalScore = 0;
    questionData.forEach(q => {
      const selectedOptionLetter = q.selectedOption ? q.selectedOption[0] : null; // Get only the first character of the selected option
      if ((q.status === 'answered' || q.status === 'marked') && selectedOptionLetter === q.correctanswer) {
        totalScore += 1; // Assuming each correct answer gives 1 point
      }
    });
    setScore(totalScore);
  };
  

  const extractSections = (data: typeof QuestionsData) => {
    const allQuestions = data[0].question;
    const sections = new Set<string>();
    allQuestions.forEach(q => sections.add(q.section));
    return Array.from(sections);
  };

  const sections = extractSections(QuestionsData);

  return (
    <div className="max-w-full mx-auto">
      <div className="w-full flex flex-col justify-center items-center p-8">
        <div className="w-full xl:w-full lg:w-full navmd:w-full mb-8 h-20 flex items-center justify-center flex-wrap bg-orange-400">
          <div className="text-3xl text-white font-bold mx-8">{QuestionsData[0].testname}</div>
        </div>
        <div className="flex space-x-4 w-full my-8 justify-between">
          <div className="w-[17%]">
            <QuestionNavigator
              questions={questionData}
              currentQuestion={currentQuestion}
              handleNavigation={handleNavigation}
              time={time}
            />
          </div>
          <div className="w-[60%]">
            <Questions
              question={questionData[currentQuestion]}
              onAnswer={handleAnswer}
              onSaveAndNext={handleSaveAndNext}
              onMarkForReview={() => handleMarkForReview(currentQuestion, questionData[currentQuestion].selectedOption || '')}
              onClearResponse={handleClearResponse}
              onNavigate={handleNavigate}
            />
          </div>
          <div className="w-[17%] flex justify-start items-start gap-4 h-32  flex-wrap">
            {sections.map((val: string, index: number) => (
              <button key={index} className="py-2 px-4 bg-blue-600 text-white text-xl rounded-xl">
                {val}
              </button>
            ))}
          </div>
        </div>
        <button
          className="p-4 bg-red-500 text-white rounded-md mt-8"
          onClick={handleSubmit}
        >
          Submit Quiz
        </button>
        {timerExpired && <div className="text-red-500">Time&apos;s up!</div>}

        {/* User Details Modal */}
        {showUserModal && (
          <Modal onClose={() => setShowUserModal(false)}>
            <div className="p-8">
              <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
              <input
                type="text"
                placeholder="Name"
                className="mb-4 p-2 border rounded w-full"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone"
                className="mb-4 p-2 border rounded w-full"
                value={userDetails.phone}
                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-4 p-2 border rounded w-full"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
              <button
                className="p-2 bg-blue-500 text-white rounded-md"
                onClick={() => handleUserDetailsSubmit(userDetails)}
              >
                Submit
              </button>
            </div>
          </Modal>
        )}

        {/* Score Modal */}
        {showScoreModal && (
          <Modal onClose={() => setShowScoreModal(false)}>
            <div className="p-8">
              <h2 className="text-xl font-bold mb-4">Quiz Summary</h2>
              <p>Name: {userDetails.name}</p>
              <p>Phone: {userDetails.phone}</p>
              <p>Email: {userDetails.email}</p>
              <p>Score: {score} / {questionData.length}</p>
              <p>Answered: {questionData.filter(q => q.status === 'answered').length}</p>
              <p>Marked for Review: {questionData.filter(q => q.status === 'marked').length}</p>
              <p>Not Answered: {questionData.filter(q => q.status === 'not-answered').length}</p>
              <p>Not Visited: {questionData.filter(q => q.status === 'not-visited').length}</p>
            </div>
            <button className="px-4 py-2 " onClick={handleclose}>
              Exit 
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Quiz;



//import React, { useState, useEffect } from "react";
//import Questions from "./Questions";
//import QuestionNavigator from "./QuestionNavigator";
//import { QuestionsData } from "@/components/DummyData/TestseriesDummy";
//
//interface Question {
//  id: number;
//  text: string;
//  options: string[];
//  section: string;
//  status: 'answered' | 'marked' | 'not-visited' | 'not-answered';
//  selectedOption: string | null;
//  correctanswer: string;
//}
//
//const Quiz = () => {
//  const [time, setTime] = useState(QuestionsData[0].time); // Set timer
//  const [timerExpired, setTimerExpired] = useState(false);
//
//  const [currentQuestion, setCurrentQuestion] = useState(0);
//  const [questionData, setQuestionData] = useState<Question[]>(QuestionsData[0].question);
//
//  useEffect(() => {
//    const timer = setInterval(() => {
//      setTime(prevTime => {
//        if (prevTime <= 1) {
//          clearInterval(timer);
//          setTimerExpired(true);
//          return 0;
//        }
//        return prevTime - 1;
//      });
//    }, 1000);
//
//    return () => clearInterval(timer);
//  }, []);
//
//  useEffect(() => {
//    if (time <= 0) {
//      setTimerExpired(true);
//    }
//  }, [time]);
//
//  const handleNavigation = (index: number) => {
//    if (index >= 0 && index < questionData.length) {
//      setCurrentQuestion(index);
//    }
//  };
//
//  //const handleMarkForReview = (index: number) => {
//  //  const updatedQuestions = [...questionData];
//  //  updatedQuestions[index].status = 'marked';
//  //  setQuestionData(updatedQuestions);
//  //};
//
//  const handleAnswer = (id: number, answer: string) => {
//    const updatedQuestions = [...questionData];
//    const questionIndex = updatedQuestions.findIndex(q => q.id === id);
//    if (questionIndex !== -1) {
//      updatedQuestions[questionIndex].selectedOption = answer;
//      updatedQuestions[questionIndex].status = answer ? 'answered' : 'not-answered';
//      setQuestionData(updatedQuestions);
//    }
//  };
//
// const handleMarkForReview = (id: number,answer:string) => {
//   const updatedQuestions = [...questionData];
//   const questionIndex = updatedQuestions.findIndex(q => q.id === id);
//   updatedQuestions[questionIndex].selectedOption = answer;
//   updatedQuestions[questionIndex+1].status = 'marked';
//   setQuestionData(updatedQuestions);
// };
//
//
//
//  const handleSaveAndNext = () => {
//    handleAnswer(questionData[currentQuestion].id, questionData[currentQuestion].selectedOption || '');
//  };
//
//  //const handleClearResponse = () => {
//  //  const updatedQuestions = [...questionData];
//  //  updatedQuestions[currentQuestion].selectedOption = undefined;
//  //    updatedQuestions[currentQuestion].status = 'not-answered';
////
//  //  setQuestionData(updatedQuestions);
//  //};
////
//  //const handleNavigate = (direction: 'next' | 'previous') => {
//  //  if (direction === 'next') {
//  //    handleNavigation(currentQuestion + 1);
//  //  } else if (direction === 'previous') {
//  //    handleNavigation(currentQuestion - 1);
//  //  }
//  //};
//
//  const handleClearResponse = () => {
//    const updatedQuestions = [...questionData];
//   updatedQuestions[currentQuestion].selectedOption = null ;
//   // updatedQuestions[currentQuestion].status = 'not-answered'; // Mark as not answered when cleared
//    setQuestionData(updatedQuestions);
//  };
//  
//  //const handleNavigate = (direction: 'next' | 'previous') => {
//  //  const updatedQuestions = [...questionData];
//  //  //if (updatedQuestions[currentQuestion].selectedOption === null) {
//  //  //  updatedQuestions[currentQuestion].status = 'not-answered'; // Mark as not answered if no option is selected
//  //  //}
//  //  setQuestionData(updatedQuestions);
//  //
//  //  if (direction === 'next') {
//  //    if (updatedQuestions[currentQuestion].selectedOption === null) {
//  //      updatedQuestions[currentQuestion].status = 'not-answered'; // Mark as not answered if no option is selected
//  //    }
//  //    setCurrentQuestion((prev) => Math.min(prev + 1, updatedQuestions.length - 1));
//  //  } else if (direction === 'previous') {
//  //    if (updatedQuestions[currentQuestion].selectedOption === null) {
//  //      updatedQuestions[currentQuestion].status = 'not-answered'; // Mark as not answered if no option is selected
//  //    }
//  //    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
//  //  }
//  //};
//
//  const handleNavigate = (direction: 'next' | 'previous') => {
//    const updatedQuestions = [...questionData];
//    
//    if (updatedQuestions[currentQuestion].selectedOption === null && updatedQuestions[currentQuestion].status !== 'marked') {
//      updatedQuestions[currentQuestion].status = 'not-answered';
//    }
//    
//    setQuestionData(updatedQuestions);
//  
//    if (direction === 'next') {
//      setCurrentQuestion(prev => Math.min(prev + 1, updatedQuestions.length - 1));
//    } else if (direction === 'previous') {
//      setCurrentQuestion(prev => Math.max(prev - 1, 0));
//    }
//  };
//  
//
//  const extractSections = (data: typeof QuestionsData) => {
//    const allQuestions = data[0].question;
//    const sections = new Set<string>();
//    allQuestions.forEach(q => sections.add(q.section));
//    return Array.from(sections);
//  };
//
//  const sections = extractSections(QuestionsData);
//
//  return (
//    <div className="max-w-full mx-auto">
//      <div className="w-full flex flex-col justify-center items-center p-8">
//        <div className="w-full xl:w-full lg:w-full navmd:w-full mb-8 h-20 flex items-center justify-center flex-wrap bg-orange-400">
//          <div className="text-3xl text-white font-bold mx-8">{QuestionsData[0].testname}</div>
//
//          
//        </div>
//        <div className="flex space-x-4 w-full my-8 justify-between">
//        <div className="w-[17%]">
//            <QuestionNavigator
//              questions={questionData}
//              currentQuestion={currentQuestion}
//              handleNavigation={handleNavigation}
//              time={time}
//            />
//          </div>
//          <div className="w-[60%]">
//            <Questions
//              question={questionData[currentQuestion]}
//              onAnswer={handleAnswer}
//              onSaveAndNext={handleSaveAndNext}
//              onMarkForReview={() => handleMarkForReview(currentQuestion)}
//              onClearResponse={handleClearResponse}
//              onNavigate={handleNavigate}
//            />
//          </div>
//          <div className="w-[17%] flex justify-start items-start gap-4 h-32  flex-wrap">
//           {sections.map((val:string,index:number)=>(
//            <button key={index} className="py-2 px-4 bg-blue-600 text-white text-xl rounded-xl">
//              {val}
//            </button>
//           ))}
//          </div>
//        </div>
//        {timerExpired && <div className="text-red-500">Time's up!</div>}
//      </div>
//    </div>
//  );
//};
//
//export default Quiz;
