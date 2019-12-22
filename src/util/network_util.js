export const getListings = (lat, lng, onComplete) => {
    let url = 'https://places.demo.api.here.com/places/v1/discover/search?q=restaurants&Geolocation=geo%3A' + lat + '%2C' + lng + '&Accept-Language=en-IN%2Cen-GB%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg';
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    xhr.onload = () => {
        let json = JSON.parse(xhr.responseText);
        let places = json.results.items;
        let rIndex = Math.floor(Math.random() * 10);
        onComplete(null, places[rIndex]);
    }

    xhr.onerror = () => {
        onComplete(xhr.response)
    }
}