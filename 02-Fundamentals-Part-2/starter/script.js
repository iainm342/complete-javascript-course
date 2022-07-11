// "use strict";
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} can retire in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// const friends = ["Paul", "Clair", "Nancy"];
// console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(years.length);
// console.log(friends[friends.length - 1]);
// console.log(friends[friends.length]);

// friends[2] = "Craig";
// console.log(friends);

// const iain = {
//   firstName: "Iain",
//   lastName: "Murray",
//   birthYear: 1974,
//   job: "delivery driver",
//   friends: ["Paul", "Clair", "Nancy"],
//   hasDriversLicense: true,
// calcAge: function (birthYear) {
//   return 2022 - birthYear;
// },
// calcAge: function () {
//   console.log(this);
//   return 2022 - this.birthYear;
// },
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${
//       this.hasDriversLicense === true
//         ? "a drivers license"
//         : "not got a drivers license"
//     }`;
//     return this.summary;
//   },
// };

// iain.calcAge();
// console.log(iain.calcAge());
// console.log(iain.age, iain);

// console.log(iain.lastName);
// console.log(iain.firstName + " " + iain.lastName);

// const sentence = `Iain has 3 friends, and his best friend is called Paul`;
// console.log(sentence);

// const dynamicSentence = `${iain.firstName} has ${iain.friends.length} friends, and his best friend is called ${iain.friends[0]}`;
// console.log(dynamicSentence);

// console.log(iain.getSummary());

// let iain = [
//   "Iain",
//   "Murray",
//   48,
//   "delivery driver",
//   ["paul", "clair", "nancy"],
//   true,
// ];
// // console.log(iain);

// let newArr = [];

// for (i = 0; i <= iain.length; i++) {
//   //   console.log(iain[i], typeof iain[i]);
//   //   newArr[i] = typeof iain[i];
//   newArr.push(typeof iain[i]);
// }

// console.log(newArr);
// console.log(iain[iain.length - 1]);
// console.log(iain.length);

// let years = [1974, 1985, 1996, 2001, 2011];
// console.log(years);

// let ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }

// console.log(ages);

// let iain = [
//   "Iain",
//   "Murray",
//   48,
//   "delivery driver",
//   ["paul", "clair", "nancy"],
// ];

// console.log(iain);
// console.log(iain.length);

// for (let i = iain.length - 1; i >= 0; i--) {
//   console.log(i, iain[i]);
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`For: Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`While: Lifting weights repetition ${rep}`);
//   rep++;
// }

// // console.log(dice);
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("loop about to end");
//   }
// }
