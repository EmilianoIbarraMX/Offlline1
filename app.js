if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./Service-worker.js')
    .then(function (registration) {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch(function (error) {
      console.log('Error al registrar el Service Worker:', error);
    });
}
