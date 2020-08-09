const dugmeOrder1 = document.querySelector('#order1');
const dugmeOrder2 = document.querySelector('#order2');
const dugmeOrderNow1 = document.querySelector('#orderNow1');
const dugmeOrderNow2 = document.querySelector('#orderNow2');
const brojac = document.querySelector('#brojac');
let counter = 0;
let greska = "Nema porudzbina!";
// let datum = "08.09.2020. 20:00";
let datum = new Date();
danasnjiDatum = datum.getDate() + "." + (parseInt(datum.getMonth()) + 1) + "." + datum.getFullYear() + "." + " " + datum.getHours() + ":" + datum.getMinutes() + ":" + datum.getSeconds();

// console.log(danasnjiDatum);

dugmeOrder1.addEventListener('click', () => {
    counter++;
    brojac.innerHTML = counter;
});

dugmeOrder2.addEventListener('click', () => {
    counter++;
    brojac.innerHTML = counter;
});

dugmeOrderNow1.addEventListener('click', () => {
    if (counter == 0) {
        console.log(greska);
    } else {
        console.log(`Narucili ste [${counter}] pica, [${danasnjiDatum}]`);
        counter = 0;
    }
});

dugmeOrderNow2.addEventListener('click', () => {
    if (counter == 0) {
        console.log(greska);
    } else {
        console.log(`Narucili ste [${counter}] pica, [${danasnjiDatum}]`);
        counter = 0;
    }
});