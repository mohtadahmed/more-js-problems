// 1 Mile = 1.60934 kilometer.


function mileToKilometer(miles) {
    const kilometerValue = 1.60934;
    const convertValue = miles * kilometerValue;
    return convertValue;
}


let givenMileValue = 12;

let convertMileToKilometer = mileToKilometer(givenMileValue);

console.log(givenMileValue,"Mile is equal to", parseFloat(convertMileToKilometer.toFixed(2)), "Kilometer");