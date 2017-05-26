import { connect } from 'react-redux'
import { postTestDrive } from '../../actions/test_drive_actions'
import TestDriveForm from './test_drive_form'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {postTestDrive: (testDrive) => dispatch(postTestDrive(testDrive))}
}

export default connect(null, mapDispatchToProps)(TestDriveForm)
