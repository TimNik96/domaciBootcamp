function cenaPicePoCm2(poluprecnik,cenaPice){
    let povrsina = poluprecnik * poluprecnik * Math.PI;
    return cenaPice / povrsina;
}

let r = 32;
let cena = 500;

console.log(cenaPicePoCm2(r, cena));