let noOfchild = 2;
let noOfAdults = 1;
let noOfseniors = 1;

const child = 100;
const Adult = 150;
const senior = 120;

const childPrice = child * noOfchild;
const adultPrice = Adult * noOfAdults;
const seniorPrice = senior * noOfseniors;

const TotalPrice = childPrice + adultPrice + seniorPrice;

console.log(`The total ticket price is ${TotalPrice}`)