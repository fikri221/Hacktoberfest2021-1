const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(lcm(a, b));
        process.exit();
    }
}

function lcm(a, b) {
    for (let i = 1; i <= a * b; i++) {
        if (i % a == 0 && i % b == 0) {
            return i;
        }
    }
    return a * b;
}