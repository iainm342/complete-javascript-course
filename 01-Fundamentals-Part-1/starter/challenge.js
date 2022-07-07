// /*Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall*/

// // const weightMark = 78;
// // const heightMark = 1.69;
// // const weightJohn = 92;
// // const heightJohn = 1.95;

// // const bmiMark = weightMark / heightMark ** 2;
// // console.log(bmiMark);
// // const bmiJohn = weightJohn / heightJohn ** 2;
// // console.log(bmiJohn);

// // const markHigherBMI = bmiMark >= bmiJohn;
// // console.log(markHigherBMI);

// // const weightMark2 = 95;
// // const heightMark2 = 1.88;
// // const weightJohn2 = 85;
// // const heightJohn2 = 1.76;

// // const bmiMark2 = weightMark2 / heightMark2 ** 2;
// // console.log(bmiMark2);
// // const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;
// // console.log(bmiJohn2);

// // const markHigherBMI2 = bmiMark2 >= bmiJohn2;
// // console.log(markHigherBMI2);

// // Use the BMI example from Challenge #1, and the code you already wrote, and
// // improve it.
// // Your tasks:
// // 1. Print a nice output to the console, saying who has the higher BMI. The message
// // is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// // BMI (28.3) is higher than John's (23.9)!"
// // Hint: Use an if/else statement �
// // GOOD LUCK �

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = Math.floor(weightMark / heightMark ** 2);
// console.log(bmiMark);
// const bmiJohn = Math.floor(weightJohn / heightJohn ** 2);
// console.log(bmiJohn);

// if (bmiMark >= bmiJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// if (bmiMark >= bmiJohn) {
//   console.log(
//     `Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})!`
//   );
// } else {
//   console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}!`);
// }

// const markHigherBMI = bmiMark >= bmiJohn;
// console.log(markHigherBMI);

// const weightMark2 = 95;
// const heightMark2 = 1.88;
// const weightJohn2 = 85;
// const heightJohn2 = 1.76;

// const bmiMark2 = Math.floor(weightMark2 / heightMark2 ** 2);
// console.log(bmiMark2);
// const bmiJohn2 = Math.floor(weightJohn2 / heightJohn2 ** 2);
// console.log(bmiJohn2);

// if (bmiMark2 >= bmiJohn2) {
//   console.log(`Mark's BMI ${bmiMark2} is higher than John's BMI ${bmiJohn2}!`);
// } else {
//   console.log(`John's BMI ${bmiJohn2} is higher than Mark's BMI ${bmiMark2}!`);
// }

// const markHigherBMI2 = bmiMark2 >= bmiJohn2;
// console.log(markHigherBMI2);

// const dolphScore1 = 96;
// const dolphScore2 = 108;
// const dolphScore3 = 89;
// const koalaScore1 = 88;
// const koalaScore2 = 91;
// const koalaScore3 = 110;

// const avDolph = (dolphScore1 + dolphScore2 + dolphScore3) / 3;
// console.log(avDolph);
// const avKoala = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
// console.log(avKoala);

// if (avDolph > avKoala) {
//   console.log(
//     `The team with the highest score is the Dolphins with a score of ${avDolph}!`
//   );
// } else if (avKoala > avDolph) {
//   console.log(
//     `The team with the highest score is the Koalas with a score of ${avKoala}!`
//   );
// } else {
//   console.log("It's a draw!");
// }

// const bdolphScore1 = 97;
// const bdolphScore2 = 112;
// const bdolphScore3 = 81;
// const bkoalaScore1 = 109;
// const bkoalaScore2 = 95;
// const bkoalaScore3 = 86;

// const bavDolph = (bdolphScore1 + bdolphScore2 + bdolphScore3) / 3;
// console.log(bavDolph);
// const bavKoala = (bkoalaScore1 + bkoalaScore2 + bkoalaScore3) / 3;
// console.log(bavKoala);

// if (bavDolph > bavKoala && bavDolph >= 100) {
//   console.log(
//     `The team with the highest score is the Dolphins with a score of ${bavDolph}!`
//   );
// } else if (bavKoala > bavDolph && bavKoala >= 100) {
//   console.log(
//     `The team with the highest score is the Koalas with a score of ${bavKoala}!`
//   );
// } else {
//   console.log("Nobody wins!");
// }

// const cdolphScore1 = 97;
// const cdolphScore2 = 112;
// const cdolphScore3 = 102;
// const ckoalaScore1 = 109;
// const ckoalaScore2 = 95;
// const ckoalaScore3 = 107;

// const cavDolph = (cdolphScore1 + cdolphScore2 + cdolphScore3) / 3;
// console.log(cavDolph);
// const cavKoala = (ckoalaScore1 + ckoalaScore2 + ckoalaScore3) / 3;
// console.log(cavKoala);

// if (cavDolph > cavKoala && cavDolph >= 100) {
//   console.log(
//     `The team with the highest score is the Dolphins with a score of ${cavDolph}!`
//   );
// } else if (cavKoala > cavDolph && cavKoala >= 100) {
//   console.log(
//     `The team with the highest score is the Koalas with a score of ${cavKoala}!`
//   );
// } else if (cavDolph === cavKoala) {
//   console.log("It's a draw and nobody wins!");
// }

// const day = "saturday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("invalid day");
// }

// const anotherDay = "Wedneday";

// if (anotherDay === "Monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (anotherDay === "Tuesday") {
//   console.log("prepare theory videos");
// } else if (anotherDay === "Wednesday" || anotherDay === "Thursday") {
//   console.log("write code examples");
// } else if (anotherDay === "Friday") {
//   console.log("record videos");
// } else if (anotherDay === "Saturday" || anotherDay === "Sunday") {
//   console.log("Enjoy the weekend!");
// } else {
//   console.log("Invalid day");
// }

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
// console.log(tip);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
