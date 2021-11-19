var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
   var _url = request.url;
   var queryData = url.parse(_url, true).query;
   console.log(queryData.id);
   if(_url == '/') {
      _url = '/index.html';
   }
   if(_url == '/favicon.ico') {
      return response.writeHead(404);
   }
   response.writeHead(200);
   var template =`
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document${queryData.id}</title>
   </head>
   <body>
      <h1>${queryData.id}</h1>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eligendi, voluptate eveniet unde eius cumque odit nemo dicta quia ab maxime culpa magni, aspernatur adipisci, possimus tempora amet eaque! Dolorem.
      </p>
   </body>
   </html>
   `;
   response.end(fs.readFileSync(template));
});
app.listen(5000);
