import React from 'react'
import CarIndexItem from '../cars/car_index_item'


class Favorites extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ul className='all-favorite-cars'>
          {this.props.favorites.map(car => <CarIndexItem car={car} key={car.id} />)}
        </ul>
        {JSON.stringify(this.props.favorites)}
      </div>
    )
  }
}

export default Favorites
