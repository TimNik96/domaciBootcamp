let cenaPizze = 500;
let precnikPizze = 32;
let povrsinaPizze;
let cenaPoCm2;

povrsinaPizze = Math.pow((precnikPizze/2), 2) * Math.PI;
cenaPoCm2 = povrsinaPizze / cenaPizze;

console.log(povrsinaPizze, cenaPoCm2);