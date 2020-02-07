let cutOffHour = "";
let cutOffDays = 1;
let editOrderbutton = document.querySelector("#edit-order");
let remainingTime = document.querySelector("#time-left");
let providedDate = document.querySelector("#input-date");
let bookedDate = document.querySelector("#booked-date");
let toggleEditOrder = document.querySelector(".toggle");

function getCutOffHour() {
  fetch("https://uk-live-support.lovespace.com/cutOffTime")
    .then(response => {
      return response.json();
    })
    .then(data => {
      cutOffHour = data.cutoffHour;
      restrictPastDateSelection();
      onClickStartCounter();
    });
}

//Prevent user from selecting past date
function restrictPastDateSelection() {
  var today = new Date();
  var currentHour = today.getHours();

  var cutOffDateIncreament = cutOffDays;

  if (cutOffHour < currentHour) {
    cutOffDateIncreament = cutOffDateIncreament + 1;
  }
  today.setDate(today.getDate() + cutOffDateIncreament);
  today = today.toISOString().split("T")[0];
  document.getElementsByName("date")[0].setAttribute("min", today);
}

function enableButtonAfterInput() {
  if (providedDate.value.length === 0) {
    editOrderbutton.disabled = true;
  } else {
    editOrderbutton.disabled = false;
  }
}
providedDate.addEventListener("click", function() {
  setInterval(enableButtonAfterInput, 1000);
});

function onClickStartCounter() {
  editOrderbutton.addEventListener("click", function() {
    setInterval(startCountDown, 1000);
  });
  document.getElementById("loader").style.display = "none";
}

getCutOffHour();

function CalculateCutOffTime(
  providedDate,
  cutOffDays,
  cutOffHour,
  cutOffMinute
) {
  let cutOffTimeAndDate = new Date(
    providedDate + " " + cutOffHour + ":" + cutOffMinute
  );
  cutOffTimeAndDate.setDate(cutOffTimeAndDate.getDate() - cutOffDays);
  return cutOffTimeAndDate.getTime();
}

let startCountDown = function timer() {
  //Get the current Date
  let today = new Date();

  // Get the booked date and display on the screen
  let userProvidedDate = providedDate.value;
  let endDate = new Date(userProvidedDate);
  bookedDate.innerHTML = endDate.toDateString();

  //Get the difference between the day user has given from the current time in milliseconds.
  let timeLeft =
    CalculateCutOffTime(userProvidedDate, cutOffDays, cutOffHour, 00) -
    today.getTime();
  let milliSecondsPerDay = 24 * 60 * 60 * 1000;

  //Translate the time left (currently in milliseconds) into days by dividing it by millisecond per day.
  let daysLeftDecimal = timeLeft / milliSecondsPerDay;
  //Turn daysLeftDecimal into a whole number
  daysLeft = Math.floor(daysLeftDecimal);

  //Get the hours left
  let hoursLeftDecimal = (daysLeftDecimal - daysLeft) * 24;
  let hoursLeft = Math.floor(hoursLeftDecimal);

  //Get the minutes left
  let minutesInDecimal = (hoursLeftDecimal - hoursLeft) * 60;
  let minutesLeft = Math.floor(minutesInDecimal);
  // minutesLeft = Math.floor((hoursLeftDecimal - hoursLeft) * 60);

  //Get seconds left
  let secondsLeft = Math.floor((minutesInDecimal - minutesLeft) * 60);

  //Show remaining time
  remainingTime.innerHTML = `${daysLeft} days, ${hoursLeft} hours,  ${minutesLeft} mins, ${secondsLeft} seconds`;

  // Hide the edit order button if cutt-off hour has passed
  if (daysLeft <= 0 && hoursLeft <= 0 && minutesLeft <= 0 && secondsLeft <= 0) {
    toggleEditOrder.classList.add("hidden");
  }
};
