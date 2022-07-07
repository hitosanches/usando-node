const http = require("http")


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json' })
    res.end(JSON.stringify({
        data: 'hello world'
    }))
}).listen(8080 , () => console.log("Servidor rodando na porta 8080"));