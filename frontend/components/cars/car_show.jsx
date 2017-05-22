import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel'

class CarShow extends React.Component {
  constructor(props) {
    super(props)
    this.favoriteButton = this.favoriteButton.bind(this)
  }

  componentDidMount() {
    this.props.getCar(this.props.match.params.carId)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.carId !== this.props.match.params.carId) {
      this.props.getCar(newProps.match.params.carId)
    }
  }

  favoriteButton() {
    if (!!this.props.favorites[this.props.car.id]) {
      return (<button onClick={() => this.props.deleteFavoriteCar(this.props.car.id)}>unfav</button>)
    } else {
      return (<button onClick={() => this.props.postFavoriteCar(this.props.car.id)}>fav</button>)
    }
  }

  render() {
    const year = "Year"
    const bodyStyle = "Body Style"
    const mileage = "Mileage"
    const transmission = "Transmission"
    const drivetrain = "Drivetrain"
    const formattedBodyStyle = () => {
      if (this.props.car.body_style === 'suv') {
        return 'SUV'
      } else {
        return this.props.car.body_style
      }
    }

    return (
      <div className="car-show">
        <img src={this.props.car.image_url} alt={this.props.car.model} className='car-show-image' />
        <section className="car-nav">
          <div className="car-nav-left">
            <div className="car-nav-basic-info">
              <h1 className="car-nav-name">
                {this.props.car.make} {this.props.car.model}
              </h1>
              <div className="car-nav-details">
                <p className="car-detail-yr">{this.props.car.year}</p> <p className="car-detail-miles">{this.props.car.mileage.toLocaleString()} miles</p>
              </div>
            </div>
            <div className="car-nav-price">
              ${this.props.car.price.toLocaleString()}
            </div>
          </div>
          <div className="car-nav-right">
            {this.favoriteButton()}
            <button className="test-drive-button">
              <span className="car-nav-test-drive-text">Test Drive</span>
            </button>
          </div>
        </section>
        <section className="car-show-detail">
          <h3>Details <span className="lower-case">for</span> {this.props.car.year} {this.props.car.make} {this.props.car.model}</h3>
          <table className="car-show-detail-table responsive-table ">
            <thead>
              <tr>
                {bodyStyle}
              </tr>
            </thead>
            <tbody className="car-show-detail-table-data">
              <tr>
                <td className="left-table-text">{year}</td>
                <td>{this.props.car.year}</td>
              </tr>
              <tr>
                <td className="left-table-text">{mileage}</td>
                <td>{this.props.car.mileage.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="left-table-text">{transmission}</td>
                <td>{this.props.car.transmission}</td>
              </tr>
              <tr>
                <td className="left-table-text">{drivetrain}</td>
                <td>{this.props.car.drivetrain.toUpperCase()}</td>
              </tr>
              <tr>
                <td className="left-table-text">{bodyStyle}</td>
                <td>{formattedBodyStyle()}</td>
              </tr>
            </tbody>
          </table>

        </section>
      </div>
    )
  }
}
export default CarShow;
// {/*}<button className="car-nav-favorite-button"><p className="car-nav-favorite-icon">♥</p></button>*/}
