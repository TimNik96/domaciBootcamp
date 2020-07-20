let kurs = 10000;
let budzet = 15000;

if((budzet - kurs) < 0){
    console.log("Nemate dovoljno novca!", budzet);
}else{
    console.log("Uspesno ste kupili proizvod! Preostali novac:", budzet - kurs);
}