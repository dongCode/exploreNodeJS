//循环依赖 不会重复加载 第二句没有执行 避免循环依赖
//第一个require 加载了 模块 A B 第二局发现有缓存不执行
const modA = require('./05_modA');

const modB = require('./05_modB');

//执行结果 modA: A modB: BB 