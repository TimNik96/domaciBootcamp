let n = 10;
let red = '';
let k = 0;

for(let i = 0; i < n; i++){
    red = '';
    for(let j = 0; j <= n + 1; j++){    // petlja ide do 6 kako bi se ispisala leva strana piramide i space karakter
        if(j == (n + 1)){
            red += ' ';
        }else if(j < (n - i)) {
            red += ' ';
        }else{
            red += '#';
        }
    }
    red += '#'.repeat(i + 1) + ' '.repeat(n - i - 1);     // kada je napravljen red za prvu stranu piramide sa space-om, dodaje se red desne strane piramide
    console.log(red);
}