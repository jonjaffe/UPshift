import { combineReducers } from 'redux';
import SessionReducer from './session_reducer'
import CarsReducer from './cars_reducer'
import TestDrivesReducer from './test_drives_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  cars: CarsReducer,
  testDrives: TestDrivesReducer
});

export default RootReducer;
