var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
const { request } = require('express');

function templateHTML(title, list, body) {
    return `<!doctype html>
    <html>
  <head>
   <title>WEB1 - ${title}</title>
   <meta charset="utf-8">
 </head>
 <body>
   <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="./create">Create</a>
    ${body}
   </p>
 </body>
 </html>
 `;
};



function templateList(filelist) {
    var list = '<ul>'

    var i = 0;

    while (i < filelist.length) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
        i = i + 1;

    }

    list = list + '</ul>';

    return list;
}



var app = http.createServer(function (req, res) {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    console.log(pathname)
    var title = queryData.id;

    if (pathname === "/") {
        if (queryData.id === undefined) {


            fs.readdir('./data', (err, filelist) => {
                var title = "welcome";
                var description = "블로그 연습을 위해서 node.js 기반으로 작업을 합니다";
                var list = templateList(filelist);

                var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
                res.writeHead(200);
                res.end(template);
            })



        } else {
            fs.readdir('./data', (err, filelist) => {
                fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
                    var list = templateList(filelist);
                    var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
                    res.writeHead(200);
                    res.end(template);
                });
     
     
            });
     
        }
    
    
    
    
    }else if(pathname === '/create'){

        fs.readdir('./data', (err, filelist) => {
            var title = "WEB -  CREATE";
            var list = templateList(filelist);

            var template = templateHTML(title, list, `
                 <form action="/process_create" method="post">
                            <p><input type="text" name="title" placeholder="title"></p>
                            <p><textarea name="description" id="" cols="30" rows="20" placeholder="description"></textarea></p>
                            <p><input type="submit"></p>
                 </form>
            
            
            `);
            res.writeHead(200);
            res.end(template);
        })




    } else if(pathname === '/process_create'){
        var body = "";

        req.on('data' , function(data){
            body = body + data;
        })

        req.on('end' , function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            console.log(title)
        })


        res.writeHead(200);
        res.end('success')

    } else {
        res.writeHead(404);
        res.end('Not Found')
    }



});
app.listen(3000);