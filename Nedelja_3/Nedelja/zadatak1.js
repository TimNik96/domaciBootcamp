function elementiDeljiviSa5(array){
    array.forEach(element => {
        if(element % 5 === 0){
            console.log(element);
        }
    });
}

brojevi = [5, 10, 12, 15, 18, 23, 32];
elementiDeljiviSa5(brojevi);