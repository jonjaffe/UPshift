import React from 'react'
import TestDriveIndexItem from './test_drive_index_item'

class TestDriveIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllTestDrives()
  }

  // componentWillUpdate() {
  //     this.props.getAllTestDrives()
  //
  // }

  // componentWillMount() {
  //   this.props.getAllTestDrives()
  // }

  render() {
    return (
      <div className='test-drive-container'>
        <div className='test-drive-index-show-button'>
          Test Drives
        </div>
        <ul className='all-test-drives'>
          {this.props.testDrives.map(testDrive => <TestDriveIndexItem testDrive={testDrive} key={testDrive.id} cars={this.props.cars} deleteTestDrive={this.props.deleteTestDrive} testDriveScheduled={!![this.props.testDrives[testDrive.id]]} />)}
        </ul>
      </div>
    )
  }
}

export default TestDriveIndex
