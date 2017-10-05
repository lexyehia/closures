// Normal Die

var rollDie = function () {
    return Math.floor(1 + Math.random() * 6);
}

// console.log(rollDie());  // 1 (for example)

// Loaded Die

function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    /* Your code here */

    return function() {
        var [head, ...tail] = list;
        list = tail.concat(head);

        return head;
    }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

// Countdown

var countdownGenerator = function (x) {
    //var internalClock = x;

    return function() {
        if(x > 0) {
            console.log(`T-minus ${x}...`);
            x--;
        } else if (x === 0) {
            console.log("Blast Off!");
            x--;
        } else {
            console.log("Rockets already gone, bub!")
        }
    }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!