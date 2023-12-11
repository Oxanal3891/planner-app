$(document).ready(function displayDay() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
})


var currentHour = dayjs().format('H'); 