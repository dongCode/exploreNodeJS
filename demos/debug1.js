function test1() {
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)
    return test2(a, b)
}

function test2(a, b) {
    if (a > b) {
        return 1
    } else {
        return -1
    }
}

test1()