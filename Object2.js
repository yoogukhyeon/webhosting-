// // array , object 

// function f1(){
//     console.log(1+1);
//     console.log(1+2);
// }

// var f = function(){
//     console.log(5+1);
//     console.log(5+2);
// }

// //함수 실행하기
// // f1();
// // f();

// var o = {
//     Number: f1,
//     Number2: f
// }

// o.Number();
// o.Number2();

var v1 = 'v1';
// 100000 code 
v1 = 'egoing';
var v2 = 'v2';

var o = {
    v1: 'v1',
    v2: 'v2',
    f1: function(){
        console.log(this.v1)
    },
    f2: function(){
        console.log(this.v2)
    }
};
o.f1();
o.f2();

//객체란 무엇인가? 서로연관된 데이터와 그데이터를 처리하는 방법인 함수를 그룹핑해서 코드의 복잡성을 낮추는것!