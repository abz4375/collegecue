'use client';
import { combineReducers } from 'redux';
import { SET_ACTIVE_STEP, SET_COMPLETED_STEP } from './action';

const activeStepReducer = (state = 0, action:any) => {
  switch (action.type) {
    case SET_ACTIVE_STEP:
      return action.payload;
    default:
      return state;
  }
};

const completedReducer = (state = {}, action:any) => {
  switch (action.type) {
    case SET_COMPLETED_STEP:
      return {
        ...state,
        [action.payload]: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  activeStep: activeStepReducer,
  completed: completedReducer,
});

export default rootReducer;
