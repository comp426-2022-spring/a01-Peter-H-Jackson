// Require http module
const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  const fs = require('fs')

  // Require fs module
  fs.readFile('./www/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
    console.exit(0)
  })
  res.end(fs)
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})