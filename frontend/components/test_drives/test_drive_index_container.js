import { connect } from 'react-redux'
import TestDriveIndex from './test_drive_index'
import {asArray} from '../../reducers/selectors'
import { deleteTestDrive, getAllTestDrives } from '../../actions/test_drive_actions'

const mapStateToProps = (state) => {
  return {
    testDrives: asArray(state.testDrives),
    cars: state.cars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTestDrives: () => dispatch(getAllTestDrives()),
    deleteTestDrive: (id) => dispatch(deleteTestDrive(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDriveIndex)
