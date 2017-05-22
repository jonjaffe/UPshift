import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/session_actions";
import { RECEIVE_FAVORITE_CAR, REMOVE_FAVORITE_CAR } from '../actions/car_actions'
import merge from 'lodash/merge'


const defaultState = {
  currentUser: {id: null, email: null, favorites: {}},
  errors: []
};

export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newAction = merge({}, action)
      if (!newAction.user.favorites) {
        newAction.user.favorites = {}
      }
      let currentUser = newAction.user
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
      newState.currentUser.favorites[action.car.id] = action.car
      return newState
    case REMOVE_FAVORITE_CAR:
      delete newState.currentUser.favorites[action.car.id]
      return newState
    default:
      return state
  }
};

export default SessionReducer;
