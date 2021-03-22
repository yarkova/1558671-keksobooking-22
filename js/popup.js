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
  featuresElement.innerHTML = '';

  if (data.offer.features.length) {
    for (let i = 0; i < data.offer.features.length; i++) {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${data.offer.features[i]}`);
      featuresElement.appendChild(featureElement);
    }
  }

  descriptionElement.textContent = data.offer.description;
  photosElement.innerHTML = '';

  if (data.offer.photos.length){
    for (let i = 0; i < data.offer.photos.length; i++){
      const photoElement = document.createElement('img');
      photoElement.src = data.offer.photos[i];
      photosElement.appendChild(photoElement);
    }
  }

  avatarElement.src = data.author.avatar;


  console.log(popupClone);
  mapElement.appendChild(popupClone);
}




export {fillPopup};
