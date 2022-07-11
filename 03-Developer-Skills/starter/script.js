// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(`Max: ${max} Min: ${min}`);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(`The amplitude of the temperatures array is ${amplitude}`);

// //Challenge 2

// const calcTempAmplitudeNew = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(`Max: ${max} Min: ${min}`);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(`The amplitude of the temperatures array is ${amplitudeNew}`);

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// // Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// let arr = [5, 10, 15];

// const printForecast = function (arr) {
//   ar;
// };

// const thermometer = printForecast(arr);

// function printForecast(arr) {
//   //   Go through array
//   //   Keep track of index as a day
//   let day;
//   let msg = '';
//   for (let i = 0; i < arr.length; i++) {
//     day = i + 1;
//     msg += `${arr[i]}°C in ${day === 1 ? '1 day' : day + ' days'} ... `;
//   }
//   return msg;
// }

// console.log(printForecast([17, 21, 13]));
// console.log(printForecast([12, 5, -5, 0, 4]));

const calcTempAmplitudeBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`Max: ${max} Min: ${min}`);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(`The amplitude of the temperatures array is ${amplitudeBug}`);
