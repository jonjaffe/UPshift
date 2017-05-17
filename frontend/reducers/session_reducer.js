import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";


const defaultState = {
  currentUser: null,
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
    default:
      return state;
  }
};

export default SessionReducer;
