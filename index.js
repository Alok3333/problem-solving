// Repeating string using while loop & for loop

function repeatString(str, k) {
    let repeatStr = "";
    let i = 0;
    while(i < k){
        repeatStr += str;
        i++;
    }
    return repeatStr;
}

let ans = repeatString("ab", 4);
console.log(ans);