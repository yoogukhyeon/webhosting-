const http = require('http');
const fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){
    return template = `
    <!doctype html>
    <html>
    
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
    </head>
    
    <body>
      <h1><a href="/">WEB</a></h1>
      <input id="night_day" type="button" value="night" onclick="
        nightDayHandler(this);
      ">
      ${list}
      ${body}
    
    </body>
    
    </html>
    `;
} 

function templateList(data){
  var list = '<ul>';
  var i = 0;
  while(i < data.length){
    list = list + `<li><a href="/?id=${data[i]}">${data[i]}</a></li>`;
    i = i + 1;
  }
  list =  list+'</ul>';
  return list;

}









const app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;



  if (pathname === '/') {
    if (queryData.id === undefined) {

      fs.readdir('./data' , function(err , data){
        var title = 'welcome';
        var desc = 'Hello, javascript';

        var list = templateList(data);
       var template = templateHTML(title, list, `<h2>${title}</h2>${desc}`);
        response.writeHead(200);
        response.end(template);
   
      })
      
    }else{
      fs.readdir('./data' , function(err , data){
  
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, desc) => {
          var title = queryData.id;
          var list = templateList(data);
          var template = templateHTML(title, list, `<h2>${title}</h2>${desc}`);
          response.writeHead(200);
          response.end(template);
        })
      })
    }
  } else {

    response.writeHead(404);
    response.end('Not Found');
  }
})


app.listen(3000, () => {
  console.log('3000포트로 이동중');

})