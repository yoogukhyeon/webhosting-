// console.log('A')
// console.log('B')



// var i = 0
// while( i < 2) {
//     console.log('C')
//    i = i +1;
// }

//CRUD CREAT READ UPDATE DELETE 
// var arr = ['A' , 'B' , 'C' , 'D'];

// console.log(arr[2]);
// console.log(arr[3]);
// //배열은 []시작 배열을 바꾸고 싶을떄 arr[] = 값
// arr[2] = 3;
// //push 배열에 뒤에 값을 추가할떄 넣는것 
// arr.push('E');
// console.log(arr)



// 숫자 더하기 total 개수 더하기
var number = [1, 400, 12 , 34 , 19, 5, 6];

var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];   
     i = i + 1;
}
console.log(`total : ${total}`);