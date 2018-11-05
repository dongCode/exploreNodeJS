const {argv, argv0, execArgv, execPath } = process;

argv.forEach(element => {
    console.log('argv element: ',element);
    
});

console.log('argv0: ',argv0);

console.log('execArgv: ', execArgv);

console.log('execPath: ', execPath);





