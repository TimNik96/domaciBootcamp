function maximum(n, j, k) {
    let max = n;
    if (j > max) {
        max = j;
    } 
    if (k > max) {
        max = k;
    }
    return max;

}

let broj1 = 130;
let broj2 = 250;
let broj3 = 105;

console.log(maximum(broj1, broj2, broj3));