// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    // write your code here
    let f = [0, 1];
    for (let i = 2; i <= n; i++) {
        sum = (f[i - 1] + f[i - 2]) % 10;
        f.push(sum);
    }
    return f[n];
}

module.exports = fib;
