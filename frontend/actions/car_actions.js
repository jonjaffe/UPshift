import * as CarUtil from '../util/car_api_util'

export const RECEIVE_CAR = "RECEIVE_CAR"
export const RECEIVE_ALL_CARS = "RECEIVE_ALL_CARS"
export const RECEIVE_FAVORITE_CAR = 'RECEIVE_FAVORITE_CAR'
export const REMOVE_FAVORITE_CAR = 'REMOVE_FAVORITE_CAR'

export const receiveAllCars = (cars) => {
  return {type: RECEIVE_ALL_CARS, cars: cars}
}

export const receiveCar = (car) => {
  return {type: RECEIVE_CAR, car: car}
}

export const receiveFavoriteCar = (car) => {
  return {type: RECEIVE_FAVORITE_CAR, car: car }
}

export const removeFavoriteCar = (car) => {
  return {type: REMOVE_FAVORITE_CAR, car: car}
}

export const getAllCars = () => (dispatch) => {
  return CarUtil.getAllCars().then((cars) => dispatch(receiveAllCars(cars)))
}

export const getCar = (id) => (dispatch) => {
  return CarUtil.getCar(id).then((res) => dispatch(receiveCar(res)))
}

export const getSearchCars = (searchObj) => (dispatch) => {
  return CarUtil.getSearchCars(searchObj).then((cars) => dispatch(receiveAllCars(cars)))
}

export const postFavoriteCar = (car_id) => (dispatch) => {
  return CarUtil.postFavoriteCar(car_id).then((car) => dispatch(receiveFavoriteCar(car)))
}

export const deleteFavoriteCar = (car_id) => (dispatch) => {
  return CarUtil.deleteFavoriteCar(car_id).then((car) => dispatch(removeFavoriteCar(car)))
}
