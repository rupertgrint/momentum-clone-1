import { setBackground } from './bg.js';
import { tickTime } from './time.js';
import { setQuote } from './quote.js';
import { displayGreeting } from './greeting.js';
import { addToDo } from './todo.js';
import { getWeatherWithCoords } from './weather.js';

function init() {
  setBackground();
  tickTime();
  setQuote();
  displayGreeting();
  addToDo();
  getWeatherWithCoords();
}

init();
