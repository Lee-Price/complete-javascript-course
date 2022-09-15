// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2022 - birthYear;

console.log(calcAge);
console.log(calcAge(1982));
*/

const measureKelvin = function() {
    const measurement = {
        type: `temp`,
        unit: `celcius`,

        // c) FIX
        // value: Number(prompt(`Degrees celcius:`))
        value: 10
    }

    // B) FIND
    console.table(measurement);

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}
// A) IDENTIFY
console.log(measureKelvin());