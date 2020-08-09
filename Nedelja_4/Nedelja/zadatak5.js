const prikaziPokemone = document.querySelector('#prikaz');
const prikaziPobednika = document.querySelector('#pobednik');
const body = document.querySelector('#body');
const divGlavniNiz = document.createElement('div');
const divGlavniNajjaci = document.createElement('div');
const divOrganizacija = document.createElement('div');
body.appendChild(divOrganizacija);
divOrganizacija.id = "row";
divOrganizacija.appendChild(divGlavniNiz);
divOrganizacija.appendChild(divGlavniNajjaci);
divGlavniNiz.id = "prikazi";
divGlavniNajjaci.id = "prikaziNajjaceg";

let pokemoni = [
    {
        Ime: "Pikachu",
        Vrsta: "elektricni",
        Sposobnosti: ["elektricni_udar", "visestruka_munja"],
        Karakteristike: {
            napad: 50,
            odbrana: 30,
            brzina: 90
        },
        SlikaURL: "./Picture/Pikachu.jpg"
    },
    {
        Ime: "Blastoise",
        Vrsta: "vodeni",
        Sposobnosti: ["vodeni_top", "tornado"],
        Karakteristike: {
            napad: 60,
            odbrana: 40,
            brzina: 35
        },
        SlikaURL: "./Picture/Blastoise.jpg"
    },
    {
        Ime: "Squirtle",
        Vrsta: "vodeni",
        Sposobnosti: ["vodeni_top", "vodena_kugla"],
        Karakteristike: {
            napad: 40,
            odbrana: 30,
            brzina: 80
        },
        SlikaURL: "./Picture/Squirtle.jpg"
    },
    {
        Ime: "Charizard",
        Vrsta: "vatreni",
        Sposobnosti: ["vatrena_kugla", "vatreni_vrtlog", "udarac_krilom"],
        Karakteristike: {
            napad: 80,
            odbrana: 60,
            brzina: 30
        },
        SlikaURL: "./Picture/Charizard.jpg"
    }
];

function najjaciPokemon(nizPokemona) {
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

prikaziPokemone.addEventListener('click', () => {
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
});

prikaziPobednika.addEventListener('click', () => {
    const divPrikaz = document.createElement('div');
    const pOpis = document.createElement('p');
    const imgPokemon = document.createElement('img');
    
    let najPokemon = najjaciPokemon(pokemoni);

    imgPokemon.src = najPokemon.SlikaURL;
    pOpis.textContent = najPokemon.Ime;
    
    divGlavniNajjaci.appendChild(divPrikaz);
    divPrikaz.appendChild(pOpis);
    divPrikaz.appendChild(imgPokemon);
});

