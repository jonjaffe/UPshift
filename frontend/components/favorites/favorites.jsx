import React from 'react'
import CarIndexItem from '../cars/car_index_item'


class Favorites extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul className='all-favorite-cars'>
          {this.props.favorites.map(car => <CarIndexItem car={car} key={car.id} favorited={true} postFavoriteCar={this.props.postFavoriteCar} deleteFavoriteCar={this.props.deleteFavoriteCar} />)}
        </ul>
        {JSON.stringify(this.props.favorites)}
      </div>
    )
  }
}

export default Favorites
