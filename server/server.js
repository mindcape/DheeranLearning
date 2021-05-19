const http = require('http');
var fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });



const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/form1":
            res.writeHead(200);
            res.end("Success");
            writeToFile(req);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
});


function writeToFile(req) {
    var data = "New File Contents";

    fs.writeFile("temp.txt", data, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
}



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});