import React from 'react'
import { Link } from 'react-router-dom'

class TestDriveIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
      <li className='test-drive-index-item'>
        <p className='test-drive-index-text'>{this.props.cars[this.props.testDrive.car_id].model} {this.props.testDrive.date}</p>
        <button className='test-drive-index-cancel-button' onClick={() => this.props.deleteTestDrive(this.props.testDrive.id)}>&#10006;</button>
      </li>
    )
  }
}

export default TestDriveIndexItem
