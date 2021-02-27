function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0, 100);


const getRandomFloat = function (min, max, hundredth) {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return ((Math.random() * (max - min)) + min).toFixed(hundredth)
};
getRandomFloat(1.1, 1.9, 3);
