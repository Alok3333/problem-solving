// You are given two numbers a & b. you have to implement the function isEqual()
// that will return true if the numbers are equal, else return false.

function isEqual(a, b) {
    // Condition for check equality
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

// let result = isEqual(5, "5");
// let result = isEqual(5, 5);
let result = isEqual(65, 56);

console.log(result);