const fs = require('fs')

fs.rename('./010.js', './01.js', (err) => {
  if(err) console.log(err)
  console.log('rename success')
})

fs.stat('./01.js', (err, stat) => {
  if(err) console.log(err)
  console.log(stat)
})