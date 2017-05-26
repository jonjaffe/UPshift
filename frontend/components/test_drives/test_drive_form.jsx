import React from 'react';

class TestDriveForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      car_id: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({car_id: this.props.car.id}, () => {const test_drive = this.state
    this.props.postTestDrive({test_drive})})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  render() {
    return (
      <div className='test-drive-form-container'>
        <h2 className='test-drive-form-header'>
          Test drive this {this.props.car.make} {this.props.car.model}
        </h2>
        <form className='test-drive-form' onSubmit={this.handleSubmit}>
          <input type='date' className='test-drive-form-date-input' value={this.state.date} onChange={this.update('date')}></input>
          <input type='submit' className='test-drive-form-button' value='Book Test Drive'></input>
        </form>
      </div>
    )
  }


}

export default TestDriveForm
