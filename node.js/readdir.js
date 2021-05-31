// ./ 현재 디렉터리라는 의미
var testFolder = './data';
var fs = require('fs');


fs.readdir(testFolder, function(err , data){
 console.log(data) 

})