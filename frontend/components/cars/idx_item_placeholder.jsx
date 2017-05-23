import React from 'react'
import { Link } from 'react-router-dom'

class CarIndexItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.favoriteButton = this.favoriteButton.bind(this)
  }

  favoriteButton() {
    if (this.props.favorited) {
      return (<button className='car-show-unfavorite-button' onClick={() => this.props.deleteFavoriteCar(this.props.car.id)}><i className="fa fa-heart" aria-hidden="true"></i></button>)
    } else {
      return (<button className='car-show-favorite-button' onClick={() => this.props.postFavoriteCar(this.props.car.id)}><i className="fa fa-heart-o" aria-hidden="true"></i></button>)
    }
  }

  render() {
    return (

        <li className="car-index-item">
          <Link to={`/cars/${this.props.car.id}`}>
            <div className="car-index-image" style={{backgroundImage: `url(${this.props.car.image_url})`}}>
              {this.favoriteButton()}
            </div>
            <span className='index-item-make'>{this.props.car.make}</span> {this.props.car.model}
              <div className="car-index-item-text">
                <p>
                  <span className='index-item-year'>{this.props.car.year}</span> <span className='index-mileage'>{this.props.car.mileage.toLocaleString()} miles</span>
                </p>
                <p className="car-index-item-price" id='idx-item-price' >${this.props.car.price.toLocaleString()}</p>
              </div>
            </Link>
          </li>

      )
    }
}

export default CarIndexItem;
// <button className='car-index-favorite-button' onClick={props.postFavoriteCar(props.car.id)}><i className="fa fa-heart-o" aria-hidden="true"></i></button>
