const sum = (a, b) => {
    return a + b;
}

const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    // convertimos el valor a yenes
    let valueInToYen = valueInDollar * 115.23;
    // retornamos el valor
    return valueInToYen;

}

const fromYenToPound = function (valueInToyen) {
     // convertimos el valor a pounds
    let valueInPound = valueInToyen * 0.0064;
    // retornamos el valor
    return valueInPound;
}




    module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


