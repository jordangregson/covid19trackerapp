const states_url = "https://covidtracking.com/api/states";

//Finding the current location as longitude and latitude
navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);


    //Using the Google Maps API to figure out the location
    const KEY = "AIzaSyDw5TFcEcRJw3Lh9Kc8U9vBfi21ZquZkpc";
    const LAT = position.coords.latitude;
    const LON = position.coords.longitude;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LON}&key=${KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let parts = data.results[0].address_components;
            parts.forEach(part => {
                if (part.types.includes("administrative_area_level_1")) {
                    document.body.insertAdjacentHTML(
                        'beforeend',
                        `<p>State: ${part.short_name}</p>`)
                }
            });
        })
        .catch(err => console.warn(err.message));
});




async function getStateData() {
    const response = await fetch(states_url);
    const data = await response.json();






    //Turning every states array value into an integer
    const PA = data[41];





    let stateDeaths = document.getElementById("state-deaths");
    stateDeaths.innerHTML = "Results were negative: " + PA.negative;


}



getStateData();
