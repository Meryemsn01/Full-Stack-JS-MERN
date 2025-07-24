//The Basics
//Task 1 :  Warm up
let firstname = 'Meryem'
let lastname = 'Souaini'
const PI = 3.14
let radius = 4
let favoriteSuperhero = 'Spider-Man'
let favoriteQuote = 'To be, or not to be: that is the question.'

//Task 2 :  Speed run
let MyName = firstname + lastname
let area = PI * radius*radius
let perimeter = 2 * PI * radius

let motivation = 'A wise man named' + favoriteSuperhero +":"+ favoriteQuote
console.log(motivation)

//Task 3 :  Variable swap
let a = 3;
let b = 10;

let c;

c = a
a = b
b = c

console.log("After swapping: a =",a , "and b =", b);

//Conditional Statements
//Task 1 : Even or Odd
let evenOrOdd = 2
if (evenOrOdd % 2 == 0){
    console.log("even")
}else{
    console.log("odd")
}

//Task 2 :  Days of the week
let day = 4;

switch(day) {
    case 1: 
    console.log("Monday")
    break;
    case 2: 
    console.log("Tuesday")
    break;
    case 3: 
    console.log("Wednsday")
    break;
    case 4: 
    console.log("Thursday")
    break;
    case 5: 
    console.log("Friday")
    break;
    case 6: 
    console.log("Saturday")
    break;
    case 7: 
    console.log("Sunday")
    break;
    default:
    console.log("Unvalid Day")
}

//Task 3 : Maximum
let am = -15;
let bm = 6;
let cm = 2.6;

if(am > bm && am > cm){
    console.log(am)
}else if(bm > am && bm > cm){
    console.log(bm)
}else{
    console.log(cm)
}

//The Teacher
grade = 85

if(grade > 85){
    console.log("A")
}else if (grade <= 85 && grade > 70 ){
    console.log("B")
}else if(grade <= 70 && grade > 55){
    console.log("C")
}else if(grade <= 55 && grade > 40){
    console.log("D")
}else if(grade <= 40 && grade > 15){
    console.log("E")
}else{
    console.log("D")
}