function sposobnostiPokemona(pokemoni){
    let nizSposobnosti = [];
    pokemoni.forEach(element => {
        nizSposobnosti.push(element.Sposobnosti);
    });
    return nizSposobnosti; // return nizSposobnosti.flat();
}