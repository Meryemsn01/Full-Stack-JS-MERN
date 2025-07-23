//Loops
//Task 1 : Factorial
let num = 5;

let fact = 1;
for(let i=1 ; i <= num; i++){
    fact = fact*i
    
}
console.log(fact)

//Task 2 : How many digits ?
var num2 = 123542;

console.log(num2.toString().length)

//Task 3 :  Time to draw !
let a = 3
for(let i=1 ; i <= 8 ; i+=2){
        console.log( " ".repeat(a) + "*".repeat(i))
            --a
}

//Functions & Reusability

//Task 1 : Going back in Time !
function Factorial(num){
    let fact = 1;
    for(let i=1 ; i <= num; i++){
        fact = fact*i
    }
    // console.log(fact)
    return fact;
}

Factorial(5)

function nDigits(num2){
    console.log(num2.toString().length)
}

nDigits(123542)

function numberToDay(day){
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
}

numberToDay(1)

function max(a, b, c){
    if(a > b && a > c){
        console.log(a)
    }else if(b > a && b > c){
        console.log(b)
    }else{
        console.log(c)
    }
}

max(1, 2, 3)

function myGrade(grade){
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
}

myGrade(70)

function combinator(n, p){
    c = Factorial(n) / (Factorial(p) * Factorial(n-p))
    console.log(c) 
}

combinator(5, 2)

function calculator(num1, oper, num2){
    if(oper === "+"){
        console.log(num1 + num2)
    }else if(oper === "-"){
        console.log(num1 - num2)
    }else if(oper === "*"){
        console.log(num1 * num2)
    }else if(oper === "/"){
        console.log(num1 / num2)
    }else if(oper === "%"){
        console.log(num1 % num2)
    }else if(oper === "c"){
        combinator(num1, num2)
    }
}

calculator(5, "+", 1) 
calculator(3, "*", -4) 
calculator(5, 'c', 2)


