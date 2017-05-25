export const getAllTestDrives = () => {
  return $.ajax({url: '/api/test_drives', method: 'GET'})
}

export const getTestDrive = (id) => {
  return $.ajax({url: `/api/cars/${id}`, method: 'GET'})
}

export const postTestDrive = (testDrive) => {
  return $.ajax({url: '/api/test_drives', method: 'POST', data: testDrive})
}

export const deleteTestDrive = (id) => {
  return $.ajax({url: `/api/cars/${id}`, method: 'DELETE'})
}
