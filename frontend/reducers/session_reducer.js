import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/session_actions";
import { RECEIVE_FAVORITE_CAR } from '../actions/car_actions'


const defaultState = {
  currentUser: {id: null, email: null, favorites: {}},
  errors: []
};

export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.user
      return {currentUser, errors: []};
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, {
      errors
    });
    case CLEAR_ERRORS:
      const newErrors = [];
      return Object.assign({}, state, {errors: newErrors})
    case RECEIVE_FAVORITE_CAR:
      let newState = Object.assign({}, state)
      newState.currentUser.favorites[action.car.id] = action.car
      return newState
    default:
      return state
  }
};

export default SessionReducer;
