import React from 'react'
import CarIndexItem from './car_index_item'
import SearchFormContainer from '../search_form/search_form_container'

class CarIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {css_class: "loader", hidden_class: "hidden"}
  }

  componentDidMount() {
    this.props.getAllCars()
    setTimeout(() => this.setState({css_class: "", hidden_class: ""}), 2000)
  }


  render() {
    return (
      <div className="index">
        <section className="car_index">
          <SearchFormContainer count={this.props.cars.length} />
          <ul className={`all_cars ${this.state.hidden_class}`} >
            {this.props.cars.map(car => <CarIndexItem car={car} key={car.id} favorited={!!this.props.favorites[car.id]} postFavoriteCar={this.props.postFavoriteCar} deleteFavoriteCar={this.props.deleteFavoriteCar} />)}
          </ul>
        </section>
        <div className={`${this.state.css_class}`}>

        </div>
      </div>
    )
  }
}

export default CarIndex;
