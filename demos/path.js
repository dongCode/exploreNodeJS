const path = require('path');

const testVar = require('./02').test

console.log('path resolve: ', path.resolve('./'));
console.log('process.cwd: ', process.cwd());
console.log('__dirname: ', __dirname);
console.log('__filename: ', __filename);



