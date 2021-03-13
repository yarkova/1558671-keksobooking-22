function getRandomInt(min, max) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(15, 100);


function getRandomFloat(min, max, hundredth) {
  min = Math.abs(min);
  max = Math.abs(max);
  hundredth = Math.abs(hundredth);
  if (max < min) {
    [min, max] = [max, min];
  }
  return ((Math.random() * (max - min)) + min).toFixed(hundredth);
}
getRandomFloat(1.1, 1.2, 3);

import {getRandomInt, getRandomFloat};
