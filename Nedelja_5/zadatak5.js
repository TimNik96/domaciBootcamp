import { pokemoni } from './nizovi.js';
import { najjaciPokemon, prikaziPokemone as prikazP, prikaziPobednika as prikaziPob } from './funkcije.js';

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

najjaciPokemon(pokemoni);

prikaziPokemone.addEventListener('click', () => {
    prikazP(pokemoni, divGlavniNiz);
});

prikaziPobednika.addEventListener('click', () => {
    prikaziPob(pokemoni, divGlavniNajjaci);
});