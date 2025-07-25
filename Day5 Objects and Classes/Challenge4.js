//Task 1 : Warm up !
const object = {
    firstname : 'Meryem',
    lastname : 'Souaini',
    age : 22,
    get fullname() {
        return this.firstname + this.lastname
    } 
}

//Task 2 : Are you Older Than me ?
class Person {
    constructor (name,age){
        this.name = name
        this.age = age
    }
    compareAge(object){
        if(object.age > this.age){
            return object.name + ' is older than me.'
        }else if(object.age < this.age){
            return object.name + ' is the younger than  me.'
        }else {
            return object.name + ' is  the same age as me.'
        }
    }
}

let p1 = new Person("Samuel", 24)
let p2 = new  Person("Joel", 36)
let p3 = new  Person("Lily", 24)

console.log(p1.compareAge(p2) )  
console.log(p2.compareAge(p1) )  
console.log(p1.compareAge(p3) )  

//Task 3 : Most Occurred

function mostOccured(array){
    let count = 0
    let largeCount = 0
    let mOccured = 0
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 1; j < array.length-1; j++) {
            if(i != j){
                if(array[i] == array[j]){
                count++
                
            }
            if(count> largeCount){
                largeCount = count 
                mOccured = array[i]
            }
            }
        }
        count = 0
    }
    return mOccured
}

console.log(mostOccured([4, 2, 2, 7, 2,7,7,7,7]))