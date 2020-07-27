const states_url = "https://covidtracking.com/api/states";



async function getStateData() {
    const response = await fetch(states_url);
    const data = await response.json();

    //Finding the current location as longitude and latitude
    navigator.geolocation.getCurrentPosition(position => {
    
        //Using the Google Maps API to figure out the location 
        const KEY = "AIzaSyDw5TFcEcRJw3Lh9Kc8U9vBfi21ZquZkpc";
        const LAT = position.coords.latitude;
        const LON = position.coords.longitude;
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LON}&key=${KEY}`;
    
        fetch(url)
            .then(response => response.json())
            .then(loc => {
                console.log(loc);
                let parts = loc.results[0].address_components;
                parts.forEach(part => {
                    if (part.short_name.includes("PA")) {
                        let test = document.getElementById("test");
                        test.innerHTML = PA.negative;
                            
                    }
                })
                
            })
            .catch(err => console.warn(err.message));
    });




    //Turning every states array value into an integer
    const PA = data[41];





    let stateDeaths = document.getElementById("state-deaths");
    stateDeaths.innerHTML = "Results were negative: " + PA.negative;


}



getStateData();
