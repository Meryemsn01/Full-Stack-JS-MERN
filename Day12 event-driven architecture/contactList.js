const readLine = require('readline');
const contacts = 
[   { name: 'mertem', phone: '921823' },
    { name: 'ilyas', phone: '97854' }
] 

const r1 = readLine.createInterface({
    input: process.stdin,
    output : process.stdout,
})

let contact = []
function contactName(){
    r1.question('what is contact name?' , nameContact => {
        r1.question('what is contact phone?' , Phone => {
            contact.push({name: nameContact, phone:Phone})
            console.log(contact)
            r1.close()
        })
    })
}
// contactName()

function search(){
    r1.question('enter the contact name ' , findContact => {
        console.log(contacts.filter((contact) => contact.name == findContact ))
    })
    
}
search()