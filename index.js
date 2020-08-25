// Your code here
function createEmployeeRecord(array){
  return {
    firstName: array[0],
    familyName: array[1],
    title:  array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(array){
  return array.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(obj, ds){
  let dateTime = ds.split(' ')
  obj.timeInEvents.push(
    {
      type: 'TimeIn',
      hour: parseInt(dateTime[1]),
      date: dateTime[0]
    })
    return obj
}

function createTimeOutEvent(obj, ds){
  let dateTime = ds.split(' ')
  obj.timeOutEvents.push(
    {
      type: 'TimeOut',
      hour: parseInt(dateTime[1]),
      date: dateTime[0]
    })
    return obj
}

function hoursWorkedOnDate(obj, ds){
  function time(element){
    return element.date === ds
  }
  
  
  let timeIn = obj.timeInEvents.find()
  let timeOut = obj.timeOutEvents.find()
  
  return
}





