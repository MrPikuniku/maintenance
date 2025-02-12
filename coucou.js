
const jeSersARien = 42;

const age = 20;
const message = age >= 18 ? 'Majeur' : 'Mineur';
console.log(message);

function coucou() {
  console.log("Coucou, c'est moi, le changement !");
}
coucou();

function coucouPerso(name) {
  console.log(`Coucou, ${name}!`);
}
coucouPerso('SANGARE Mamourou');

function coucouQuote() {
  // eslint-disable-next-line no-console
  console.log('Coucou, je préfère les quotes simples !');
}
coucouQuote();

// TODO: Implémenter une meilleure logique ici
console.log('Test de la règle no-warning-comments');

alert("Alerte peu autorisée sur le serveur "); 
