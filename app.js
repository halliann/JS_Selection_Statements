console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


// Exercise 1
let favoriteNumber = 7;
let guessedNumber = window.prompt("What is my favorite number?")

if (guessedNumber < favoriteNumber) {
  console.log("too low");
} else if (guessedNumber > favoriteNumber) {
  console.log("too high");
} else if (guessedNumber == favoriteNumber) {
  console.log("congratulations!!");
}

// Exercise 2
let birthMonth = window.prompt("What is your birth Month?")

switch (birthMonth) {
  case "March":
  case "April":
  case "May":
    console.log("You were born in the spring!");
    break;
  case "June":
  case "July":
  case "August":
    console.log("You're a summertime baby!");
    break;
  case "September":
  case "October":
  case "November":
    console.log("You were born in the fall!");
    break;
  case "December":
  case "January":
  case "February":
    console.log("You're a wintertime baby!");
  default:
    console.log("Hmmm. We don't recognize that month. Is it new?")
}


// Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

// switch-case 1
switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}


if (colorId == "BK") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

// switch-case 2
switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}


if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

// switch-case 3
switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);