const fs = require('fs')


function readFileAsync(path){
    fs.readFile(path, (err, data)=>{
        myPromise = new Promise(function(resolve, reject) {
            if(!err) resolve('OK!')
            else reject(err)
        })
        myPromise
        .then (() => console.log(data.toString()))
        .catch(() => console.log(err) )
    })
}

readFileAsync('text.txt')



function writeFileAsync(path , content){
    fs.appendFile(path, content ,(err)=>{
        const myPromise =  new Promise((resolve, reject) => {
            if(err) reject(err)
            else resolve('ok')
        })
         myPromise
        .then(() =>console.log('content written succesfully'))
        .catch(()=>console.log(err))
    })
}

writeFileAsync('text.txt', '  new content')

// function processFiles(path){
//     let value = readFileAsync(path)
//     console.log(value)
//     let result = value
//     writeFileAsync(result, "meryem")
//     console.log(result)
// }
// processFiles('text.txt')