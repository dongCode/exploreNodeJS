console.log('02 module')

const test = 'test'

function testFn() {
    console.log(test)
}

module.exports.test = test
module.exports.testFn = testFn