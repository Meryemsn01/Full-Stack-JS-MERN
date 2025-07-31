const { json } = require("stream/consumers")

// async function fetchUserData(){
//     const data = await fetch("https://dummyjson.com/users")
//     const result = await data.json()
//     console.log(result)
// }   
// fetchUserData()

async function processUserData(result) {
    const data = await fetch("https://dummyjson.com/users")
    const res = await data.json()
    const users = res.users
    let maleData = users.filter(array => array.gender = "male" )
    // console.log(maleData)
    let newData = maleData.map(x => ["Name:" + x.firstName + ",Age:" + x.age] )
    // console.log(newData)
    const [name,age] = newData
    // console.log(age)
}
processUserData()