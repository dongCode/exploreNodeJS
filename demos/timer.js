//Immediate 最后执行
setImmediate(() => {
    console.log('setImmediate');
})
// 当时间设置为0时在中间执行 
setTimeout(() => {
    console.log('timeout');
}, 1000)
// 循环调用可能导致后面的异步队列不能执行了
process.nextTick(() => {
    console.log('nextTick');
    process.nextTick(() => {
        console.log('nextTick2');       
    })
})