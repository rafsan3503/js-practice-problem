/* 1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
apples.Write a program to help Harry calculate how much money the
shopkeeper will return.The total cost of 1 kg of oranges and 1 kg of
apples is tk 700. */

let giveMoney = 1000;
let applePrice = 400;
let orangePrice = 300;

let totalCost = applePrice + orangePrice;

let moneyBack = giveMoney - totalCost;

console.log(moneyBack);

/* 2) Write a program to calculate the average marks of Mathematics,
Biology, Chemistry, Physics, and Bangla of a student. */

let biology = 80;
let chemistry = 90;
let physics = 78;
let bangla = 99;

let totalMark = biology + chemistry + physics + bangla;

let average = totalMark / 4;

console.log(average);

/* 3) John’s teacher gave him two variables.Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line.Help
John write the program. */

var firstVariable = "I am going to be";
var lastVariable = "an awesome web developer";

var fullLine = firstVariable +" " + lastVariable;

console.log(fullLine);

/* 4) Sarah’s mother is teaching her mathematics.She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program. */

var number = 119;

var remainder = number % 5;

console.log(remainder);

/* 5) নি চে র ভে রি য়ে বল ডি ক্লে য়ার এ ক োনটার মধ্যে কি কি সমস্যা আছে । দে খত ো বে র করতে
পার ো কি না ? */

Var price = 33
>> variable name is case sensitive var not Var;

var name - Shabana
>> value should be assign with = not -;

var boxName = ‘Cocola;
>> string value should keep inside double quotation;

var 88_price = 34;
>> variable name cant start with number;

var enum = -1;
>> enum is reserved keyword;


var _$box’78 = ‘Monika’;
>>cant use quote inside a variable name;

var home-address = “kochu khet”;
>> cannot use - between a variable name;

/* 6) You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

var fruits = ['Apple', 'Banana', 'Orange'];

var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);

fruits[1] = "Mango";
console.log(fruits);

fruits.pop();
fruits.push("Watermelon");

console.log(fruits);

/* 7) You and your friends Tom, Jane, Peter and John got their final exam
results.Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using
if-else. */

var result = 40;

if (result >= 80) {
    console.log("You got A Grade");
}
else if (result >= 60) {
    console.log("You got B Grade");
}
else if (result >= 50) {
    console.log("You got C Grade");
}
else if (result >= 40) {
    console.log("You got D Grade");
}
else if (result <= 39) {
    console.log("You got F Grade");
}

/* 8) You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else. */

let num1 = 13;
let num2 = 79;
let num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is the largest number");
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is the largest number");
}
else {
    console.log(num3 + "is the largest number");
}

/* 9) You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */

let side1 = 9;
let side2 = 9;
let side3 = 9;

if (side1 == side2  || side1 == side3  || side2 == side3){
    console.log("Triangle is Isosceles")
}
else {
    console.log("Triangle is not Isosceles");
}

/* 10) ক্লাস সে ভে র এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়ে ছ। ত োমার বন্ধুআলি য়া, ডালি য়া,
সালি য়া, মালি য়া, লি লি য়া আর জ্বালাইয়া - তাদে র grade তুমি জান ো না। তবে তাদে র নম্বর
জান ো. আলি য়া 95 পে য়ে ছে, ডালি য়া 66 পে য়ে ছে, সালি য়া 80 পে য়ে ছে, মালি য়া পে য়ে ছে 59,
লি লি য়া পে য়ে ছে 47, জ্বালাইয়া পে য়ে ছে 77। তুমি JS code দি য়ে তাদে র grade বে র করে
দি তে পারবে ?

১) যারা ৫০ এর নি চে পে য়ে ছে, তাদে র grade F.
২) যারা ৫০ বা তার উপরে পে য়ে ছে, অথবা ৬০ এর নি চে পে য়ে ছে, তাদে র grade D.
৩) যারা ৬০ বা তার উপরে পে য়ে ছে, অথবা ৭০ এর নি চে পে য়ে ছে, তাদে র grade C. 
৪) যারা ৭০ বা তার উপরে পে য়ে ছে , অথবা ৮০ এর নি চে পে য়ে ছে , তাদে র grade B.
৫) যারা ৮০ বা তার উপরে পে য়ে ছে , অথবা ৯০ এর নি চে পে য়ে ছে , তাদে র grade A.
৬) যারা ৯০ বা তার উপরে পে য়ে ছে , তাদে র grade A+.
*/

let marks = 60;

if (marks >= 90) {
    console.log("Your Grade is A++")
}
else if (marks >= 80 && marks < 90) {
    console.log("Your Grade is A")
}
else if (marks >= 70 && marks < 80) {
    console.log("Your Grade is B")
}
else if (marks >= 60 && marks < 70) {
    console.log("Your Grade is C")
}
else if (marks >= 50 && marks < 60) {
    console.log("Yoour Grade is D")
}
else if (marks < 50) {
    console.log("Your Grade is F")
}

/* 11) তাড়াহুড়া করে স্কুলে র জন্য বে র হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে, ট্রাফি ক
সি গন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডে ঞ্জার হতে
পারে । যদি হলদু রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফি ক সি গন্যাল গ্রি ন
হয় তাহলে ত োমার রাস্তা পার হওয়া উচি ত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা
signal নামে একটা ভে রি য়ে বল থাকবে । সে টার মান green, yellow বা red হতে পারে ।
সে ই অনসুারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো। */

let signal = "green";

if (signal == "red") {
    console.log("There Might be Danger")
}
else if (signal == "yellow") {
    console.log("You should stop and wait")
}
else if (signal == "green") {
    console.log("You can walk now");
}


/* 12) প্রতিদিন ত োমার কাজ কি ?
১) রাত ৮ টা বাজে মডিউল আনলক কর ো
২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস কর ো
৩) ভিডিও দেখতে দেখতে ন োটস নাও
৪) মডিউল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
৫) ক োন কি ছুবঝু তে না পারলে(চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে), সাপ োর্ট সে শনে
জয়ে ন কর ো
এখন ত োমার কাজ হচ্ছে একটা for লপু ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
দে খান ো। */

const dailyTask = ["Unlock module at 8", "Do Practice with videoes", "Take notes while watching video", "practice module by own after video", "If dont understand anything"];

for (let i = 0; i < dailyTask.length; i++) {
    const element = dailyTask[i];
    console.log(element);
    if (element == "If dont understand anything") {
        console.log("Join Support Season");
    }
    
}

/* 13) আবার একই জিনিস while লপু চালিয়ে ১০ বার দেখান */

let i = 0;
while (i < dailyTask.length) {
    let element = dailyTask[i];
    console.log(element);
    i++;
    if (element == "If dont understand anything") {
        console.log("Join Support Season");
    }
}

/* 14) উপরের প্রব্লেমটাই while লপু রিভার্স ওয়েতে(decremental হিসেবে)করে দে াও */

let i = dailyTask.length-1;
while (i >= 0) {
    let element = dailyTask[i];
    console.log(element);
    i--;
    if (element == "If dont understand anything") {
        console.log("Join Support Season");
    }
}
/* 15) উপরে র প্রব্লেমটাই for লপু রিভার্স ওয়েতে(decremental হিসেবে)করে দেখাও */
for (let i = dailyTask.length-1; i >= 0; i--) {
    const element = dailyTask[i];
    console.log(element);
    if (element == "If dont understand anything") {
        console.log("Join Support Season");
    }
}

/* 16) ত োমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ
কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে, ২০ হাজার টাকার বেশি হলে পুরান
ল্যাপটপ কিনবে । না হয় তুমি ম োবাইল দিয়ে কাজ চালাবে । */

let myMoney = 10000;

if (myMoney >= 80000) {
    console.log("I will buy Mac")
}
else if (myMoney >= 60000) {
    console.log("I will buy gaming laptop")
}
else if (myMoney >= 40000) {
    console.log("I will buy lenovo Yoga")
}
else if (myMoney >= 20000) {
    console.log("I will buy old laptop")
}
else {
    console.log("I will work with Mobile")
}

/* 17) আসকে আমার মন ভাল ো নেই এই কথা ৩৯ বার আউটপুট হিসে বে দেখাও। */

for (let i = 0; i <= 39; i++) {
    console.log("Ajke amar mon valo nei" , i);
    
}

// 18) while লপু কি ভাবে কাজ কর

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.The condition is evaluated before executing the statement.

// 19) একটা ক োড লি খে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দেখাও

for (let i = 58; i <= 98; i++) {
    console.log(i);
    
}

/* 20) একটা ক োড লি খে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকে
দে খাও */

for (let i = 412; i <= 456; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

/* 21) একটা ক োড লি খে ৫৮১ থে কে ৬২৩ পর্যন্ত যত বি জ োড় সংখ্যা আছে সে গুলাকে দে খাও */

for (let i = 581; i <= 623; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

/* 22) তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা
for লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও। */

const learned = ["Html", "Css", "Bootstrap", "Tailwind", "Javascript", "Function", "Array", "Loop", "Object"];

for (let i = 0; i < learned.length; i++){
    console.log(learned[i]);
}

/* 23) তুমি এতদি ন পর্যন্ত যে যে মডে লে র ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটা
array বানাও। তারপর একটা while লপু দি য়ে সে ই array এর উপাদান গুলা একটা একটা করে
আউটপুট হি সে বে দে খাও */

const usedPhone = ["Maximus", "Symphony", "Oppo", "Oneplus", "Iphone"];

let i = 0;
while (i < usedPhone.length) {
    console.log(usedPhone[i]);
    i++;
}

/* 24) একটা ফর লপু চালাও। ৩০ থে কে ৮৬ পর্যন্ত। আর এই লপু ৪৪ এ গে লে ব্রে ক করবে । সে ই
জি নি স ক োড করে দে খাও */

for (let i = 30; i < 86; i++) {
    console.log(i);
    if (i == 44) {
        break;
    }
    
}

/* 25) ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০
টাকার উপরে সে গুলাকে স্কি প করবে । অর্থাৎ সে গুলাকে আউটপুট হি সে বে দে খাবে না। বাকি দে র কে
আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না। */

const bookPrice = [20, 40, 60, 120, 89, 200, 423];
for (let i = 0; i < bookPrice.length; i++) {
    const element = bookPrice[i];

    if (element >= 200) {
        continue;
    }
    console.log(element);
    
}

/* 26) Write a function called foo() which prints “foo” and a function called bar()
which prints “bar”. Call function bar() in the foo() function after printing.What
will be the output ? Now call the foo() to see the output. */

function foo() {
    console.log("foo");
    bar();
}

function bar() {
    console.log("bar");
}

foo();

// 27) Write a function called make_avg() which will take an three integers and
// return the average of those values.

function make_avg(num1, num2, num3) {
    let total = num1 + num2 + num3;
    let average = total / 3;
    return average;
}

console.log(make_avg(40, 50, 60));

// 28) Challenging: Write a function called make_avg() which will take an array of
// integers and the size of that array and return the average of those values.

function make_avg(array, length) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;

    }
    return sum / array.length;
}

const myArr = [22, 56, 78, 90, 45, 32];

console.log(make_avg(myArr, 8));

// 29) Write a function called odd_even() which takes an integer value and tells
// whether this value is even or odd.You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

function even_odd(num) {
    if (num % 2 == 0) {
        return num + ' is a even number';
    }
    return num + ' is a odd number';
}

console.log(even_odd(3));

function even_odd(num) {
    if (num % 2 == 0) {
        console.log(num + ' is a even number');
    }
    console.log(num + ' is a odd number');
}

even_odd(5);

// 30) You are in a hurry to go to your school on time.But when you are crossing
// the road, the traffic signal is red coloured.In this situation, if you try to cross the
// road, you may be in danger.If you notice a yellow coloured traffic signal, you
// should stop.If you notice a green coloured traffic signal, you should cross the
// road.So write a JS code, where there is a variable called signal.Its value can
// be green, yellow or red & we will get different activities as output depending on
// the variable.So, hurry up.

let signal = "yellow";

switch (signal) {
    case "red":
        console.log("You may be in danger");
        break;
    case "yellow":
        console.log("You should wait for green signal");
        break;
    case "green":
        console.log("You can walk now");
        break;
    default:
        console.log("Do no use phone while walking");
}

// 31) একটা ফাংশন লি খবা যে টা ১৩ এর নামতা(multiplication table) আউটপুট হি সে বে
// দে খাবে ।

function multiplication(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + "*"+ i + "=" + number * i)

    }
}
multiplication(13);

// 32) একটা ফাংশন লি খবা যে টা যে ক োন নামকে uppercase বা রে গুলার কে ইস হি সে বে নি বে আর
// আউটপুট হি সে বে সে ই নাম lowercase করে রি টার্ন করবে ।

function toLowerCase(text) {
    var toLowerCase = text.toLowerCase();
    return toLowerCase;
}

console.log(toLowerCase("MAHMUD"));

// 33) fullName নামে একটা ফাংশন তৈ রী কর যে টা ত োমার নামে র প্রথম অংশ এবং ত োমার
// নামে র শে ষে র অংশ প্যারামি টার হি সে বে নি বে । আর ত োমার নামে র দইু অংশ জ োড়া দি য়ে আউটপুট
// হি সে বে ত োমার পূর্ন নাম রি টার্ন করে দি বে । যে মন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার
// হি সে বে দি লে আউটপুট হি সে বে hablu kanto রি টার্ন করবে ।

function fullName(firstName, LastName) {
    var fullName = firstName + " " + LastName;
    return fullName;
}

console.log(fullName("mahmud", "hasan"));

// 34) একটা ফাংশন লি খবা যে টাকে তুমি ক োন সংখ্যাকে ইনপুট হি সে বে দি লে সে সে ই সংখ্যার
// square করে সে ই square কে রি টার্ন করবে ।
// অর্থাৎ তুমি ইনপুট হি সে বে 5 দি লে সে টাতে স্কয়ারে হি সে বে 25 আউটপুট হি সে বে পাবে ।

function square(num) {
    let square = num * num;
    return square;
}

console.log(square(5));

// 35) Write a function that will take hour as the input parameter and will convert it
// into minutes and will return the result in minutes.

function hourToMinutes(hour) {
    var minutes = hour * 60;
    return minutes;
}
console.log(hourToMinutes(6));

// 36) Write a function findLeapYear() that will take the array[2023, 2024, 2025,
// 2028, 2030] as the input parameter and will check if each year is a leap year.If
// a year is a leap year insert that year in a new array, return the new array and
// print the result.

const Year = [2023, 2024, 2025, 2028, 2030, 1900];

function isLeapYear(array) {
    let leapYear = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if ((element % 4 == 0 && element % 100!==0) || element % 400 ==0) {
            leapYear.push(element);
        }

    }
    return leapYear;
}

console.log(isLeapYear(Year));

// 37) Write a function findOddSum() that will take the array[5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

const numbers = [5, 7, 8, 10, 45, 30];

function oddArraySum(array) {
    let oddNumbers = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }

    }
    let sum = 0;
    for (let i = 0; i < oddNumbers.length; i++) {
        const element = oddNumbers[i];
        sum += element;

    }
    return sum;
}
console.log(oddArraySum(numbers));

// 38) leapYear() নামে ফাংশন লি খ ো এবং নে ক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সে টা
// চে ক কর ো। Leap year হলে ফাংশন true রি টার্ন করবে আর leap year না হলে false রি টার্ন
// করবে ।

function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        return true;
    }
    return false;
}

console.log(isLeapYear(2023));

// 39) ত োমার বয়স কি odd নাকি even সংখ্যা সে টা চে ক কর একটা ফাংশন দি য়ে । সে ই
// ফাংশনকে ক োন সংখ্যা প্যারামি টার হি সে বে দি লে, সে ই সংখ্যা Even হলে ফাংশন true রি টার্ন
// করবে আর Odd হলে false রি টার্ন করবে ।

function isEvenOdd(age) {
    if (age % 2 == 0) {
        return age + " is a even number";
    }
    return age + " is a odd number";
}

console.log(isEvenOdd(22));

// 40) এমন একটা ফ্যাংশনা লি খ ো যে টাকে তুমি ঘন্টাকে ইনপুট প্যারামি টার হি সে বে দি বে । আর সে
// সে ই ঘন্টাকে মি নি টে কনভার্ট করে মি নি ট রি টার্ন করবে ।

function hourToMinutes(hour) {
    let minutes = hour * 60;
    return minutes;
}

console.log(hourToMinutes(7));

// 41) একটা লপু লি খতে হবে যে টা ১ থে কে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাব

for (let i = 1; i <= 100; i++) {
    console.log(i);

}

// 42) ৫০ থে কে ৮০ এর মধ্যে যত ো বি জ োড় সংখ্যা আছে সে গুলাকে দে খাবে ।

for (let i = 50; i < 80; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }

}

// 43) তি নটা সংখ্যা এর য োগ করতে পারবে এমন একটা ফাংশন লি খ ো

function addNumbers(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum;
}
console.log(addNumbers(12, 13, 13));

// 44) ত োমাকে ফাংশনে র ইনপুট হি সে বে সে লসি য়াস দি বে । তুমি ক্যালকুলে শন করে তাপমাত্রা
// ফারে নহাইট এ কনভার্ট করে সে টার আউটপুট রি টার্ন করব

function celciusToFarenhite(celcius) {
    let celciusToFarenhite = (celcius * 9 / 5) + 32;
    return celciusToFarenhite;

}
console.log(celciusToFarenhite(2));

// 45) একইভাবে উল্টা হি সাব করবে । যাতে ত োমাকে ফারে নহাইট হি সে বে তাপমাত্রা দি লে সে টাকে
// সে লসি য়াস এ কনভার্ট করে আউটপুট দি বে ।
function farenhiteToCelcius(farenhite) {
    let celcius = (farenhite - 32) * 5 / 9;
    return celcius;
}
console.log(farenhiteToCelcius(0));

// 46) কে উ ১০০ এর মধ্যে কত মার্ক্স্ পে য়ে ছে সে টা ত োমাকে বলে দি বে । তুমি একটা ফাংশন দি য়ে বলে
// দি বে সে এ + পাবে নাকি অন্য ক োন গ্রে ড পাবে ।

function grade(marks) {
    if (marks >= 80) {
        return "A Grade";
    }
    else if (marks >= 60) {
        return "B Grade";
    }
    else if (marks >= 50) {
        return "C Grade";
    }
    else if (marks >= 40) {
        return "D Grade";
    }
    else if (marks < 40) {
        return "F Grade";
    }
}

console.log(grade(30));

// 47) সুদে র হি সাব করবে । জাস্ট হি সাব কে মনে করতে হয়। সে ই চি ন্তায় করবে । সুদ ভাল ো না খারাপ
// সে টা এখন চি ন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলর্মু া থাকলে সে টা কি ভাবে ক োড এ লি খতে হয়
// সে ই এঙ্গে ল থে কে করার চে ষ্টা কর ো।

var calculateInterest = function (total, year, rate) {
    var interest = rate / 100 + 1;
    return parseFloat((total * Math.pow(interest, year)).toFixed(4));
}

var answer = calculateInterest(915, 13, 2);
console.log(answer);

// 48) Suppose, you have an array with 8 elements.Find the smallest element of
// that array.
// Now for the previous array, try to find the second largest element.

const newArr = [4, 12, 56, 67, 88, 32, 12, 45];
let smallest = newArr[1];
for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    if (element < smallest) {
        smallest = element;
    }

}
console.log(smallest);

const newArr = [4, 12, 56, 67, 88, 32, 12, 45];
let largest = newArr[1];
let secondLargest = 0;
for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    if (element > largest) {
        secondLargest = largest
        largest = element;
    }
    else if (element > secondLargest && element !== largest) {
        secondLargest = element;
    }

}
console.log(secondLargest);

// 49) Write a function and take an array as a parameter.Find the average of all
// the elements of that array and return this average.

function make_avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;

    }
    return sum / array.length;
}

const numbers = [44, 34, 25, 78, 67, 23];
console.log(make_avg(numbers));

// Write a function which takes the height and width of a rectangle as
// parameters.Find out the area of that rectangle and print the result.

function area(height, width) {
    let area = height * width;
    return area;
}
console.log(area(12, 12));

// 51) একটা ক োড লি খ ো। যে টা দি য়ে ক োন একটা array এর মধ্যে সবচে য়ে ছ োট
// সংখ্যা বে র করে দি তে পারবে ।

const newArr = [4, 12, 56, 67, 88, 32, 12, 45];
let smallest = newArr[1];
for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    if (element < smallest) {
        smallest = element;
    }

}
console.log(smallest);

// 52) একটা ক োড লি খ ো যে টা দি য়ে তি নটা সংখ্যার মধ্যে সবচে য়ে ছ োট সংখ্যা বে র
// করে দি বে ।

function min_number(num1, num2, num3) {
    let min_number = Math.min(num1, num2, num3);
    return min_number;
}
console.log(min_number(65, 90, 78));

// 53) একটা ফাংশন লি খ ো। সে ই ফাংশনে র মধ্যে ইনপুট হি সে বে একটা array নি বে ।
// সে ই array এর মধ্যে অনে কগুলা সংখ্যা থাকবে । ত োমার কাজ হবে ইনপুট নে য়া
// array এর মধ্যে যতগুলা সংখ্যা আছে । সে ই সংখ্যা গুলার গড় বে র করবে ।
// তারপর সে ই গড় ফাংশনে র রি টার্ন হি সে বে দি য়ে দি বে । একটুচি ন্তা কর ো। বঝু ার
// চে ষ্টা কর ো। ট্রাই কর ো। দে খ ো পার ো কি না।
function make_avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;

    }
    return sum / array.length;
}

const numbers = [44, 34, 25, 78, 67, 23];
console.log(make_avg(numbers));

// 54) একটা ফাংশন লি খ ো। যে টা ইনপুট প্যারামি টার হি সে বে একটা আয়তক্ষে ত্রে র
// দৈ র্ঘ্য আর উচ্চতাকে নি বে । তারপর সে ই আয়তক্ষে ত্র এর area(আয়তন) কে
// রে জাল্ট হি সে বে রি টার্ন করবে ।

function area(height, width) {
    let area = height * width;
    return area;
}
console.log(area(12, 12));

// 55) (ট্রি কি ) ক োন একটা array এর মধ্যে অনে কগুলা সংখ্যা আছে । সে ই সংখ্যাগুল ো
// থে কে second largest সংখ্যা বে র করার একটা প্র োগ্রাম লি খ ো। দরকার হলে
// গুগলে সার্চ দাও। তারপর সার্চ রে জাল্ট দে খে বঝেুঝে বঝেুঝে করার চে ষ্টা কর ো।

const newArr = [4, 12, 56, 67, 88, 32, 12, 45];
let largest = newArr[1];
let secondLargest = 0;
for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    if (element > largest) {
        secondLargest = largest
        largest = element;
    }
    else if (element > secondLargest && element !== largest) {
        secondLargest = element;
    }

}
console.log(secondLargest);

// 56) একটা ফাংশন লি খ ো। সে টার মধ্যে তি নটা প্যারামি টার নি বে । এই তি নটা
// প্যারামি টার হবে ক োন একটা ত্রি ভুজে র তি নটা বাহু এর দৈ র্য্য। এখন ত োমার কাজ
// হচ্ছে ফাংশনে র ভি তরে কি ছুহি সাব নি কাশ করে ত্রি ভুজে র area(আয়তন) বে র
// করা। ক োন একটা ত্রি ভুজে র তি নটা বাহুর দৈ র্য্য দে য়া থাকলে সে টা থে কে কি ভাবে
// আয়তন বে র করতে হয় সে ই ফর্মুলর্মু া গুগল থে কে খুজেঁজে বে র কর ো।

function triangleArea(scale1, scale2, scale3) {
    let p = scale1 + scale2 + scale3;
    let s = p / 2;
    let triarea = Math.sqrt(s * (s - scale1) * (s - scale2) * (s - scale3));
    return triarea;
}

// 57) ক োন একটা সংখ্যা প্রাইম সংখ্যা(prime number) কি না। সে টা চে ক করার একটা
// ফাংশন লি খ ো।

function isPrimeNumber(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++){
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrimeNumber(33));

// 58) দইুটা ভে রি য়ে বল এর মধ্যে য োগ, বি য় োগ, গুণ, ভাগ কি ভাবে করতে হয় সে টা কি জান ো।
// অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জান ো। তাহলে নাম্বার টাইপে র দইুটা ভে রি য়ে বল
// লি খ ো তারপর তাদে র য োগ করে সে টার মান আরে কটা ভে রি য়ে বল এ রাখ ো। একইভাবে ওই দইুটা
// ভে রি য়ে বল এর মধ্যে বি য় োগ, গুন, ভাগ এবং ভাগশে ষ বে র কর ো।

var num1 = 23;
var num2 = 44;

var sum = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;

// 59) তুমি কি দইুটা ভে রি য়ে বল এরমধ্যে তুলনা করতে পার ো। কম্পারি জন করতে পার ো। যে দইুটা
// ভে রি য়ে বল এর মধ্যে প্রথমটা সে কে ন্ডটা এর চাইতে ছ োট, বড়, অসমান, সমান, ছ োট বা সমান,
//     বড় বা সমান। এইগুলা চে ক করতে পার ো। অর্থাৎ <, >, ==, !=, <=, >= চি হ্নগুলা ব্যবহার করতে
// পার ো। তাহলে দইুটা সংখ্যা টাইপে র ভে রি য়ে বল ডি ক্লে য়ার করে তাদে রকে এই ছয়ভাবে তুলনা করে
// ক োড লি খে ফে ল ো।

var a = 2;
var b = 4;

a > b; a < b; a == b; a != b; a <= b; a >= b;

// 60) ত োমার যদি দইুটা শর্ত পূরণ করতে বলে । এবং দইুটা শর্তে র মধ্যে দইুটাই পূরণ করতে হবে ।
// তাহলে তুমি কি সে টা চে ক করতে পারবে ? একইভাবে যদি বলে তুমি দইুটা শর্তে র যে ক োন একটা
// পূরণ করতে পারবে । অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পার ো কি না। যদি পার ো তাহলে
// নি জে নি জে এই রকমে র ক োড লি খে ফে ল ো।

var num1 = 45;
var num2 = 34;

if (num1 == 45 && num2 == 34 || num1 > 40 && num2 > 34) {
    console.log("I am gonna print this");
}

// 61) তুমি কি একটা শর্ত পালন করলে একটা কি ছুকরবে । শর্ত পূরণ না করলে অন্য কি ছুএকটা
// করবে এমন ক োড লি খতে পারবে । অর্থাৎ তুমি কি if-else এর ক োড লি খতে পারবে । পারলে একটা
// ক োড লি খে ফে ল ো

var money = 500;

if (money == 500) {
    console.log("I will go to cineplex")
}
else if (money > 200) {
    console.log("I will go to local cinema hall");
}
else {
    console.log("I will watch movie on phone")
}

// 62) ত োমাকে যদি বলে একটা while লপু দি য়ে ৭ থে কে ১৯ পর্যন্ত যতগুলা বি জ োড় সংখ্যা আছে
// সে গুলা দে খাতে । তুমি কি সে টা দে খাতে পারবে ? পারলে সে ই ক োড লি খে ফে ল ো।

let i = 7;
while (i <= 19) {
    console.log(i);
    i = i + 2;
}

// 63) ত োমাকে যদি বলা হয় তুমি একটা array ডি ক্লে য়ার করবে । এবং সে টার মধ্যে কয়টা উপাদান
// আছে সে টা বে র করবে হবে । সে ই array এর এর মধ্যে চতুর্থ পজি শন এর উপাদান চে ইঞ্জ করতে
// হবে । array এর মধ্যে দইুটা উপাদান য োগ করতে হবে । এবং একটা উপাদান কে বে র করে দি তে
// হবে । তুমি কি সে টা করতে পারবে ।

const names = ["mahmud", "shafi", "talha", "jabbar", "rafique"];
console.log(names.length);
names[3] = "rabbi";
names.push("alim", "nayem");
names.pop();
console.log(names);

// 64) তুমি কি একটা ফর লপু দি য়ে ক োন একটা array এর সবগুলা উপাদানকে দে খাতে পারবে । সে টা
// রে গুলার for লপু হ োক বা for of হ োক। হলে সে ই স্টাইলে একটা ক োড লি খে ফে ল ো।

const myArr = ["ajij", "talha", "zubair", "akash"];
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
    
}

// 65) ত োমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সে গুলাকে
// console log করে দে খাতে সে টা কি তুমি পারবে ? তাহলে তুমি সে ই ক োড করে ফে ল ো

const number = [80, 90, 23, 45, 99, 120, 78];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element >= 80) {
        console.log(element);
    }
    
}
// 66) তি নটা সংখ্যার গুনফল বে র করে ফাইনাল রে জাল্ট আউটপুট হি সে বে রি টার্ন করতে হবে । তুমি
// কি সে ই ক োড লি খতে পারবে । যদি পার ো তাহলে সে ই ক োড লি খে ফে ল ো।
//

function multiplication(num1, num2, num3) {
    let sum = num1 * num2 * num3;
    return sum;
}

console.log(multiplication(12, 13, 13));

// 67) একটা অবজে ক্ট ডি ক্লে য়ার করবে । সে টাতে তি নটা প্রপার্টি থাকবে । এবং ক োন একটা প্র োপার্টি
// এর মান চে ইঞ্জ করবা।

const phone = {
    name: "xiaomi",
    color: "black",
    price: 12000
}

phone.price = 32000;
console.log(phone);

// 68) সি ম্পল একটা ফাংশন লি খতে হবে । যে টার নাম হবে feetToInch এবং এই ফাংশন
// ইনপুট হি সে বে নি বে feet আর রি টার্ন করবে inch । অর্থাৎ এই ফাংশনকে ক োন
// একটা ফি ট বলে দি লে সে রি টার্ন হি সে বে বলে দি বে কত ইঞ্চি হয়।

function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}
console.log(feetToInch(12));

// 69) একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দি য়ে একটা ফাংশন
// লি খবে । এই ফাংশনে ইনপুট হি সাবে কে উ সে ন্টি মি টার দি বে আর সে ই সে ন্টি মি টার
// কে মি টার এ কনভার্ট করে রে জাল্ট রি টার্ন করবে ।

function cmToMetar(cm) {
    let metar = cm / 100;
    return metar;
}
console.log(cmToMetar(20));

// 70) আরে কটা ফাংশন লি খবে যে টার নাম লি খবে । যে ই ফাংশনে র নাম হবে paperRequirements
// এই ফাংশনে র প্যারামি টার হি সে বে তি নটা প্যারামি টার হবে । প্রথম প্যারামি টার হবে তুমি প্রথম বই
// কত কপি ছাপাতে চাও। সে কে ন্ড প্যারামি টার হবে তুমি সে কে ন্ড বই কত কপি ছাপাতে চাও। আর
// থার্ড প্যারামি টার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ ক োন বই এর কত কপি ছাপান ো
// হবে সে টাই প্যারামি টার হি সে বে নি বে ।
// এইবার ভাল ো করে খে য়াল কর ো।
// প্রথম বই ছাপান োর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সে কে ন্ড বই ছাপান োর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপান োর জন্য পৃষ্ঠা লাগবে ৩০০ টা
// এখন ত োমার কাজ হচ্ছে paperRequirements নামক ফাংশন লি খে ফে লা যাতে । সে ই ফাংশনকে
// কল করে ক োন বই এর কত কপি লাগবে বলে দি বে প্যারামি টার হি সে বে । আর ফাংশন হি সাব করে
// বলে দি বে ত োমার সর্বম োট কতপৃষ্ঠা কাগজ লাগবে ।
// উত্তর হি সে বে সংখ্যা রি টার্ন করবে ।

function paperRequirements(book1QN, book2QN, book3QN) {
    let book1 = 100;
    let book2 = 200;
    let book3 = 300;

    let paperForBook1 = book1 * book1QN;
    let paperForBook2 = book2 * book2QN;
    let paperForBook3 = book3 * book3QN;

    let totalPaper = paperForBook1 + paperForBook2 + paperForBook3;
    return totalPaper;
}

console.log(paperRequirements(2, 4, 5));

// 71) একটা ফাংশন লি খবে । এই ফাংশনে র নাম হবে bestFriend তারপর সে ই ফাংশনে
// ইনপুট প্যারামি টার হি সে বে একটা array নি বে । সে ই array এর মধ্যে ত োমার সব
// ফ্রে ন্ডে র নাম থাকবে । এখন ত োমার কাজ হচ্ছে যে ফ্রে ন্ড এর নাম সবচে য়ে বড় সে ই ফ্রে ন্ড এর
// নাম রি টার্ন করে দে য়া। এই ক্ষে ত্রে তুমি নামটা অর্থাৎ ফ্রে ন্ডে র নাম(স্ট্রি ং) রি টার্ন করতে হবে ।

const friends = ["mahmud", "tasnim", "rahi", "mamun", "muzahid", "lalsinghchadda"];

function bestFriend(array) {
    let bigname = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length > bigname.length) {
            bigname = element;
        }
        
    }
    return bigname;
}
console.log(bestFriend(friends));

// 72) এইটা একটুট্রি কি হতে পারে । একটা array এর মধ্যে অনে কগুলা সংখ্যা থাকবে ।
// ত োমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চে ক করা। এবং সংখ্যা
// গুলা যদি পজি টিভ সংখ্যা হয়। অর্থাৎ শনূ্য বা শন্যেূন্যে র চাইতে বড় হয় তাহলে
// সে গুলাকে ক োন একটা array এর মধ্যে রাখবে । আর যদি নে গে টিভ সংখ্যা হয়।
// তাহলে লপুটা স্টপ করে দি বে । এবং লপু বন্ধ করার আগ পর্যন্ত যতগুলা পজি টিভ
// সংখ্যা পাওয়া গে ছে । সে গুলা রি টার্ন করে দি বে ।

const numbers = [12, 56, 78, 90, 87, -45, 12, 34];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 0) {
        break;
    }
    console.log(element);
    
}
