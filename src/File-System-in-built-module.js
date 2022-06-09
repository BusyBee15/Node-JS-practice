// synchronous methods
const {readFileSync, writeFileSync}= require('fs')
// not ../ , you're already in node practice
const first = readFileSync('./content/text1.txt', 'utf8');
const second = readFileSync('./content/text2.txt','utf8');

console.log(first , second);

writeFileSync(
    './content/result.txt',
     `here is the result ${first} + ${second}`,
     {flag : 'a'}
)