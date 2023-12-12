//Add date display

$(document).ready(function displayDay() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
})


//Create an array of planner hours in DayJs format from 9am to 5pm

var emptyTimeArray = Array.from(new Array(18));

function converttoDayJs(x, i) {
  let hour = dayjs().hour(i).format('h A');
  return { hour };
};
let plannerHours = emptyTimeArray.map(converttoDayJs);

plannerHours.splice(0, 9);

console.log(plannerHours)

//Create a row for each planner hour

let store = window.localStorage;

function addRows() {
  let grid = $(
    `<form data-name="${addRows.text}" class="grid grid-cols-12  border-gray-500 "></form>.`
  );

  let hours = $(
    `<div class="hour">${addRows.text}</div>`
  );

  let textArea = $(
    `<textarea name="${addRows.text
    }" class="textarea ${color(
      addRows
    )}">${store.getItem(addRows.text) || ""}</textarea>`
  );

  textArea.keydown((e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      return false;
    }
  })
}
addRows()

//Colorcode function

function color(hours) {
  let currentHour = dayjs().format('h A');
  if (hours == currentHour) { "present" }
  else if (hours < currentHour) { "past" }
  else { "future" }
}