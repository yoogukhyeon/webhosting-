const http = require('http');
const url = require('url');

const port = 3005;


const server = http.createServer( (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;;
    
    
    if(pathname === '/address'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`<p>춘천시</p>
        <p>퇴계동</p>
        <p>현대1차 아파트</p>
        <p>105동 1401호</p>
        `)
    } else if(pathname === '/company'){
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(`
        <p>서울특별시</p>
        <p>성동구</p>
        <p>성수동</p>
        `)
    }else if(pathname === '/name'){
        res.writeHead(200, {'Content-Type' : 'text-html; charset=utf-8'});
        res.end(`
         <h1>Yoo Guk Hyeon</h1>
        `)
    }else {
        res.writeHead(400, {'Content-type': 'text/html; charset=utf-8'});
        res.end('포트 연결 실패')
    }


})


server.listen(port , () =>{
    console.log(`${port}포트로 포트 이동중입니다.`)
})