//Immediate 最后执行
setImmediate(() => {
    console.log('setImmediate');
})
// 中间执行
setTimeout(() => {
    console.log('timerout');

})
// 循环调用可能导致后面的不能执行了
process.nextTick(() => {
    console.log('nextTick');
    process.nextTick(() => {
        console.log('nextTick2');       
    })
})