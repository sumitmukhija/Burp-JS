function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  return ([latitude, longitude]);
  }

  function error() {
    return (Error('location not found'));
  }

    export function getLocation() {
        return navigator.geolocation.getCurrentPosition(success, error);     
    }