const states_url = "https://covidtracking.com/api/states";

if(navigator.geolocation)

navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    $.get( "http://maps.googleapis.com/maps/api/geocode/json?1at1ng=" + position.coords.latitude + " ," + position.coords.longitude + "&sensor=false", function(data){
        console.log(data);
    })
})

else 
    console.log("this isnt working");
async function getStateData() {
    const response = await fetch(states_url);
    const data = await response.json();






    //Turning every states array value into an integer
    const PA = data[41];



    let stateDeaths = document.getElementById("state-deaths");
    stateDeaths.innerHTML = "Results were negative: " + PA.negative;

    
}



getStateData();
