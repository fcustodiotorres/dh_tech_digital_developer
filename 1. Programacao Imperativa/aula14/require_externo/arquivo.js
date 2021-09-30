const fs = require('fs')

let arquivo = fs.readFileSync(__dirname + '/base.json','utf-8')
console.log(arquivo)
