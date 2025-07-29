function digitalRoot(n) {
  let sum = 0
  let string = n+""
while(true){
    for(let i=0 ; i<string.length ;i++){
        sum+=Number(string[i])
    }
    string = sum+""
    sum = 0
    if(string.length == 1){
        return Number(string)
    }
}
}

console.log(digitalRoot(555))