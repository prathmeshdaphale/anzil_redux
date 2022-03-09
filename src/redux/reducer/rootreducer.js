import { combineReducers } from "redux";
import CalReducer from './reducer'
import NamelistReducer from './assn2reducer'
import HandleReducer from './handleChange'

export default combineReducers({
  CalReducer,
  NamelistReducer,
  HandleReducer
});
