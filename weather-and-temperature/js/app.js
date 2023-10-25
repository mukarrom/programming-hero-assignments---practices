// API Key
const API_KEY = `2890507c01a5d0b66f6e9faa24f773c4`;
// onclick function
const searchBtn = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

//Display Data
const displayData = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);

  //set weather icon
  const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imageIcon = document.getElementById("icon");
  imageIcon.setAttribute("src", iconUrl);

  console.log(temperature);
};
