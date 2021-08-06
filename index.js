const fs = require('fs')

const path = process.argv[2]

console.log({path})

fs.readFile(path, (err, content) => {
    if (err) return console.log('Error loading file at path', path, err)

    console.log(JSON.stringify(JSON.parse(content)))
})