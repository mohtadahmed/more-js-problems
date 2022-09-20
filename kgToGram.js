// We know that, 1kg = 1000 gm.


function kgToGm(kilogram) {
    const gramValue = 1000;
    let kilogramToGram = kilogram * gramValue;
    return kilogramToGram;
}


const givenKilogram = 4.5;

const convertKilogramToGram = kgToGm(givenKilogram);

console.log("Your given value is shown in gram as:", convertKilogramToGram, "gm");