function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;

  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temp} °C`;
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

let now = new Date();
let h4 = document.querySelector("h4");
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h4.innerHTML = day + " " + hour + ":" + minutes;
