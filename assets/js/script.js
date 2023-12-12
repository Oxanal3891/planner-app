//Declare variables
let container = $(".container");
let currentDay = dayjs().format('dddd, MMMM D')
let currentTime = { formatted: dayjs().format('h A'), hour: dayjs().format('HH') };
let store = window.localStorage;
let now = dayjs();


//Add date display

$(document).ready(function displayDay() {
  $('#currentDay').text(currentDay);
})

//Create an object of planner hours in DayJs format from 9am to 5pm

var emptyTimeArray = Array.from(new Array(18));

function converttoDayJs(x, i) {
  let formatted = dayjs().hour(i).format('h A')
  let hour = dayjs().hour(i).format('HH');
  return { formatted, hour };
};
let plannerHours = emptyTimeArray.map(converttoDayJs);

plannerHours.splice(0, 9);

console.log(plannerHours)
console.log(currentTime)

//Colorcode function

function colorCode(hours) {
  if (hours.formatted == currentTime.formatted) { return 'present' }
  else if (hours.hour < currentTime) { return 'past' }
  else { return 'future' }
}

//Create a grid template 

plannerHours.forEach((addRows) => {
  let grid = $(
    `<form class="grid grid-cols-12 row"></form>.`
  );

  let hours = $(
    `<div class="col-2 hour">${addRows.formatted}</div>`
  );

  let textArea = $(
    `<textarea name="${addRows.formatted}"
    class="col-8 textarea ${colorCode(addRows)}">${store.getItem(addRows.formatted) || ""}</textarea>`
  );

  //Prevent default on submit button
  textArea.keydown((e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      return false;
    }
  })

  //Add button
  let saveBtn = $(
    `<button type="submit" class="col-2 saveBtn"><i class="fas fa-save"></i></button>`
  );
  //Store value
  grid.submit((e) => {
    e.preventDefault();
    let value = $(`textarea[name="${addRows.formatted}"]`).val();
    store.setItem(addRows.formatted, value);
  });

  //Append columns
  grid.append(hours);
  grid.append(textArea);
  grid.append(saveBtn);

  container.append(grid);
})

