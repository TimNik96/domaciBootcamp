let n = 5;
let red = '';

for (let i = 1; i <= n; i++) {
    red = '';
    for (let j = 0; j < n; j++) {
        if (j < (n - i)) {
            red += ' ';
        }else{
            red += '#';
        }
    }
    console.log(red);
}