function maximum(n, j, k){
    let max = n;
    if(j > max){
        max = j;
    }else if(k > max){
        max = k;
    }
    return max;
}

let broj1 = 15;
let broj2 = 35;
let broj3 = 25;

console.log(maximum(broj1, broj2, broj3));