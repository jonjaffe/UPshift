import { RECEIVE_ALL_TEST_DRIVES, RECEIVE_TEST_DRIVE, REMOVE_TEST_DRIVE } from '../actions/test_drive_actions'

const defaultState = {
  0: {
    id: 0,
    car_id: 0,
    user_id: 0
  },
}

const TestDrivesReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_TEST_DRIVES:
      return action.testDrives
    case RECEIVE_TEST_DRIVE:
      return Object.assign(newState, action.testDrive)
    case REMOVE_TEST_DRIVE:
      delete newState[Object.keys(action.testDrive)[0]]
      return newState
    default:
      return state;
  }
}

export default TestDrivesReducer
