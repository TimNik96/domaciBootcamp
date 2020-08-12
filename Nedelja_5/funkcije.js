//////////////////////// Zadatak 2 ////////////////////////////

export function sposobnostiPokemona(pokemoni){
    let nizSposobnosti = [];
    pokemoni.forEach(element => {
        nizSposobnosti.push(element.Sposobnosti);
    });
    return nizSposobnosti; // return nizSposobnosti.flat();
}

//////////////////////// Zadatak 5 ////////////////////////////

export function najjaciPokemon(nizPokemona) {
    let najjaciPok = nizPokemona[0].Karakteristike.napad;
    let pokemon;
    for (let i = 0; i < nizPokemona.length; i++) {
        if (najjaciPok < nizPokemona[i].Karakteristike.napad) {
            najjaciPok = nizPokemona[i].Karakteristike.napad;
            pokemon = nizPokemona[i];
        }
    }
    return pokemon;
}

export function prikaziPokemone(pokemoni, divGlavniNiz){
    pokemoni.forEach(element => {
        const divPrikaz = document.createElement('div');
        const pOpis = document.createElement('p');
        const imgPokemon = document.createElement('img');

        pOpis.textContent = element.Ime;
        imgPokemon.src = element.SlikaURL;

        divGlavniNiz.appendChild(divPrikaz);
        divPrikaz.appendChild(pOpis);
        divPrikaz.appendChild(imgPokemon);
    })
}

export function prikaziPobednika(pokemoni, divGlavniNajjaci){
    const divPrikaz = document.createElement('div');
    const pOpis = document.createElement('p');
    const imgPokemon = document.createElement('img');
    
    let najPokemon = najjaciPokemon(pokemoni);

    imgPokemon.src = najPokemon.SlikaURL;
    pOpis.textContent = najPokemon.Ime;
    
    divGlavniNajjaci.appendChild(divPrikaz);
    divPrikaz.appendChild(pOpis);
    divPrikaz.appendChild(imgPokemon);
}

//////////////////////// Zadatak 3 ////////////////////////////

export function sortirajPokemonePoBrzini(pokemoni){
    pokemoni.sort(function(a, b){
        return a.Karakteristike.brzina - b.Karakteristike.brzina;
    });
    console.log(pokemoni);
}
