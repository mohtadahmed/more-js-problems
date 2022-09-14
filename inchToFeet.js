// Convert Inch to Feet


function inchToFeet(inches){
    const feetValue = 12;
    let convertValue = inches/ feetValue;
    return convertValue;
}

const valueToConvert = 144;
let myValue = inchToFeet(valueToConvert);

console.log("The conversion of the given value is:", parseFloat(myValue.toFixed(2)));