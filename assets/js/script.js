$(document).ready(function displayDay() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
})


var emptyTimeArray = Array.from(new Array(18));

let plannerHours = emptyTimeArray.map((x, i) => {
  let hour = dayjs().hour(i).format('H A');
  return { hour };
});

plannerHours.splice(0, 9);
console.log(plannerHours);
