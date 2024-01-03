// Add the numbers from 1 to n

function findSumOfFirstN(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}

let ans = findSumOfFirstN(5);
console.log(ans);