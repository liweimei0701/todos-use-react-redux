import {combineReducers} from 'redux'
import {ADD_TO_DO,DELETE_TO_DO,TOOGLE_TO_DO,SET_VISILIBILITY} from '../actionType'
let id = 0
const todoreducer = (state=[],action) => {
  switch(action.type){
    case ADD_TO_DO:
      return [...state,{id:++id,text:action.text,done:false}];
      case DELETE_TO_DO:
        return state.filter(item => item.id !== action.id);
      case TOOGLE_TO_DO:
      return state.map(item =>
          item.id === action.id ? { ...item, done: !item.done } : { ...item }
          );
    default: 
      return state;
  }
}
const setVisibilityReducer = (state='all',action) => {
  switch(action.type){
    case SET_VISILIBILITY:
      return action.filter
    default:
      return state
  }

}
const rootReducer = combineReducers({todoreducer,setVisibilityReducer})
export default rootReducer