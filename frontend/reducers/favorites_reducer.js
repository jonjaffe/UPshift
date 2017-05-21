import { RECEIVE_FAVORITE_CAR } from '../actions/car_actions'

const defaultState = {
  0: {
    id: "",
    make: "",
    model: "",
    year: 0,
    mileage: 0,
    price: 0,
    transmission: "",
    drivetrain: "",
    body_style: "",
    image_url: ""
  },
}

const FavoritesReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_FAVORITE_CAR:
      return Object.assign(newState, {[action.car.id]: action.car})
      default:
        return state
  }
}

export default FavoritesReducer
