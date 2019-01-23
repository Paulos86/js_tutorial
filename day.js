function dayName(date){
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                      'Thursday', 'Friday', 'Saturday']
  return daysOfWeek[now.getDay()]
}

function greeting(date){
  return `Hello, world! Happy ${dayName(date)}.`
}
