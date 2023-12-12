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
function color(hours) {
  if (hours.formatted == currentTime.hour) { 'present' }
  else if (hours.formatted < currentTime.formatted) { 'past' }
  else { 'future' }
}

//Create a grid template 

plannerHours.forEach((addRows) => {
  let grid = $(
    `<form data-name="${addRows.formatted}" class="grid grid-cols-12  row"></form>.`
  );

  let hours = $(
    `<div class="col-2 hour">${addRows.formatted}</div>`
  );

  let textArea = $(
    `<textarea name="${addRows.formatted
    }" class="col-8 textarea ${color(addRows)}">${store.getItem(addRows.formatted) || ""}</textarea>`
  );

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
  -1

  $('#btn').mouseover(function (e) {
    $(this).addClass('hoverState');
  }).mouseout(function (e) {
    $(this).removeClass('hoverState');
  });
  //
  grid.submit((e) => {
    e.preventDefault();
    let value = $(`textarea[name="${addRows.formatted}"]`).val();
    store.setItem(addRows.formatted, value);
  });


  grid.append(hours);
  grid.append(textArea);
  grid.append(saveBtn);

  container.append(grid);
})
