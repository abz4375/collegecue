'use client';
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStep as reduxSetActiveStep, setCompletedStep } from './components/redux/action';
import RadioGroupRating from '../../RadioGroupRating';

// Define the steps for the stepper
const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6'];

const Steps: React.FC = () => {
  // State variables to track active step and completed steps
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<Record<number, boolean>>({});

  // Redux
  const dispatch = useDispatch();
  const reduxStep1 = useSelector((state: any) => state.register.step1);
  console.log(reduxStep1);

  // Function to get the total number of steps
  const totalSteps = () => {
    return steps.length;
  };

  // Function to get the number of completed steps
  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  // Check if it's the last step
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  // Check if all steps are completed
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  // Handler for moving to the next step
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  // Handler for moving to the previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Handler for clicking on a step button
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  // Handler for marking a step as completed
  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  // Handler for resetting the stepper
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // Function to render the form for the current step
  const renderFormForStep = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      case 4:
        return <StepFive />;
      case 5:
        return <StepSix />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className='max-w-full my-4'>
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 mb-8">
          {steps.map((label, index) => (
            <div key={label} className="flex flex-col items-center">
              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${completed[index] ? 'bg-green-500' : 'bg-gray-200'}
                  ${activeStep === index ? 'ring-2 ring-blue-500' : ''}`}
                onClick={handleStep(index)}
              >
                {index + 1}
              </button>
              <span className={`mt-2 ${activeStep === index ? 'font-bold text-blue-500' : 'text-gray-700'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={handleComplete}
            disabled={completed[activeStep]}
          >
            Complete Step {activeStep + 1}
          </button>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto my-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {allStepsCompleted() ? (
            <>
              <div className="flex items-center justify-between pt-2">
                <div></div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mt-4 mb-2 py-1">
                {renderFormForStep(activeStep)}
              </div>
              <div className="text-center">
                <p className="text-blue-500 font-semibold">
                  Rate Your Campus Life
                </p>
                <p className="text-gray-700">
                  Make it accurate considering all pros and cons
                </p>
              </div>
              <RadioGroupRating />
              <div className="flex items-center justify-between pt-2">
                <button
                  className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ${activeStep === 0 ? 'hidden' : ''}`}
                  onClick={handleBack}
                >
                  Back
                </button>
                <div></div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={handleNext}
                >
                  Next
                </button>
                {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <p className='inline-block'>
                    Step {activeStep + 1} already completed
                  </p>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Steps;