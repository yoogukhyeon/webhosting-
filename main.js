const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const {
    request
} = require('express');

const template = require('./lib/template')
const path = require('path');
const sanitizeHtml = require('sanitize-html');


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
                
                var list = template.list(filelist);

                var Html = template.html(title, list, `<h2>${title}</h2>${description}`,
                    `<a href="./create">Create</a>`
                );
                res.writeHead(200);
                res.end(Html);

                // var list = templateList(filelist);

                // var template = templateHTML(title, list, `<h2>${title}</h2>${description}`,
                //     `<a href="./create">Create</a>`
                // );
                // res.writeHead(200);
                // res.end(template);


            })



        } else {
            fs.readdir('./data', (err, filelist) => {
                const filteredId = path.parse(queryData.id).base;
        
                fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
                    var list = template.list(filelist);
                    var sanitizedTitle = sanitizeHtml(title);
                    var sanitizedDesc = sanitizeHtml(description , {
                        allowedTags: ['h1']
                    });
                    var Html = template.html(title, list, `<h2>${sanitizedTitle}</h2>${sanitizedDesc}`,
                        `<a href="./create">Create</a> 
                        <a href="/update?id=${sanitizedTitle}">updata</a> 
                        <form action="delete_process" method="post"> 
                            <input type="hidden" name="id" value="${sanitizedTitle}">
                            <input type="submit" value="delete">
                        </form>
                        `);
                    res.writeHead(200);
                    res.end(Html);
                });


            });

        }




    } else if (pathname === '/create') {

        fs.readdir('./data', (err, filelist) => {
            var title = "WEB -  CREATE";
            var list = template.list(filelist);

            var Html = template.html(title, list, `
                 <form action="/process_create" method="post">
                            <p><input type="text" name="title" placeholder="title"></p>
                            <p><textarea name="description" id="" cols="30" rows="20" placeholder="description"></textarea></p>
                            <p><input type="submit"></p>
                 </form>
            
            
            `, " ");
            res.writeHead(200);
            res.end(Html);
        })




    } else if (pathname === '/process_create') {
        var body = "";

        req.on('data', function (data) {
            body = body + data;
        })

        req.on('end', function () {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;


            fs.writeFile(`data/${title}`, description, 'utf8', (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    res.writeHead(302, {
                        Location: `/?id=${title}`
                    });
                    res.end()
                }
            });

        })




    } else if (pathname === '/update') {


        fs.readdir('./data', (err, filelist) => {
            const filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
                var list = template.list(filelist);
                var Html = template.html(title, list, `


                <form action="/update_process" method="post">
                    <input type="hidden" name="id" value="${title}">
                    <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                    <p><textarea name="description" id="" cols="30" rows="20" placeholder="description">${description}</textarea></p>
                    <p><input type="submit"></p>
                </form>
                
                
                
                `,
                    `<a href="/update?id=${title}">updata</a>`);
                res.writeHead(200);
                res.end(Html);
            });


        });






    }else if(pathname === "/update_process"){

        var body = "";

        req.on('data', function (data) {
            body = body + data;
        })

        req.on('end', function () {
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            var filteredId = path.parse(id).base;
            fs.rename(`data/${filteredId}`, `data/${title}`, (err, data) => {
                fs.writeFile(`data/${title}`, description, 'utf8', (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.writeHead(302, {
                            Location: `/?id=${title}`
                        });
                        res.end()
                    }
                });


            })
      
     

           

        })





    } else if(pathname === "/delete_process") {
        var body = "";

        req.on('data', function (data) {
            body = body + data;
        })

        req.on('end', function () {
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, (err , date) => {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(302, {
                        Location: `/`
                    });
                    res.end()
                }
                 
              
             
              });
            
     

           

        })

            

    } else {
        res.writeHead(404);
        res.end('Not Found')
    }



});
app.listen(3000);