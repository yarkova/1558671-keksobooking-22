const popupTemplate = document.querySelector('#card').content;
const mapElement = document.querySelector('#map-canvas');

const Type = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};



function fillPopup(data) {
  const popupClone = popupTemplate.cloneNode(true);
  const titleElement = popupClone.querySelector('.popup__title');
  const addressElement = popupClone.querySelector('.popup__text--address');
  const priceElement = popupClone.querySelector('.popup__text--price');
  const typeElement = popupClone.querySelector('.popup__type');
  const capacityElement = popupClone.querySelector('.popup__text--capacity');
  const timeElement = popupClone.querySelector('.popup__text--time');
  const featuresElement =  popupClone.querySelector('.popup__features');
  const descriptionElement = popupClone.querySelector('.popup__description');
  const photosElement = popupClone.querySelector('.popup__photos');
  const avatarElement =  popupClone.querySelector('.popup__avatar');

  titleElement.textContent = data.offer.title;
  addressElement.textContent = `${data.offer.address.x} ${data.offer.address.y}`;
  priceElement.textContent = `${data.offer.price} ₽/ночь`;
  typeElement.textcontent = Type[data.offer.type];
  capacityElement.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  timeElement.textContent = `Заезд после ${data.offer.checkin} выезд до ${data.offer.checkout}`;
  featuresElement.innerHTML = data.offer.features;
  descriptionElement.textContent = data.offer.description;
  photosElement.innerHTML = data.offer.photos;
  avatarElement.src = data.author.avatar;



  console.log(popupClone);
  mapElement.appendChild(popupClone);
}




export {fillPopup};
