let pokemoni = [
    {
        Ime: "Pikachu",
        Vrsta: "elektricni",
        Sposobnosti: ["elektricni_udar", "visestruka_munja"],
        Karakteristike: {
            napad: 50,
            odbrana: 30,
            brzina: 90
        }    
    },
    {
        Ime: "Blastoise",
        Vrsta: "vodeni",
        Sposobnosti: ["vodeni_top", "tornado"],
        Karakteristike: {
            napad: 60,
            odbrana: 40,
            brzina: 35
        }
    },
    {
        Ime: "Squirtle",
        Vrsta: "vodeni", 
        Sposobnosti: ["vodeni_top", "vodena_kugla"],
        Karakteristike: {
            napad: 40,
            odbrana: 30,
            brzina: 80
        }
    },
    {
        Ime: "Charizard",
        Vrsta: "vatreni",
        Sposobnosti: ["vatrena_kugla", "vatreni_vrtlog", "udarac_krilom"],
        Karakteristike: {
            napad: 80,
            odbrana: 60,
            brzina: 30
        }
    }
];
    
function najjaciPokemon(nizPokemona){
    let najjaciPok = nizPokemona[0].Karakteristike.napad;
    let pokemon;
    for(let i = 0; i < nizPokemona.length; i++){
        if(najjaciPok < nizPokemona[i].Karakteristike.napad){
            najjaciPok = nizPokemona[i].Karakteristike.napad;
            pokemon = nizPokemona[i];
        }
    }
    return pokemon;
}
    

console.log(najjaciPokemon(pokemoni));
