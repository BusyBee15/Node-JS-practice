// Asynchronous methods
const {readFile, writeFile}= require('fs')
console.time()
readFile('./content/text1.txt' ,'utf8',  (err, result)=>{
    if(err){
        console.log(err)
        return ;
    }
   const first = result;
   readFile('./content/text2.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return ;
    }
   const second = result;
   writeFile('./content/resAsync.txt',  `here is the result ${first} + ${second}`,
   {flag : 'a'},
   (err, result)=>{
    if(err){
        console.log(err)
        return ;
    }console.log(result)
   })
   })
})
console.timeEnd()