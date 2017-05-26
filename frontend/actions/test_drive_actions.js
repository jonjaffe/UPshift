import * as TestDriveUtil from '../util/test_drive_api_util'

export const RECEIVE_ALL_TEST_DRIVES = 'RECEIVE_ALL_TEST_DRIVES'
export const RECEIVE_TEST_DRIVE = 'RECEIVE_TEST_DRIVE'
export const REMOVE_TEST_DRIVE = 'REMOVE_TEST_DRIVE'

export const receiveAllTestDrives = (testDrives) => {
  return {type: RECEIVE_ALL_TEST_DRIVES, testDrives: testDrives}
}

export const receiveTestDrive = (testDrive) => {
  return {type: RECEIVE_TEST_DRIVE, testDrive: testDrive}
}

export const removeTestDrive = (testDrive) => {
  return {type: REMOVE_TEST_DRIVE, testDrive: testDrive}
}

export const getAllTestDrives = () => (dispatch) => {
  return TestDriveUtil.getAllTestDrives().then((testDrives) => dispatch(receiveAllTestDrives(testDrives)))
}

export const getTestDrive = (id) => (dispatch) => {
  return TestDriveUtil.getTestDrive(id).then((res) => dispatch(receiveTestDrive(res)))
}

export const postTestDrive = (testDrive) => (dispatch) => {
  return TestDriveUtil.postTestDrive(testDrive).then((res) => dispatch(receiveTestDrive(res)))
}

export const deleteTestDrive = (id) => (dispatch) => {
  return TestDriveUtil.deleteTestDrive(id).then((res) => dispatch(removeTestDrive(res)))
}
