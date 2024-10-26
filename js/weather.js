const weather = document.querySelector('.weather');
const temperature = document.querySelector('.weather__temperature');
const location = document.querySelector('.weather__location');

const API_KEY = '';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const COORDS = 'coords';

// 날씨 정보 받아오기 (localStorage 저장)
// 받아온 위치 정보에서 경도, 위도 따라서 날씨 api 요청 보내기
// 날씨 정보로 html 조작하기

function getWeather(lat, lon) {
  fetch(`${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      const temperatureData = Math.round(data.main.temp);
      const locationData = data.name;
      const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const icon = new Image(36, 36);
      temperature.innerText = `${temperatureData}℃`;
      icon.src = iconURL;
      weather.prepend(icon);
      location.innerText = locationData;
    })
    .catch(console.error);
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.error('Cannot access your location');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

export function getWeatherWithCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const { latitude, longitude } = JSON.parse(loadedCoords);
    getWeather(latitude, longitude);
  }
}
