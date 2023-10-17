// DATA

const nome = prompt("Dimmi il tuo nome");
console.log(nome, typeof nome);
const cognome = prompt("Dimmi il tuo cognome");
console.log(cognome, typeof cognome);
const colorePreferito = prompt("Dimmi il tuo colore preferito");
console.log(colorePreferito, typeof colorePreferito);

// LOGIC

const password = `La tua password è ${nome}${cognome}${colorePreferito}21`;
console.log(password);
document.getElementById("password").innerHTML = password;