const event = require('events')
class MyEvent extends event {}
const emitter = new MyEvent()

let j = 0

let i = 0
emitter.on('event', (text) => {
  console.log(text, this, this === emitter)
    j++
    console.log(i, j)
}) // es6 this  会进行两次输出
emitter.emit('event', 'hi')

emitter.on('event', function(text)  {
  console.log(text, this, this === emitter)
  i++
  console.log(i, j)
}) //非es6指向 只进行一次的输出
emitter.emit('event', 'hi')

