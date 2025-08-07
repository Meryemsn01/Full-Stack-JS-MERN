// function fizzBuzz(num){
//     switch(true){
//         case num%3 == 0 && num%5 == 0:
//         console.log("FizzBuzz")
//         break;
//         case num%3 == 0:
//         console.log("Fizz")
//         break;
//         case num%5 == 0:
//         console.log("Buzz")
//         break;
//         default:
//             console.log(num)
//     }
// }
// fizzBuzz(15)
// function diaz(num){
// let a =num/2-1
//     for(let i=1 ; i<=num ; i+=2){
//         console.log(" ".repeat(a)+"B".repeat(i))
//         --a
//     }
// }
// diaz(10)

const { log } = require("console")

// function countVowels(word){
//     let sum= 0
//     for(let i=0; i<=word.length ; i++){
//         if(word[i]== "a" || word[i]== "e" || word[i]== "i" || word[i]== "o" || word[i]== "u" ){
            
//             sum+=1
//         }
//     }
//     console.log(sum)
// }
// countVowels("meryem")

// function countVowels(word){
//     let sum= 0
//     voy =["a" ,"e" ,"i" ,"o", "u"]
//     for(let i=0; i<word.length ; i++){
//         for(let y=0; y<voy.length ; y++){
//             word[i]==voy[y] && ++sum 
//         }
//     }
//     console.log(sum)
// }
// countVowels("meryem")

// function findMax(arr){
//     let max = arr[0];
//     for(let i=0; i<arr.length; i++){
//         arr[i]>max && (max = arr[i])
//     }
//     console.log(max)
// }
// findMax([2, 87, 1, 90])


// // function filterLongWords(arry){

// //     let maxWord = []
// //     for(let i=0; i<arry.length; i++){
// //         arry[i].length > 5 && maxWord.push(arry[i])
// //     }
// //     console.log(maxWord)
// // }
// // filterLongWords(["apple", "banana", "carrot", "dog"])

// // var isPalindrome = function(x) {
// //     let newVar = x.toString()
// //     let a = newVar.split("").reverse().join("")
// //     for(let i=0 ; i<newVar.length ; i++){
// //         for(let j=0 ; j<a ; j++){
// //             console.log(newVar[j])
// //             if (newVar[i] == newVar[j]){
                
// //                 return true;
// //             }else{
// //                 return false;
// //             } 
// //         }
// //     }
// // };
// //  console.log(isPalindrome(12451))


// // let colors = [
// //     [255, 0, 0],
// //     [0, 255, 0],
// //     [0, 0, 255]
// // ]; 

// // const board = [
// //     ['X', null, 'O'],
// //     ['O', 'X', null],
// //     [null, 'O', 'X']
// // ]; 

// // for (let i = 0; i < colors.length; i++) {
// //     for (let j = 0; j < colors[i].length; j++) {
// //         console.log(colors[i][j]);
// //     }
// // }


    
//     let nums= [2,6,4,8,8]
//     let uniqueNums = [...new Set(nums)];

//     uniqueNums.sort()
//     console.log(uniqueNums[uniqueNums.length-2])



// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

// Saurais-tu deviner l’ordre d’exécution ?

// function maskify(cc) {
//     for(let i= 0 ; i<cc.length-4 ; i++){
//         cc = cc.substring(0,i) + "#" + cc.substring(i+1, cc.length);
//     }
//     return cc
// }

// function maskify(cc) {
//     for(let i = cc.length-5; i > -1; i--){
//       cc = cc.substring(0, i) + "#" + cc.substring(i+1, cc.length);
//     }
//   return(cc)
// }
// console.log(maskify("123345676865787"))

// function digitalRoot(n) {
//   let sum = 0
//   let string = n+""
// while(true){
//     for(let i=0 ; i<string.length ;i++){
//         sum+=Number(string[i])
//     }
//     string = sum+""
//     sum = 0
//     if(string.length == 1){
//         return Number(string)
//     }
// }
// }

// console.log(digitalRoot(555))

// function myfunction(s) {
//     let res= s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("")
//     let dis = res.length-1
//     for (let i = 0; i < res.length; i++) {
//         if(res[i] != res[dis]){
//             return false
//         }
//         --dis
//     }
//     return true
// };

// console.log(myfunction("A man, a plan, a canal: Panama"))

// function parentheses(s) {
//     array = s.split('')
//     // console.log(array)
//     let a = '{[('
//     let b = '}])'
//     let res = true
    
//     for(let i = 0; i < array.length; i++) {
//         if((!a.includes(array[i]) && !a.includes(array[i+1]) || !b.includes(array[i]) && !b.includes(array[i+1]))){
//             if(a.includes(array[i])){
//                 if(b.includes(array[i+1])){
//                     if(a.indexOf(array[i]) == b.indexOf(array[i+1])){
//                         // console.log(array[i], array[i+1])
//                         res = true
//                     }
//                 }
//             }
//         }  
//     }
//     return res
// };





// array = ['m','e','e']
// console.log(array.indexOf('m'))

// function parentheses(s) {
//     array = s.split('')
//     // console.log(array)
//     let a = ['(' , ')']
//     let b = ['[' , ']']
//     let c = ['{' , '}']
//     for (let i = 0; i < array.length; i++) {
//         // if((array[i] == b[0] && array[i+1]==b[1]) || (array[i+1] == b[0] && array[i]==b[1]) ){
//         //     console.log(array[i] , array[i+1])
//         // }
        
//     }
// };
// parentheses('{[]}')