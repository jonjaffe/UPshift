import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import omit from 'lodash/omit'


class TestDriveForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      car_id: "",
      focused: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleSubmit(e) {
    e.preventDefault()
    const test_drive = {car_id: this.props.car.id, date: this.state.date.format('LL')}
    // this.setState({car_id: this.props.car.id, date: this.state.date.format('L')}, () => {const test_drive = this.state
    this.props.postTestDrive({test_drive})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  render() {
    const { focused, date } = this.state;

    return (
      <div className='test-drive-form-container'>
        <form className='test-drive-form' onSubmit={this.handleSubmit}>
          <SingleDatePicker
            date={this.state.date}
            numberOfMonths={Number("1")}
            onDateChange={date => this.setState({ date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
          />
          <input type='submit' className='test-drive-button' value='Test Drive'></input>
        </form>
      </div>
    )
  }


}
// TestDriveForm.propTypes = propTypes
// TestDriveForm.defaultProps = defaultProps
export default TestDriveForm
