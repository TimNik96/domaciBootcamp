let brzina = [];
for(let i = 0; i < pokemoni.length; i++){
    brzina.push(pokemoni[i].Karakteristike.brzina);
}

brzina.sort(function(a, b){
    return a - b;
})

console.log(brzina);
let sortiraniPokemoniPoBrzini = [];
for(let i = 0; i < brzina.length; i++){
    for(let j = 0; j < pokemoni.length; j++){
        if(brzina[i] == pokemoni[j].Karakteristike.brzina){
            sortiraniPokemoniPoBrzini.push(pokemoni[j]);
        }
    }
}

console.log(sortiraniPokemoniPoBrzini);