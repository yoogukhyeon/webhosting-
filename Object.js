
//배열
var member = ['yoo', 'guk' , 'hyeon'];
member.push('you' , 'America' , 'kiy');
member.unshift('1234');
member.pop();
member.shift();
// var i = 0;
// while( i < member.length){
//     console.log('array loop', member[i])
//     i += 1
// }
for(let i = 0; i < member.length; i++){
    console.log('array loop', member[i])
}


// console.log(member)


//객체 형식
var roles = {
    //key = value
    'programmer': 'egoing',
    'designer' : 'kkkk',
    'manager' : 'hyeon'
};

for( var k in roles){
    console.log('object => ', k , 'value =>', roles[k])
}

// var member = ['1' , '2' , '3' , '4'];
// member.push(5)

// for(let i = 0; i < member.length; i++){
//     console.log(member[i])
// }


// const project = {
//     'programmer' : 'me',
//     'coder' : 'kim',
//     'project' : 'our company',
//     'story' : 'story'
// };

// for(let k in project){
//     console.log('project =>', k , 'value =>' , project[k])
// }

