import React from 'react'
import { Link } from 'react-router-dom'

const numberWithCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CarIndexItem = ({ car }) => (
  <li className="car-index-item">
    <div className="car-index-image" style={{backgroundImage: `url(${car.image_url})`}}>
      <div>heart</div>
    </div>
    <div className="car-index-item-text">
      <p>
        {car.make}
        {car.model}
        <br/>
        {car.year} {car.mileage} miles
      </p>
      <p>${car.price}</p>
    </div>
  </li>
)

export default CarIndexItem;
