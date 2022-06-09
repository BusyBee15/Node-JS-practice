const {readFile} = require('fs')
console.log("text before readfile - starting first task")
readFile('./Content/test3.txt', 'utf8', (err, res)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(res)
    console.log("completed first task")
})
console.log("text after read file - starting second task")

// absolutey understood what is happening here !! Yay!!!