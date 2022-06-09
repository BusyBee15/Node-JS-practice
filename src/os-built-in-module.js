const os = require('os')



// info about the current user
console.log(os.userInfo())

//const os= require('os')
//console.log(userInfo)

console.log(os.uptime())

//require('os')
//console.log(uptime()) - doesn;t work

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}

console.log(currentOS)