import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import internsReducer from './internsReducer'
import tempReducer from './tempReducer';

const rootReducer =  combineReducers({
    projects: projectsReducer,
    interns: internsReducer,
    temp: tempReducer
  });
  
export default rootReducer;