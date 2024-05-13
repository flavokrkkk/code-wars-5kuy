// const sumTwoSmallestNumbers = (numbers) => {
//   let srt = numbers.sort((a, b) => a - b);
//   return srt[0] + srt[1];
// };

sumTwoSmallestNumbers([15, 28, 4, 2, 43]);

// 00:01:01
//23 59 59
//
let time = h * 3600000 + m * 60000 + s * 1000;
console.log(time);

const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000;
past(1, 1, 1);

// const isTriangle = (a,b,c) =>  {
//     if (a + b > c && b + c > a) {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(isTriangle(7, 2, 2))

const isTriangle = (a, b, c) =>
  a + b > c && b + c > a && a + c > b ? true : false;
isTriangle(2, 6, 0);

const findShort = (s) => {
  let a = s.split(" ");
  return Math.min(...a.map((c) => c.length));
};

findShort("Let's travel abroad shall we");

let str = "bitcoin take over the world maybe who knows perhaps";

console.log(str.split(" "));

const areYouPlayingBanjo = (name) =>
  name[0].toLowerCase() === "R".toLowerCase()
    ? name + " plays banjo"
    : name + " does not play banjo";
areYouPlayingBanjo("aroma");

const calculateSpeed = (distance, time) => {
  let dist = parseInt(distance.replace(/[a-z]/gim, ""));
  let tim = parseInt(time.replace(/[a-z]/gim, ""));
  console.log(distance.substr("m"));
  return Math.round(
    distance.includes("km") ? dist / tim : (dist * 2.23694) / tim
  );
};

console.log(calculateSpeed("3km", "5min"));

let num = "100";
console.log(typeof parseInt(num));

const positiveSum = (arr) => {
  let newArr = arr.sort();
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < 0) {
      newArr.filter((el) => newArr[i] === el);
    } else {
      sum += newArr[i];
    }
  }
  return sum;
};

positiveSum([1, -2, 3, 4, 5]);

const cockroachSpeed = (s) =>
  s === 0 ? 0 : (s / 3.924).toFixed(1) * 100 + Number.EPSILON;
cockroachSpeed(0);

const removeEveryOther = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

const removeEveryOthers = (arr) => arr.filter((el, i) => i % 2 === 0);

removeEveryOthers(["Keep", "Remove", "Keep", "Remove", "Keep"]);

const spacey = (array) => {
  return array.reduce((a, b) => array.splice(" ", 0, a));
};

console.log(spacey(["i", "have", "no", "space"]));

const enough = (cap, on, wait) =>
  on + wait <= cap ? 0 : Math.abs(cap - (on + wait));

enough(100, 60, 50);

const booleanToString = (b) => `${b}`;
booleanToString(true);

const digitize = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((el) => parseInt(el));

digitize(352131);

const reverseSeq = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reverse();
};

reverseSeq(5);

const humanYearsCatYearsDogYears = (humanYears) => {};
console.log(humanYearsCatYearsDogYears(1));

const well = (x) =>
  x.filter((el) => el === "good").length === 1
    ? "Publish!"
    : x.filter((el) => el === "good").length === 2
    ? "Publish!"
    : x.filter((el) => el === "good").length > 2
    ? "I smell a series!"
    : "Fail!";

well(["good", "good", "good", "bad"]);

const solution = (str) => str.split("").reverse().join("");
solution("world");

const checkForFactor = (base, factor) => (base % factor === 0 ? true : false);
checkForFactor(10, 2);

const removeChar = (str) => str.slice(1, str.length - 1);
removeChar("place");

let ct = "place";
console.log(ct[0]);

const swithItup = (number) => {
  switch (number <= 9) {
    case number === 1:
      return "One";
    case number === 2:
      return "Two";
    case number === 3:
      return "Three";
    case number === 4:
      return "Four";
    case number === 5:
      return "Five";
    case number === 6:
      return "Six";
    case number === 7:
      return "Seven";
    case number === 8:
      return "Eight";
    case number === 9:
      return "Nine";
  }
};

swithItup(3);

const testEven = (n) => {
  if (n === 0) {
    return true;
  }
  let b = Math.abs(n);
  if (n < 1) {
    return false;
  } else if (b % 2 === 0) {
    return true;
  }
};
testEven(0.5);

const estEven = (n) =>
  !Number.isInteger(n) ? false : n % 2 === 0 ? true : false;
estEven(-4);

const sumArray = (array) => {
  if (Array.isArray(array) && array.length > 2) {
    array.splice(
      array.findIndex((c) => Math.max(...array) === c),
      1
    );
    array.splice(
      array.findIndex((c) => Math.min(...array) === c),
      1
    );
    return array.reduce((a, b) => a + b);
  } else {
    return 0;
  }
};
sumArray([]);

const toArr = [-1, -2, -3, -4, -5, -6, 7];
console.log(toArr.splice(2, 1));

const arr = [4, 3, 1, 7, 2].sort();
console.log(arr[arr.length - 1]);

const sumArrays = (array) => {
  let max = array[0];
  let min = array[0];
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = i;
    }
    if (min > array[i]) {
      min = i;
    }
  }
  array.splice(max, 1);
  array.splice(min, 1);
  return array.reduce((a, b) => a + b);
};

console.log(sumArrays([-6, -20, -1, -10, -12]));

const invert = (array) => array.map((el) => el && -el);
invert([1, 2, 3, -4]);

const stringToNumber = (str) => typeof Number(str);

stringToNumber("12345");

const toAlternatingCase = (str) => {
  let newStr;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      return (newStr = str[i].toLowerCase());
    } else {
      return (newStr += str[i].toUpperCase());
    }
  }
  return newStr;
};

console.log(toAlternatingCase("1a2b3c4d5e"));

const updateLight = (current) => {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
    default:
      return false;
  }
};

console.log(updateLight("yelloww"));

const smash = (words) => words.join(" ").replace(/,/g, " ");
smash(["this", "is", "a", "really", "long", "sentence"]);

const doubleChar = (str) =>
  str
    .split("")
    .map((el) => el + el)
    .join("");
doubleChar("Hello World");

function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}
repeatStr(5, "Hello ");

const stringToArray = (string) => string.split(" ");

stringToArray("Robin Singh");

//T=U

const DNAtoRNA = (dna) => {
  let rnk = dna.split("");
  for (let i = 0; i < rnk.length; i++) {
    if (rnk[i] === "T") {
      rnk.splice(i, 1, "U");
    }
  }
  return rnk.join("");
};
DNAtoRNA("TGT");

const getAge = (inputString) =>
  Number(inputString.replace(/[A-Z, a-z]/gim, ""));
getAge("4 years old");

const move = (position, roll) => roll * 2 + position;
move(2, 5);

const feast = (beast, dish) =>
  beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
    ? true
    : false;
feast("sgreat blue heron", "garlic naan");

const summation = (num) => {
  let sum = 1;
  for (let i = 1; i < num; i++) {
    sum += i + 1;
  }
  return sum;
};
summation(8);

const doubleInteger = (a) => a * a;
console.log(doubleInteger(2));

const greet = (language) => {
  const db = [
    { lang: "english", hi: "Welcome" },
    { lang: "czech", hi: "Vitejte" },
    { lang: "danish", hi: "Velkomst" },
    { lang: "dutch", hi: "Welkom" },
    { lang: "estonian", hi: "Tere tulemast" },
    { lang: "finnish", hi: "Tervetuloa" },
    { lang: "flemish", hi: "Welgekomen" },
    { lang: "french", hi: "Bienvenue" },
    { lang: "german", hi: "Willkommen" },
    { lang: "irish", hi: "Failte" },
    { lang: "italian", hi: "Benvenuto" },
    { lang: "latvian", hi: "Gaidits" },
    { lang: "lithuanian", hi: "Laukiamas" },
    { lang: "polish", hi: "Witamy" },
    { lang: "spanish", hi: "Bienvenido" },
    { lang: "swedish", hi: "Valkommen" },
    { lang: "welsh", hi: "Croeso" },
  ];
  let res = db.filter((hi) => language === hi.lang);
  return `${res[0].hi}, Your function should have returned ${res[0].hi}`;
};

greet("swedish");

const finalGrade = (exam, projects) =>
  exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;

console.log(finalGrade(22, 22));

const countSheeps = (sheep) => sheep.filter((c) => c === true).length;
countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]);

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump;
zeroFuel(50, 25, 2);

const reverseList = (list) => list.reverse();
reverseList([1, 2, 3, 4]);

const between = (a, b) => {
  let arr = [];
  let length = Math.abs(a) + Math.abs(b);
  let bool = a < 0 || b < 0 ? length - 1 : a + b;
  console.log(bool);
  console.log(length);
  for (let i = a; i < b + 1; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(between(-10, 10));

const peopleWithAgeDrink = (old) => {
  switch (old > 0) {
    case old <= 13:
      return "drink toddy";
    case old <= 17:
      return "drink coke";
    case old <= 18:
      return "drink beer";
    case old <= 20:
      return "drink beer";
    case old <= 30:
      return "drink whisky";
  }
};

console.log(peopleWithAgeDrink(22));

function unusualFive() {
  return 5;
}
console.log(
  unusualFive(
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/"
  )
);

class SmallestIntegerFinder {
  findSmallestInt(args) {
    console.log("ghbdftmn");
  }
}
console.log(SmallestIntegerFinder.findSmallestInt([34, 15, 88, 2]));

const rentalCarCost = (d) =>
  d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
rentalCarCost(5);

const century = (year) => {
  switch (year > 0) {
    case year <= 100:
      return 1;

    case year >= 101:
      return 2;

    case year >= 201:
      return 3;

    case year >= 301:
      return 4;

    case year >= 401:
      return 4;
  }
};

console.log(century(301));

const countSheep = (num) => {
  let sheep = "";
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...`;
  }
  return sheep;
};

countSheep(4);

const square = (num) => num ** 2;
square(2);

const nameShuffler = (str) => str.split(" ").reverse();
nameShuffler();

const fakeBin = (x) => x.split("").map((el) => (el < 5 ? 0 : 1));
fakeBin("45385593107843568");

const makeUpperCase = (str) => str.toUpperCase();
makeUpperCase("hello");

const otherAngle = (a, b) => 180 - (a + b);

const howMuchILoveYou = (nbPetals) => {
  let arr = [];
  petail = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  for (let i = 0; i < nbPetals; i++) {
    arr.push(petail[i]);
  }
  return arr.filter((c) => c !== undefined);
};
console.log(howMuchILoveYou(10));

const hoopCount = (n) =>
  n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
hoopCount(11);

const reverse = (string) => string.split(" ").reverse().join(" ");
console.log(reverse("no one cares"));

const sumMix = (x) => {
  let newArr = x.map((el) => Number(el));
  return newArr.reduce((a, b) => a + b);
};
sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);

const totalGoals = (laLigaGoals, championsLeagueGoals, copaDelReyGoals) =>
  laLigaGoals + championsLeagueGoals + copaDelReyGoals;
totalGoals(43, 10, 5);

const countPositivesSumNegatives = (input) => {
  if (input === null || input.length === 0) {
    return [];
  }
  let yes = [];
  let no = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      no += input[i];
    }
    if (input[i] > 0) {
      yes.push(input[i]);
    }
  }
  return [yes.length, no];
};

countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);

const check = (a, x) => a.includes(x);
check([66, 101], 66);

const simpleMultiplication = (n) => (n % 2 === 0 ? n * 8 : n * 9);
simpleMultiplication(8);

const twoSort = (s) => s.sort()[0].split("").join("***");

twoSort([
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]);

const smallEnough = (a, limit) => {
  let bool = true;
  let boolArr = a.map((el) => el <= limit);
  for (let i = 0; i < boolArr.length; i++) {
    if (boolArr[i] === false) {
      bool = false;
    }
  }
  return bool;
};
smallEnough([101, 45, 75, 105, 99, 107], 107);

const solve = (s) => {
  let upper = [];
  let lower = [];
  s.split("").map((el) =>
    el === el.toUpperCase() ? upper.push(el) : lower.push(el)
  );
  return lower.length >= upper.length ? s.toLowerCase() : s.toUpperCase();
};
solve("Code");

const gimme = (triplet) => {
  let sortArr = [...triplet].sort((a, b) => a - b);
  let middle = Math.floor(sortArr.length / 2);
  return triplet.findIndex((c) => c === sortArr[middle]);
};
gimme([3, 4, 2]);

let saa = [3, 4, 1];
console.log(saa.findIndex((c) => c === 3));

const sequenceSum = (begin, end, step) => {
  let last = 0;
  for (let i = 0; i < end; i++) {
    last = +begin + (begin + step) + end;
  }
  return last;
};

console.log(sequenceSum(1, 5, 1));

const arithmetic = (a, b, operator) =>
  operator === "add"
    ? a + b
    : operator === "subtract"
    ? a - b
    : operator === "multiply"
    ? a * b
    : operator === "divide"
    ? a / b
    : false;
arithmetic(8, 2, "divide");

console.log(8 / 2);

const toBinary = (n) => Number(n.toString(2));
toBinary(2);

const howManyLightsabersDoYouOwn = (name) => (name === "Zach" ? 18 : 0);
howManyLightsabersDoYouOwn("Zach");

const getRealFloor = (n) => (n <= 0 ? n : n < 13 ? n - 1 : n - 2);
getRealFloor(0);

const distinct = (a) => {
  let arr = [];
  const uniqArray = a.filter((item, index) => {
    arr.push({ item, index, indexOf: a.indexOf(item) });
    return index === a.indexOf(item);
  });
  return uniqArray;
};
distinct([1, 1, 3, 4, 6, 1]);

const mxdiflg = (a1, a2) => {
  let s1 = a1.length;
  let s2 = a2.length;
  console.log(s1, s2);
  return Math.abs(s1 + s2);
};

mxdiflg(
  [
    "hoqq",
    "bbllkw",
    "oox",
    "ejjuyyy",
    "plmiis",
    "xxxzgpsssa",
    "xxwwkktt",
    "znnnnfqknaz",
    "qqquuhii",
    "dvvvwz",
  ],
  ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
);

const findNextSquare = (sq) =>
  Number.isInteger(Math.sqrt(sq))
    ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
    : -1;

findNextSquare(625);

const stray = (numbers) => {
  let dd = numbers[0];
  let ff = numbers.filter((c) => c !== dd);
};

console.log(stray([2, 1, 2]));

const capitals = (word) =>
  word
    .split("")
    .filter((el) => el === el.toUpperCase())
    .map((el) => word.indexOf(el));
capitals("CodEWaRs");

const betterThanAverage = (classPoints, yourPoints) =>
  classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints
    ? true
    : false;
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);

const removeSmallest = (numbers) => {
  let minNum = [...numbers];
  let nn = Math.min(...minNum);
  let nnIndex = minNum.findIndex((c) => c === nn);
  minNum.splice(nnIndex, 1);
  return minNum;
};

removeSmallest([2, 2, 1, 2, 1]);

const factorial = (n) => {
  if (n < 1) {
    return 1;
  }

  return factorial(n - 1) * n;
};
factorial(4);

// const highAndLow = (numbers) => [Math.max(Number(...numbers.split(''))), Math.min(Number(...numbers.split('')))]
// console.log(highAndLow('1 2 3 4 5'))
// const highAndLow = (numbers) => numbers.replaceAll(' ', '').split('').reduce((a) => parseInt(a))
// console.log(highAndLow('1 2 3 4 5'))

// const highAndLow = (numbers) => {
//   let arr = numbers.replaceAll(' ', '').split('')
//   let ff = []
//   for(let i = 0; i < arr.length; i++) {
//     ff.push(Number(arr[i]))
//   }
//   let max = Math.max(...ff)
//   let min = Math.min(...ff)

//   return [max, min].join(' ')
// }
// console.log(highAndLow('-1 2 3 4 5'))

const highAndLow = (numbers) => {
  let arr = numbers.replaceAll(" ", "").split("");
  // sort((a, b) => a - b)[numbers[numbers.length - 1, numbers[0]]]
  return arr.sort((a, b) => a - b);
};
console.log(highAndLow("1 9 3 4 -5"));

// let dff = parseInt('1 9 3 4 -5')
// console.log(dff)

let dff = "Item 1-23".match(/\d+/); // Ищем цифры!
let result = dff ? parseInt(dff[0], 10) : null;
console.log(result);

function main(verb, noun) {
  return verb + noun;
}

const findMultiples = (integer, limit) => {
  let lim = Math.round(limit / integer);
  let result = [];
  for (let i = 1; i < lim + 1; i++) {
    if (integer * i <= limit) {
      result.push(integer * i);
    }
  }
  return result;
};
findMultiples(1, 2);

const sumOfMinimums = (arr) =>
  arr.map((el) => Math.min(...el)).reduce((a, b) => a + b);

sumOfMinimums([
  [11, 12, 14, 54],
  [67, 89, 90, 56],
  [7, 9, 4, 3],
  [9, 8, 6, 7],
]);

const sayHello = (name, city, state) =>
  `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}`;

sayHello(["Wallace", "Russel", "Osbourne"], "Albany", "New York");

const flattenAndSort = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(...array[i]);
  }
  return arr.sort((a, b) => a - b);
};
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]);

const multiTable = (number) => {
  let res = [];
  for (let i = 1; i < 10; i++) {
    res.push(`${i} * ${number} = ${number * i}`);
  }
  return res.join("\n");
};

multiTable(5);

const expressionMatter = (a, b, c) => {
  let one = a * (b + c);
  let two = a * b * c;
  let three = a + b * c;
  let four = (a + b) * c;
  let five = a + b + c;
  return Math.max(one, two, three, four, five);
};
expressionMatter(1, 1, 1);

const sumDigits = (number) => {
  let numm = Math.abs(number);
  return Number(`${numm}`.split("").reduce((a, b) => Number(a) + Number(b)));
};
sumDigits(0);

function countBy(x, n) {
  let arr = [];
  let mm = x * n;
  for (let i = x; i <= mm; i++) {
    if (i % x === 0) {
      arr.push(i);
    }
  }
  return arr;
}

countBy(2, 5);

const maps = (x) => x.map((a) => a * 2);
maps([1, 2, 3]);

// const plural = (n) => n === 0  ? true : `${n}`.split('').length === 1 ? false : true
// plural(0.5)

function plural(n) {
  return n !== 1;
}

console.log(plural(4));

const getSum = (a, b) => {
  let sum = a + b;
  for (let i = a; i < b - 1; i++) {
    sum += i;
  }
  return sum;
};
console.log(getSum(-1, 2));

function minValue(values) {
  return values.filter((el, i) => values.find((e) => e) === el);
}

console.log(minValue([5, 7, 5, 9, 7]));

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  let dateCurrent = currentDate.replace(/[\.,%]/gim, "").split(" ");
  let dateExpiration = expirationDate.replace(/[\.,%]/gim, "").split(" ");

  let monthCurrent = dateCurrent[0].length;
  let dayCurrent = dateCurrent[1];
  let yearCurrent = dateCurrent[2];

  let monthExpiration = dateExpiration[0].length;
  let dayExpiration = dateExpiration[1];
  let yearExpiration = dateExpiration[2];
  console.log(monthCurrent);
  console.log(monthExpiration);
  let bool =
    yearCurrent === yearExpiration && monthCurrent >= monthExpiration
      ? dayCurrent <= dayExpiration
      : dayCurrent >= dayExpiration;

  return enteredCode === correctCode && bool;
};
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));

const reverseWords = (str) =>
  str
    .split(" ")
    .map((el) => el.split("").reverse())
    .join(" ")
    .replace(/[,]/g, "");
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

const sumOfDifferences = (arr) => {
  if (arr.length <= 1) return 0;
  const sortArr = arr.sort((a, b) => b - a);
  return Math.max(...sortArr) - Math.min(...sortArr);
};
sumOfDifferences([-3, -2, -1]);

// const checkExam = (array1, array2) => {
//   let checkedArr = []
//   let checkArr = array1.filter((res, i) => res === array2[i] || array2[i] === '' ? checkedArr.push(array2[i]) : 0)
//   console.log(checkedArr.length)
//   console.log(checkArr.length)
//   return checkedArr.length !== array1.length ? (checkArr.length * 4) - (array1.length - checkedArr.length) : checkedArr.length * 4
// }

// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))

// const checkExam = (array1, array2) => {
//   let checked = array2.filter(el => el !== '')

//   let result = array1.filter((el, i) => el === checked[i])
//   let noResult = array1.filter((el, i) => el !== checked[i])

//   if(result.length <= 0 || noResult.length > result.length) return 0
//   return array1.length !== result.length ? (result.length * 4)  - noResult.length : result.length * 4
// }

// console.log(checkExam(["b","c","b","a","a","a","c","b","c","c","b","a","c","b","a","b","b"], ["b","b","c","c","a","b","a","a","","b","c","c","b","c","c","","a"]))

// const checkExam = (array1, array2) => {
//       if(array1.length !== array2.length) return 0
//       let result = []
//       for(let i = 0; i < array1.length; i++) {
//           if(array1[i] === array2[i] || array2[i] === '') {
//             result.push(array2[i])
//           }
//       }
//       let ball = result.map((el, ) => el !== '' ? result.length - 1 * 4 : result.length * 4 )
//       return ball
// }

// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))

const number = (array) => array.map((el, i) => `${i + 1}: ${el}`);

number(["a", "b", "c"]);

function whatday(num) {
  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return days[num] !== undefined
    ? days[num]
    : "Wrong, please enter a number between 1 and 7";
}

whatday(11);

const array = (string) => {
  let arr = string.replace(/[,]/gim, " ").split(" ");
  console.log(arr);
  if (arr.length < 3) return null;
  let d = arr.pop();
  let db = arr.shift();
  return arr.join(" ");
};
array("A,1,23,456,78,9,Z");

const printArray = (array) => array.join(",");
printArray(["h", "o", "l", "a"]);

const noOdds = (values) => values.filter((el) => el % 2 === 0);
noOdds([0, 1, 2, 3]);

const findAverage = (array) =>
  array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0;
findAverage([1, 2, 3, 4]);

const rowWeights = (array) => {
  let teamOne = [];
  let teamTwo = [];
  array.map((el, i) => (i % 2 === 0 ? teamTwo.push(el) : teamOne.push(el)));
  return [
    teamTwo.length > 0 ? teamTwo.reduce((a, b) => a + b) : 0,
    teamOne.length > 0 ? teamOne.reduce((a, b) => a + b) : 0,
  ];
};
rowWeights([80]);

const mango = (quantity, price) => {
  let sail = quantity * price;
  let iter = Math.floor(quantity / 3);
  for (let i = 0; i < iter; i++) {
    sail = sail - price;
  }
  return sail;
};
mango(3, 3);

const sumTwoSmallestNumbers = (numbers) =>
  numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1];
sumTwoSmallestNumbers([5, 8, 12, 19, 22]);

const friend = (friends) => friends.filter((el) => el.length === 4);
friend(["Ryan", "Kieran", "Mark"]);

const sortByLength = (array) => array.sort((a, b) => a.length - b.length);

sortByLength(["Beg", "Life", "I", "To"]);

const sortArray = (array) => {
  let oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  // Заменяем нечетные числа в исходном массиве отсортированными
  let oddIndex = 0;
  return array.map((num) => (num % 2 !== 0 ? oddNumbers[oddIndex++] : num));
};
console.log(sortArray([5, 8, 6, 3, 4]));

function permutations(string) {
  if (string.length <= 1) {
    return [string];
  } else {
    let result = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      const remainingChars = string.slice(0, i) + string.slice(i + 1);
      const subShuffles = shuffleString(remainingChars);
      for (let subShuffle of subShuffles) {
        result.push(char + subShuffle);
      }
    }
    return result;
  }
}
permutations(["ab", "ba"]);

const findOdd = (array) => {
  return array.map((a, b) =>
    a === b ? ([a, b].length % 2 !== 0 ? [a, b].length : a) : a
  );
};

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

const largestPairSum = (numbers) =>
  numbers.sort((a, b) => b - a)[0] + numbers.sort((a, b) => b - a)[1];
largestPairSum([10, 14, 2, 23, 19]);

const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
  const predictArr = [
    age1 * age1,
    age2 * age2,
    age3 * age3,
    age4 * age4,
    age5 * age5,
    age6 * age6,
    age7 * age7,
    age8 * age8,
  ];
  const predictSum = predictArr.reduce((a, b) => a + b);
  return Math.floor(Math.sqrt(predictSum) / 2);
};
predictAge(65, 60, 75, 55, 60, 63, 64, 45);

const count = (string) => {
  const stringParse = {};
  for (let i = 0; i < string.length; i++) {
    stringParse[string[i]] = string
      .split("")
      .filter((el) => el === string[i]).length;
  }
  return stringParse;
};

count("");

// Task 1
const minSum = (arr) => {
  let sortArr = [...arr].sort((a, b) => a - b);
  let z = [];
  for (let i = 0; i < sortArr.length / 2; i++) {
    z.push(sortArr[i] * sortArr[sortArr.length - 1 - i]);
  }
  return z.reduce((a, b) => a + b);
};

minSum([9, 2, 8, 7, 5, 4, 0, 6]);
// Task 2
const isAllPossibilities = (x) => {
  let sortArr = x.sort((a, b) => a - b);
  let newArr = [];
  for (let i = 0; i < sortArr.length; i++) {
    newArr.push(i);
  }
  return sortArr.filter((el, i) => el === newArr[i]).length === sortArr.length;
};
isAllPossibilities([1, 2, 3, 4]);

// Task 3
const sortByValueAndIndex = (array) => {
  let d = [];
  let ind = [];
  for (let i = 0; i < array.length; i++) {
    d.push((i + 1) * array[i]);
  }
  return d.sort((a, b) => a - b);
};

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));
// Task 4
const removeExclamationMarks = (s) => s.replace(/!/gim, "");
removeExclamationMarks("hello!!");
// Task 5
function multiplyAll(arr) {
  return (n) => {
    return arr.map((a) => a * n);
  };
}
console.log(multiplyAll([1, 2, 3])(2));

const multiplyAll = (arr) => (n) => arr.map((el) => el * n);
multiplyAll([1, 2, 3])(2);

// Task 6

const problem = (x) => (Number.isFinite(x) ? x * 50 + 6 : "Error");
problem(12);
// Task 7
const mergeArrays = (arr1, arr2) => {
  const uniqArr = [...arr1, ...arr2].sort((a, b) => a - b);
  return [...new Set(uniqArr)];
};
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
// Task 8

const min = (list) => Math.min(...list);
min();

const max = (list) => Math.max(...list);
max();
// Task 9
const reverseMiddle = (array) => {
  return Math.floor((array.length - 1) / 2);
};
console.log(reverseMiddle([1, 2, 3, 4, 5, 6]));
// Task 10
const addLength = (str) => str.split(" ").map((el) => el + " " + el.length);
addLength("apple ban");
// Task 11
const toNumberArray = (stringarray) => stringarray.map((el) => Number(el));
console.log(toNumberArray(["1.1", "1.2", "1.3"]));
// Task 12
const inverseSlice = (items, a, b) => {
  let slip = items.slice(a, b);
  let ddd = items.map((el, i) => {
    return items.filter((s) => s !== slip[i]);
  });
  return ddd[0];
};
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4));
// Task 13
const testResult = (array) => {
  let middle = array.reduce((a, b) => a + b) / array.length;
  let h = [];
  let a = [];
  let l = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 9) {
      h.push(array[i]);
    }
    if (array[i] === 8 || array[i] === 7) {
      a.push(array[i]);
    }
    if (array[i] <= 6) {
      l.push(array[i]);
    }
  }
  return a.length === 0 && l.length === 0
    ? [
        Number(middle.toFixed(3)),
        { h: h.length, a: a.length, l: l.length },
        "They did well",
      ]
    : [Number(middle.toFixed(3)), { h: h.length, a: a.length, l: l.length }];
};
testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10]);
// Task 14

const solved = (a, b) => {
  let countA = 0;
  let countB = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      countA += 1;
    }
    if (b[i] > a[i]) {
      countB += 1;
    }
  }
  return countA > countB
    ? 'Alice made "Kurt" proud! '
    : countB > countA
    ? 'Bob made "Jeff" proud!'
    : 'that looks like a "draw"! Rock on!';
};
solved([47, 7, 2], [47, 7, 2]);

// Task 15

const flickSwitch = (arr) => {
  let isFlick = true;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      isFlick = !isFlick;
    }
    res.push(isFlick);
  }
  return res;
};
flickSwitch(["codewars", "flick", "code", "wars"]);

// const isSortedAndHow = (array) => {
//   let middle = Math.floor((array.length - 1) / 2);
//   let isSort = "no";
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[middle]) {
//       isSort = "по возрастанию";
//     }
//     if (array[middle] < array[array.length - 1 - i]) {
//       isSort = "по убыванию";
//     }
//   }
//   return isSort;
// };
// console.log(isSortedAndHow([3, 4, 1, 7, 8, 4, 1]));

//Task 1
const checks = (a, x) => a.includes(x);
checks([66, 101], 66);

//Task 2

const switcheroo = (x) => {
  let d = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "a") {
      d.push("b");
    }
    if (x[i] === "b") {
      d.push("a");
    }
    if (x[i] !== "a" && x[i] !== "b") {
      d.push(x[i]);
    }
  }
  return d.join("");
};
switcheroo("aabacbaa");

//Task 3

const sortList = (sortBy, list) =>
  list.sort((a, b) =>
    sortBy === "a" ? b.a - a.a : sortBy === "b" ? b.b - a.b : -1
  );

sortList("a", [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
]);

//Task 4

const calculator = (a, b, sign) => {
  if (typeof b === typeof " ") {
    return "unknown value";
  }
  let oper = {
    "+": "+",
    "-": "-",
    "/": "/",
    "*": "*",
  };
  if (oper[sign]) {
    return eval(`a ${oper[sign]} b`);
  } else {
    return "unknown value";
  }
};
calculator(6, "h", "*");

//Task 5

const arrayDiff = (a, b) => a.filter((el) => el !== b.find((ol) => ol === el));
arrayDiff([1, 2, 3], [1, 2]);

//Task 6
const include = (arr, item) => arr.includes(item);
include([1, 2, 3, 4], 4);

const sameCase = (a, b) => {
  if (!b.match(/^[a-zA-Z]$/) || !a.match(/^[a-zA-Z]$/)) {
    return -1;
  }

  switch (typeof a === typeof b) {
    case typeof a !== "string" || typeof b !== "string":
      return -1;
    case a.toLowerCase() === a && b.toLowerCase() === b:
      return 1;
    case a.toUpperCase() === a && b.toUpperCase() === b:
      return 1;
    case typeof a === "string" && typeof b === "string":
      return 0;
    default:
      return -1;
  }
};
sameCase("A", "B");

//Task 7

const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
usdcny(465);

//Task 8

const uniqueInOrder = (iterable) => {
  let newArr = [];
  let iter;
  if (!Array.isArray(iterable)) {
    iter = iterable.split("");
  } else {
    iter = [...iterable];
  }
  for (let i = 0; i < iter.length; i++) {
    if (iter[i] !== iter[i + 1]) {
      newArr.push(iter[i]);
    }
  }
  return newArr;
};

uniqueInOrder([1, 2, 2, 3, 3]);

//Task 9
const divCon = (x) => {
  let noNum = [];
  let num = [];
  x.map((el) => (typeof el === "number" ? num.push(el) : noNum.push(el)));
  return (
    num.reduce((a, b) => a + b, 0) -
    noNum.reduce((a, b) => Number(a) + Number(b), 0)
  );
};

console.log(
  divCon([7, "9", "6", 5, 4, "3", "7", "0", "0", 1, 2, "6", "6", "3", "5", "4"])
);

//Task 10

const removeUrlAnchor = (url) => {
  let str = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] !== "#") {
      str += url[i];
    }
    if (url[i] === "#") {
      break;
    }
  }
  return str;
};

removeUrlAnchor("www.codewars.com/katas/?page=1#about");

const twoSum = (numbers, target) => {
  let sss = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] + numbers[numbers.length - 1 - i] === target) {
        if (j !== numbers.length - 1 - i) {
          sss.push([j, numbers.length - 1 - i]);
        }
      }
    }
  }
  return sss.flat();
};

console.log(
  twoSum(
    [
      571, -461, 349, 321, 787, -336, -105, 365, -193, 296, 26, 949, -848, -492,
      300, 146, -925, -35, -161,
    ],
    -629
  )
);

// Task 1
const getNumberFromString = (s) =>
  parseInt(s.replace(/[a-z, :, _,?,', &, $, %, @, #]/gim, ""));
getNumberFromString("this is number: $ % #@ 10000000");

// Task 2
const digitizes = (n) =>
  [n]
    .join(",")
    .split("")
    .map((el) => Number(el));
digitizes(8675309);

// Task 3
const capitalize = (s) => {
  let newStr = "";
  let newStr2 = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      newStr += s[i].toUpperCase();
    } else {
      newStr += s[i].toLowerCase();
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      newStr2 += s[i].toUpperCase();
    } else {
      newStr2 += s[i].toLowerCase();
    }
  }
  return [newStr2, newStr];
};
capitalize("codewars");

//Task 4

const highestRank = (arr) => {
  let res = [];
  let posEl = [];
  let subArr = arr.map((el, i, arr) => arr.filter((ol, i) => ol === el));
  for (let i = 0; i < subArr.length; i++) {
    if (subArr[i + 1]) {
      if (subArr[i].length > subArr[i + 1].length) {
        res.push(subArr[i]);
      }
    }
  }
  subArr.map((el, i, arr) =>
    arr[i + 1] ? (el.length === arr[i + 1].length ? Math.max(...el) : "") : ""
  );
  res.map((el, i, arr) =>
    arr[i + 1]
      ? el.length > arr[i + 1].length
        ? posEl.push(el)
        : console.log("wdw", el)
      : posEl.length < 1
      ? posEl.push(el)
      : ""
  );
  return posEl.flat()[0];
};

console.log(highestRank([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Task 5
const sumOrProduct = (array, n) => {
  array.sort((a, b) => b - a);
  let max = array.slice(0, n).reduce((a, b) => a + b);
  let min = array.slice(-n).reduce((a, b) => a * b);
  return max > min ? "sum" : min > max ? "product" : "same";
};

console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3));

//Task 6
const doubleEveryOther = (a) => {
  return a.map((el, i, arr) => ((i + 1) % 2 === 0 ? el * 2 : el));
};
console.log(doubleEveryOther([1, 2, 3, 4, 5, 3, 1, 3, 4, 6]));

//Task 7
// const evenLast = (numbers) => {
//   let result = [];
//   numbers.map((el, i) => (i % 2 === 0 ? result.push(el) : ""));
//   return result.reduce((a, b) => a + b, 0) * numbers[numbers.length - 1];
// };
// console.log(evenLast([2, 2, 2, 2]));

const evenLast = (numbers) => {
  if (numbers.length < 1) {
    return 0;
  }
  return (
    numbers.filter((el, i) => i % 2 === 0).reduce((a, b) => a + b) *
    numbers[numbers.length - 1]
  );
};
console.log(evenLast([2, 3, 4, 5]));

//Task 8
function helloWorld() {
  let str = "Hello World!";
  console.log(str);
}
helloWorld();

//Task 9

const replace = (s) => s.replace(/[aeiou]/gim, "!");
replace("ABCDE");

//Task 10
const solutions = (nums) => {
  if (nums === null || nums.length < 1) {
    return [];
  }
  return nums.sort((a, b) => a - b);
};
solutions([20, 2, 10]);

//Task 11
const digits = (n) => `${n}`.split("").length;
console.log(digits(9007199254740991));
//Task 12
const sumOfIntegersInString = (s) => {
  return s.split("").filter((el) => !isNaN(el));
};
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
);
//Task 12
const sexyPrime = (x, y) => {
  if (x <= 1) return false;
  return x + 6 === y ? true : false;
};
console.log(sexyPrime(473, 467));
//Task 12
const longestWord = (stringOfWords) => {
  let newArr = stringOfWords.split(" ");
  let max = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (max.length <= newArr[i].length) {
      max = newArr[i];
    }
  }
  return max;
};
console.log(
  longestWord(
    " exukeizkkd asridp stexwpxmk bqghum qwqfrxi znsh ajflivmxj ggua dcjm j dua ezuvdcjxjk m u wt tqjykaopr qk"
  )
);
//Task 13
const position = (letter) => {
  const alf = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  return `Position of alphabet: ${alf[letter]}`;
};
console.log(position("z"));

//Task 14
const isDigit = (s) => {
  let isNumber = /^\d+(\.\d+)?$/.test(s);
  return isNumber;
};
console.log(isDigit("-234.6"));
//Task 14
const naughtyOrNice = (data) => {
  return data;
};
const objMap = (object) => {
  let objParse = [];
  let nice = [];
  let naughty = [];
  Object.values(object).map((el) =>
    Object.values(el).map((el) => objParse.push(el))
  );
  objParse.map((el) => (el === "Nice" ? nice.push(el) : naughty.push(el)));
  console.log(nice.length);
  console.log(naughty.length);
  return nice.length > naughty.length ? "Nice" : "Naughty";
};

console.log(objMap(obj));

// Task 1

const contamination = (text, char) => text.replace(/[\s\S]/gim, char);

contamination("", "z");

// Task 2

const copyList = (l) => {
  let arr = [];
  let copyArr = arr.concat(l);
  copyArr[1] += 2;
  return copyArr;
};
console.log(copyList([1, 2, 3, 4, 5]));

//Task 3

const bump = (x) => {
  let road = [];
  let bump = [];
  x.split("").map((el) => (el === "_" ? road.push(el) : bump.push(el)));
  console.log(road.length);
  console.log(bump.length);
  return bump.length > 15 ? "Car Dead" : "Woohoo!";
};
console.log(bump("__n____nnn_n_n_n____n_nn_nnn_n_nnn_"));

//Task 3
const quarterOf = (month) => {
  switch (month > 0) {
    case month === 1 || month === 2 || month === 3:
      return 1;
    case month === 4 || month === 5 || month === 6:
      return 2;
    case month === 7 || month === 8 || month === 9:
      return 3;
    case month === 10 || month === 11 || month === 12:
      return 4;
  }
};

console.log(quarterOf(11));

//Task 4
const filterString = (value) => {
  return Number(value.replace(/[a-z]/gim, ""));
};
filterString("aa1bb2cc3dd");

//Task 5
const firstReverseTry = (arr) => {
  if (!arr.length) {
    return [];
  }
  if (arr.length <= 1) {
    return arr;
  }
  let lastEl = arr.pop();
  let firstEl = arr.shift();
  arr.unshift(lastEl);
  arr.push(firstEl);
  return arr;
};
console.log(firstReverseTry([111]));
//Task 6
// write the function isAnagram
const isAnagram = (test, original) => {
  let tester = test.toLowerCase().split("");
  let result = [];
  let originale = original.toLowerCase().split("");
  originale.map((el, i, arr) =>
    originale.includes(tester[i]) ? result.push(tester[i]) : ""
  );
  console.log(result);
  console.log(tester, originale);
  return result.length === original.length;
};
console.log(isAnagram("foefet", "toffee"));

const isAnagrams = (test, original) => {
  if (test.length > original.length || original.length > test.length) {
    return false;
  }
  let sortTest = test.toLowerCase().split("").sort();
  let originalTest = original.toLowerCase().split("").sort();
  return (
    original.length ===
    originalTest.filter((el, i) => el === sortTest[i]).length
  );
};
console.log(isAnagrams("Twoo", "WooT"));

//Task 7

const zero = (v) =>
  v
    ? Number.isInteger(eval(`${0} ${v}`))
      ? eval(`${0} ${v}`)
      : Math.trunc(eval(`${0} ${v}`))
    : 0;
const one = (v) =>
  v
    ? Number.isInteger(eval(`${1} ${v}`))
      ? eval(`${1} ${v}`)
      : Math.trunc(eval(`${1} ${v}`))
    : 1;
const two = (v) =>
  v
    ? Number.isInteger(eval(`${2} ${v}`))
      ? eval(`${2} ${v}`)
      : Math.trunc(eval(`${2} ${v}`))
    : 2;
const three = (v) =>
  v
    ? Number.isInteger(eval(`${3} ${v}`))
      ? eval(`${3} ${v}`)
      : Math.trunc(eval(`${3} ${v}`))
    : 3;
const four = (v) =>
  v
    ? Number.isInteger(eval(`${4} ${v}`))
      ? eval(`${4} ${v}`)
      : Math.trunc(eval(`${4} ${v}`))
    : 4;
const five = (v) =>
  v
    ? Number.isInteger(eval(`${5} ${v}`))
      ? eval(`${5} ${v}`)
      : Math.trunc(eval(`${5} ${v}`))
    : 5;
const six = (v) =>
  v
    ? Number.isInteger(eval(`${6} ${v}`))
      ? eval(`${6} ${v}`)
      : Math.trunc(eval(`${6} ${v}`))
    : 6;
const seven = (v) =>
  v
    ? Number.isInteger(eval(`${7} ${v}`))
      ? eval(`${7} ${v}`)
      : Math.trunc(eval(`${7} ${v}`))
    : 7;
const eight = (v) =>
  v
    ? Number.isInteger(eval(`${8} ${v}`))
      ? eval(`${8} ${v}`)
      : Math.trunc(eval(`${8} ${v}`))
    : 8;
const nine = (v) =>
  v
    ? Number.isInteger(eval(`${9} ${v}`))
      ? eval(`${9} ${v}`)
      : Math.trunc(eval(`${9} ${v}`))
    : 9;

const plus = (n) => `+ ${n}`;
const minus = (n) => `- ${n}`;
const times = (n) => `* ${n}`;
const dividedBy = (n) => `/ ${n}`;

console.log(six(plus(two())));
console.log(six(minus(two())));
console.log(six(times(two())));
console.log(eight(dividedBy(two())));

//Task 8
const sumCubes = (n) => {
  let a = 0;
  for (let i = 0; i <= n; i++) {
    a += Math.pow(i, 3);
  }
  return a;
};

console.log(sumCubes(3));
console.log(Math.pow(2, 3));
//Task 9
const solves = (s) => {
  let sum = [];
  let fff = 0;
  let alf = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newStr = s
    .replace(/[aeiou]/gim, " ")
    .split("")
    .map((el) => alf.indexOf(el) + 1);
  console.log(newStr);
  for (let i = 0; i < newStr.length; i++) {
    fff += newStr[i];
    if (newStr[i + 1] === 0 || newStr[i + 1] === undefined) {
      sum.push(fff);
      fff = 0;
    }
  }
  console.log(sum);
  return Math.max(...sum);
};

console.log(solves("az"));

//Task 10
const defineSuit = (card) => {
  switch (card.length > 0) {
    case card.includes("♣"):
      return "clubs";
    case card.includes("♦"):
      return "diamonds";
    case card.includes("♥"):
      return "hearts";
    case card.includes("♠"):
      return "spades";
  }
};

defineSuit("J♥");

//Task 11
const areaOrPerimeter = (l, w) => (l === w ? l * w : l * 2 + w * 2);
areaOrPerimeter(6, 10);
//Task 12

const isUpperCase = (str) => str === str.toUpperCase();
console.log(isUpperCase("C"));

//Task 13

//Task 14
//Task 15
String.prototype.isUpperCase = function () {
  let fff = this.split("");
  return fff.join("") === fff.join("").toUpperCase();
};

console.log("HELLO".isUpperCase());

const stringClean = (s) => s.replace(/[\d]+/g, "");
console.log(stringClean("Eaqsqsqsqs1312313t me!!"));

//Task 1
const diff = (a, b) => {
  let diffA = a.filter((el, i) => !b.includes(el));
  let diffB = b.filter((el, i) => !a.includes(el));
  let merge = [...diffA, ...diffB];
  return [...new Set(merge)].sort();
};

console.log(diff(["a", "b", "z", "d", "e", "d"], ["a", "b", "j", "j"]));

//Task 2

const lottery = (str) => {
  let newArr = str.replace(/[a-z]/gim, "").split("");
  if (newArr.length === 0) {
    return "One more run!";
  }
  return [...new Set(newArr)].join("");
};
console.log(lottery("ffaQtaRFKeGIIBIcSJtg"));
//Task 3
function* generator(a) {
  for (let i = 1; i <= 10; i++) {
    yield `${a} x ${i} = ${a * i}`;
  }
}
let gen = generator(5);
console.log(gen.next().value);

//Task 4
const cantor = (nestedList) => {
  if (nestedList.length >= 3) {
    let one = nestedList.flat()[0] === 1 ? 0 : 1;
    let two = nestedList.flat()[nestedList.flat().length - 1] === 1 ? 0 : 1;
    let midd =
      nestedList.flat()[Math.floor(nestedList.flat().length / 2)] === 1 ? 0 : 1;
    return [one, midd, two];
  } else {
    let one = nestedList.flat()[0] === 1 ? 0 : 1;
    let two = nestedList.flat()[nestedList.flat().length - 1] === 1 ? 0 : 1;
    return [one, two];
  }
};
console.log(
  cantor([
    [0, 0],
    [1, 1],
  ])
);

function pickIt(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd, even];
}
console.log(pickIt([1, 2, 3]));
//Task 5
const alternate = (items) => (items.length < 1 ? null : items.includes(true));
console.log(alternate([false, false, false]));
//Task 6
const AmIAfraid = (day, num) => {
  console.log(day, num);
  if (day === "Monday" && num === 12) {
    return true;
  } else if (day === "Tuesday" && num > 95) {
    return true;
  } else if (day === "Wednesday" && num === 34) {
    return true;
  } else if (day === "Thursday" && num === 0) {
    return true;
  } else if (day === "Friday" && num % 2 === 0) {
    return true;
  } else if (day === "Saturday" && num === 56) {
    return true;
  } else if (
    (day === "Sunday" && num === 666) ||
    (day === "Sunday" && num === -666)
  ) {
    console.log("fefeeffe");
    return true;
  }
  return false;
};
console.log(AmIAfraid("Wednesday ", -666));
//Task 7
const sort = (sentence) => {
  let one = [];
  let two = [];
  console.log(sentence.replace(/[,!]/g, "").split(" ").sort());
  sentence
    .replace(/[,!]/g, "")

    .split(" ")
    .sort()
    .map((el) => (el === el.toLowerCase() ? one.push(el) : two.push(el)));
  two.reverse();
  let merged = [...one, ...two].join(" ").replace(/[,]/g, "");
  return merged;
};
console.log(
  sort(
    "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!"
  )
);
//Task 8

const twosDifference = (input) => {
  console.log(input);
  let ggg = [];
  for (let i = 0; i < input.length; i++) {
    let xx = input[i] + 2;
    if (input.find((el) => el === xx)) {
      ggg.push([input[i], xx]);
    }
  }
  return ggg;
};
console.log(twosDifference([1, 3, 5, 6, 8, 10, 15, 32, 12, 14, 56]));
//Task 9
const sentencify = (words) => {
  let fff = words.join(" ");
  return `${fff.slice(0, 1).toUpperCase() + fff.slice(1)}.`;
};

console.log(sentencify(["yes"]));

//Task 10
const sorted = (items) => {
  if (items.length < 1) {
    return items;
  }
  let pivotIndex = Math.floor(items.length / 2);
  let pivot = items[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < items.length; i++) {
    if (pivotIndex === i) {
      continue;
    }
    if (pivot > items[i]) {
      less.push(items[i]);
    }
    if (pivot < items[i]) {
      greater.push(items[i]);
    }
  }

  return [...sorted(less), pivot, ...sorted(greater)];
};
console.log(sorted([1, 3, 2, 3, 4, 1]));

const bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return [...new Set(arr)];
};

console.log(bubble([1, 3, 2, 3, 4, 1]));

//Task 10

const sortme = (names) => {
  console.log(names);
  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};
console.log(sortme(["think", "Able", "able", "my", "eye", "little"]));

//Task 10
const ghostBusters = (building) => {
  let noRep = building.replaceAll(" ", "");
  return noRep.length === building.length
    ? "You just wanted my autograph didn't you?"
    : noRep;
};

console.log(ghostBusters("Sky scra per"));
//Task 10
const pak = (s) => {
  if (s.trim().length > 0) {
    return s.replaceAll(" ", " pak ");
  }
  return "";
};

console.log(pak("   "));
//Task 10
function rainAmount(mm) {
  if (mm <= 40) {
    return `You need to give your plant ${40 - mm} mm of water`;
  } else {
    return "Your plant has had more than enough water for today!";
  }
}
console.log(rainAmount(39));
//Task 10

const shortenToDate = (longDate) =>
  longDate.slice(0, -4).replace(/[,]/g, "").trim();

console.log(shortenToDate("Friday May 2, 9am"));

const uniteUnique = (...arr) => {
  const mergeArr = arr.flat();
  return [...new Set(mergeArr)];
};
console.log(uniteUnique([]));

const oddOnesOut = (nums) =>
  nums.filter((el) => nums.filter((ol) => el === ol).length % 2 === 0);

console.log(oddOnesOut([1, 2, 3]));

const replaceAll = (seq, find, replace) => {
  console.log(seq, find, replace);
  let ggg = [];

  if (!Array.isArray(seq)) {
    seq.split("").map((el) => (el === find ? ggg.push(replace) : ggg.push(el)));
  } else {
    seq.map((el) => (el === find ? ggg.push(replace) : ggg.push(el)));
  }
  return !Array.isArray(seq) ? ggg.join("") : ggg;
};

console.log(replaceAll("Hello World", "o", 0));

const take = (arr, n) => arr.slice(0, n);
console.log(take([0, 1, 2, 3, 5, 8, 13], 3));

const factory = (x) => {
  return (arr) => {
    return arr.map((el) => el * x);
  };
};

const fives = factory(5);
const myArray = [1, 2, 3];
console.log(fives(myArray));

const OrderPeople = (people) => {
  return people.sort((a, b) => {
    return a.age - b.age;
  });
};
console.log(
  OrderPeople([
    { age: 83, name: "joel" },
    { age: 46, name: "roger" },
    { age: 99, name: "vinny" },
    { age: 26, name: "don" },
    { age: 74, name: "brendan" },
  ])
);
