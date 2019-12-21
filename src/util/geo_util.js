export const getLocation = function (options) {
  console.log("Getting location..");
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}