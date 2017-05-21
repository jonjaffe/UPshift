import { combineReducers } from 'redux';
import SessionReducer from './session_reducer'
import CarsReducer from './cars_reducer'
import FavoritesReducer from './favorites_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  cars: CarsReducer,
  favorites: FavoritesReducer
});

export default RootReducer;
