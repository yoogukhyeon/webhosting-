const fs = require('fs');
//동기로 callback 필요없다 
// console.log('A')

// const result = fs.readFileSync('./sample.txt' , 'utf8');
// console.log(result);
// console.log('c')





console.log('A')

//readFile 비동기로 callback 필요
const result = fs.readFile('./sample.txt' , 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }


});

console.log('c')