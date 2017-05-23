import React from 'react'
import { Link } from 'react-router-dom'

const CarIndexItem = (props) => (
  <li className="car-index-item">
    <Link to={`/cars/${props.car.id}`}>
      <div className="car-index-image" style={{backgroundImage: `url(${props.car.image_url})`}}>
        <button className="car-index-favorite-button" onClick={() => props.favorited ? props.deleteFavoriteCar(props.car.id) : props.postFavoriteCar(props.car.id)}><i className={`fa fa-heart${props.favorited ? "" : "-o"}`} aria-hidden="true"></i></button>
      </div>
      <span className='index-item-make'>{props.car.make}</span> {props.car.model}
      <div className="car-index-item-text">
        <p>
          <span className='index-item-year'>{props.car.year}</span> <span className='index-mileage'>{props.car.mileage.toLocaleString()} miles</span>
        </p>
        <p className="car-index-item-price" id='idx-item-price' >${props.car.price.toLocaleString()}</p>
      </div>
    </Link>
  </li>
)

export default CarIndexItem;
// <button className='car-index-favorite-button' onClick={props.postFavoriteCar(props.car.id)}><i className="fa fa-heart-o" aria-hidden="true"></i></button>
