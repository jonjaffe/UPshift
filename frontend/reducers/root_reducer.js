import { combineReducers } from 'redux';
import SessionReducer from './session_reducer'
import CarsReducer from './cars_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  cars: CarsReducer
});

export default RootReducer;
