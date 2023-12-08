var dateDisplay = $('#currentDay');

function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM D');
  dateDisplay.text(rightNow);
}

var currentHour = dayjs().format('H');

console.log(currentHour);

setInterval(displayTime, 1000);