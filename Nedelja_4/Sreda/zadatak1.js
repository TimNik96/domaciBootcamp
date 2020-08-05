let pokemon1 = {
    Ime: "Pikachu",
    Vrsta: "elektricni",
    Sposobnosti: ["elektricni_udar", "visestruka_munja"],
    Karakteristike: {
        napad: 50,
        odbrana: 30,
        brzina: 90
    }    
};

let pokemon2 = {
    Ime: "Blastoise",
    Vrsta: "vodeni",
    Sposobnosti: ["vodeni_top", "tornado"],
    Karakteristike: {
        napad: 60,
        odbrana: 40,
        brzina: 35
    }
};

let pokemon3 = {
    Ime: "Squirtle",
    Vrsta: "vodeni", 
    Sposobnosti: ["vodeni_top", "vodena_kugla"],
    Karakteristike: {
        napad: 40,
        odbrana: 30,
        brzina: 80
    }
};

let pokemon4 = {
    Ime: "Charizard",
    Vrsta: "vatreni",
    Sposobnosti: ["vatrena_kugla", "vatreni_vrtlog", "udarac_krilom"],
    Karakteristike: {
        napad: 80,
        odbrana: 60,
        brzina: 30
    }
};

let pokemoni = [];

pokemoni.push(pokemon1, pokemon2, pokemon3, pokemon4);

// console.log(pokemon4.Sposobnosti[1]);
// console.log(pokemoni[2]);
// console.log(pokemon3.Karakteristike.napad);
console.log(pokemoni);