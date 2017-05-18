import { RECEIVE_CAR, RECEIVE_ALL_CARS } from '../actions/car_actions'

const defaultState = {
  0: {
    id: "",
    make: "",
    model: "",
    year: null,
    mileage: null,
    price: null,
    transmission: "",
    drivetrain: "",
    body_style: "",
    image_url: ""
  },
}

const CarsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_CARS:
      return action.cars
    case RECEIVE_CAR:
      return Object.assign(newState, {[action.car.id]: action.car})
    default:
      return state;
  }
}

export default CarsReducer
