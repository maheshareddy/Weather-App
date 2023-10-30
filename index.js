const temperatueField = document.querySelector(".temp");
const cityField = document.querySelector(".location");
const dateFiled = document.querySelector(".time");
const emojiField = document.querySelector(".weather_icon");
const weatherField = document.querySelector(".condition");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "bangalore";
form.addEventListener("submit", search);
function search(e) {
  e.preventDefault();
  target = searchField.value;
  fetchData(target);
  console.log("This is working");
}

async function fetchData(target) {
  //one thread at a time
  try {
    let url = `http://api.weatherapi.com/v1/current.json?key=75f4c99710e446d7bb252146232810&q=${target}&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();
    let currentTemp = data.current.temp_c;
    let currntCondition = data.current.condition.text;
    let currentLocation = data.location.name;
    let localTime = data.location.localtime;
    let conditionEmoji = data.current.condition.icon;
    console.log(
      currentTemp,
      currntCondition,
      currentLocation,
      localTime,
      conditionEmoji
    );
    updateDOM(
      currentTemp,
      currentLocation,
      localTime,
      conditionEmoji,
      currntCondition
    );
  } catch (error) {
    console.log(error);
  }
}
function updateDOM(temp, locationName, time, emoji, condition) {
  temperatueField.innerText = temp;
  cityField.innerText = locationName;
  dateFiled.innerText = time;
  emojiField.src = emoji;
  weatherField.innerText = condition;
}
fetchData(target);
