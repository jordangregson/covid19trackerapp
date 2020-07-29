const us_url = "https://covidtracking.com/api/us";

//This adds commas to the numbers
const formatter = new Intl.NumberFormat('en');

async function getUSData() {
  const response = await fetch(us_url);
    const data = await response.json();

    const usTotalCases = document.getElementById("usTotalCases");
    usTotalCases.innerHTML = "Total Cases: " + formatter.format(data[0].total);

    const usPositive = document.getElementById("usPositive");
    usPositive.innerHTML = "Positive: " + formatter.format(data[0].positive);

    const usNegative = document.getElementById("usNegative");
    usNegative.innerHTML = "Negative: " + formatter.format(data[0].negative);

    const usDeathTotal = document.getElementById("usDeathTotal");
    usDeathTotal.innerHTML = "Deaths: " + formatter.format(data[0].death);

    const usHospitalized = document.getElementById("usHospitalized");
    usHospitalized.innerHTML = "Hospitalized: " + formatter.format(data[0].hospitalized);
    
    
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



getUSData();