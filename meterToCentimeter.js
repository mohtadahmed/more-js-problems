// 1 Meter = 100 Centimeter.

function meterToCentimeter(meters) {
    const centimeterValue = 100;
    const convertMeter = meters * centimeterValue;
    return convertMeter;    
}


const givenMeter = 30;

const convertMeterToCentimeter = meterToCentimeter(givenMeter);

console.log("Converted value is:",convertMeterToCentimeter, "cm");