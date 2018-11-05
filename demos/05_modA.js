module.exports.test = 'A';

const modB = require('./05_modB');
console.log('modB: ', modB.test);

module.exports.test = 'AA';