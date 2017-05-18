import React from 'react';
import { Link } from 'react-router-dom';

class CarShow extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentDidMount() {
    this.props.getCar(this.props.match.params.carId)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.carId !== this.props.match.params.carId) {
      this.props.getCar(newProps.match.params.carId)
    }
  }

  render() {
    return (
      <div className="car_show">
        <h1>{this.props.car.make}</h1>
        <br/>
        <img src={this.props.car.image_url} />
      </div>
    )
  }
}
export default CarShow;
