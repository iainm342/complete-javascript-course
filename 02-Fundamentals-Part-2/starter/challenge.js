// "use strict";

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// // console.log(calcAverage(10, 20, 30));

// let avgDolphins = calcAverage(44, 23, 71);
// console.log(avgDolphins);
// let avgKoalas = calcAverage(65, 54, 49);
// console.log(avgKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("Nobody wins!");
//   }
// }

// checkWinner(avgDolphins, avgKoalas);

// avgDolphins = calcAverage(85, 54, 41);
// console.log(avgDolphins);
// avgKoalas = calcAverage(23, 34, 27);
// console.log(avgKoalas);

// checkWinner(avgDolphins, avgKoalas);

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const tip = calcTip(44);
// console.log(tip);

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const markMiller = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const johnSmith = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(markMiller, johnSmith);
// console.log("mark BMI", markMiller.calcBMI());
// console.log("john BMI", johnSmith.calcBMI());

// const result =
//   markMiller.calcBMI() > johnSmith.calcBMI()
//     ? `${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s ${johnSmith.BMI}`
//     : `${johnSmith.fullName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.fullName}'s (${markMiller.BMI})`;

// console.log(result);
// console.log(markMiller);

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    tips.push(bills * 0.15);
  } else {
    tips.push(bills * 0.2);
  }
}

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

// Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it

const calcAverage = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(bills));

// console.log(`The average total for the bills array is ${avBill}`);
