let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function linearSearch(a,b){
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b){
            return i
        }
    }
    return null
}
console.log(linearSearch([1, 2, 3, 4],4))

function bubbleSort(array){
  
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]= [array[j+1], array[j]]
            }
        }
    }
    return array
}
console.log(bubbleSort([7, 4, 17, 3, 2, 5, 77]))
[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]

let sortArray = bubbleSort(arr)

function binarySearch(arr,res){
    let left = 0
    let right = arr.length-1
    while(left<=right){
    let middle = Math.floor((left+right )/2)
    let arrMiddle = arr[middle]
        if(arrMiddle == res){
            return middle
        }else if(arrMiddle < res) {
            left = middle +1
        }else {
            right = middle -1
        }
    }
}

console.log(binarySearch([1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11],7))
