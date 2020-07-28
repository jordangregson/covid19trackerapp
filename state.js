const states_url = "https://covidtracking.com/api/states";

async function getStateData() {
    const response = await fetch(states_url);
    const data = await response.json();

    //Finding the current location as longitude and latitude
    navigator.geolocation.getCurrentPosition(position => {

        //Using the Google Maps API to figure out the location 
        infoWindow = new google.maps.InfoWindow();

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                }
            
        

                    fetch(url)
                        .then(response => response.json())
                        .then(loc => {
                            console.log(loc);
                            let parts = loc.results[0].address_components;
                            parts.forEach(part => {
                                if (part.short_name.includes("PA")) {
                                    let test = document.getElementById("test");
                                    test.innerHTML = "This should change depending on the state: " + PA.negative;

                                }

                                else if (part.short_name.includes("MA")) {
                                    let test = document.getElementById("test");
                                    test.innerHTML = "This should change depending on the state: " + MA.negative;

                                }
                            })

                        })

                    fetch(url)
                        .then(response => response.json())
                        .then(loc => {

                            let parts = loc.results[0].address_components;
                            parts.forEach(part => {
                                if (part.types.includes("administrative_area_level_1")) {
                                    document.body.insertAdjacentHTML(
                                        "beforeend",
                                        `<p>State: ${part.short_name}</p>`
                                    );

                                }
                            });

                        })


                });

            //Turning every states array value into an integer
            console.log(data);
            const PA = data[41];
            const MA = data[21];



            let maNegative = document.getElementById("ma-negative");
            maNegative.innerHTML = "MA negative: " + MA.negative;

            let paNegative = document.getElementById("pa-negative");
            paNegative.innerHTML = "PA negative: " + PA.negative;


        }



        getStateData();
