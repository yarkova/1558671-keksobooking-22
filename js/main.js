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

const Price = {
  MIN: 1000,
  MAX: 10000,
}

const type = ['palace', 'flat', 'house', 'bungalow'];

const Rooms = {
  MIN: 1,
  MAX: 5,
}

const Guests = {
  MIN: 1,
  MAX: 50,
}

const Location  = {
  X: {
    MIN: 35.65000,
    MAX: 35.70000,
  },
  Y: {
    MIN: 139.70000,
    MAX: 139.80000,
  }
}

const checkin = ['12:00', '13:00', '14:00'];

const checkout = ['12:00', '13:00', '14:00'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const AMOUNT = 10;
const HUNDREDTH = 5;
const x = getRandomFloat(Location.X.MIN, Location.X.MAX, HUNDREDTH);
const y = getRandomFloat(Location.Y.MIN, Location.Y.MAX, HUNDREDTH);

function createData() {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`
    },
    offer: {
      title: 'Описание',
      address: {
        x,
        y,
      },
      price: getRandomInt(Price.MIN, Price.MAX),
      type: type[getRandomInt(0, type.length - 1)],
      rooms: getRandomInt(Rooms.MIN, Rooms.MAX),
      guests: getRandomInt(Guests.MIN, Guests.MAX),
      checkin: checkin[getRandomInt(0, checkin.length - 1)],
      checkout: checkout[getRandomInt(0, checkout.length -1)],
      features: features.slice(0, getRandomInt(1, features.length -1)),
      description: 'Просторная',
      photos: photos.slice(0, getRandomInt(1, photos.length -1)),
    },
      location: {
        x,
        y,
  }
}
}

const data = [];

for (let i = 0; i < AMOUNT; i++) {
data[i] = createData();
}

console.log(data);
