const names = require('./modulesdemo-names') //takes path of the file
// path as just 'modulesdemo-names' doesnot work
//console.log(names.john)

// console log names and see how to use john and peter
// one way - destructring
//other - directly access using dot operator
const sayHi = require('./modulesdemo-utils')

sayHi(names.john)
sayHi(names.peter)