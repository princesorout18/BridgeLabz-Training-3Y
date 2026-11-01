function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

let numbers = [1, 2, 3, 4];

// Double each number
let doubled = applyOperation(numbers, function(num) {
    return num * 2;
});

// Square each number
let squared = applyOperation(numbers, function(num) {
    return num * num;
});

console.log("Doubled:", doubled);
console.log("Squared:", squared);