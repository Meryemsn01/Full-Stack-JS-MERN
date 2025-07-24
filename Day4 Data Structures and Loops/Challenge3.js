// Arrays & Loops 
// Task 1 : Speed run !! 

function sum(numbers){
    let sumNum = 0
    for(let number of numbers){
        sumNum+=number
    }
    return sumNum
}
console.log(sum([4, 2, 7]))

function countEven(numbers){
    let count = 0
    for(const number of numbers){
        if(number%2 == 0){
            count++
        }
    }
    return count
}
console.log(countEven([4, 2, 7]))

function double(numbers){
    let newTab = []
    for (const number of numbers) {
        newTab.push(number*2)       
    } 
    return newTab
}
console.log(double([4, 2, 7]))

// Task 2 : The pair of socks

function pairOfSocks(Socks){
    let numSoks = 0
    for (let i = 0; i< Socks.length; ++i) {
        for (let j = i+1; j < Socks.length; ++j) {
                if(Socks[i] == Socks[j]){
                numSoks+=1
                Socks.splice(j,1)
                Socks.splice(i,1) 
                } 
                if(Socks[i] == Socks[j]){
                numSoks+=1
                Socks.splice(j,1)
                Socks.splice(i,1)
                } 
        }
    } 
    return numSoks
}
console.log(pairOfSocks([1, 3, 3, 3, 3]))

