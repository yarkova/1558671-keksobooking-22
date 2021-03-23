const map = L.map('map')
.on('load', () => {
   console.log('Карта инициализирована')
 })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
);

marker.addTo(map);
