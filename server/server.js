const http = require('http');
var fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/form1":
            res.writeHead(200);
            res.end("Form1 Success");
            writeToFile(req);
            break
        case "/getData":
            //res.writeHead(200);
            //res.end("Form2 Success");
            readFile(req, res);
            break
        default:
            res.writeHead(200);
            writeToFile(req)
            res.end(JSON.stringify({ error: "Form Submitted" }));
    }
});

function writeToFile(request) {
    const chunks = [];
    request.on('data', chunk => {
        chunks.push(chunk);
    });
    request.on('end', () => {
        const data = Buffer.concat(chunks);
        fs.appendFileSync("temp.txt", data, (err) => {
            if (err) console.log(err);
        });
    })
}

function readFile(request, response) {
    const { headers, method, url } = request;
    response.on('error', (err) => {
        console.error(err);
    });
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const data = fs.readFileSync('temp.txt', 'utf8');
    console.log(data);
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})
    const responseBody = { data };

    response.write(JSON.stringify(responseBody));
    response.end();
}



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});