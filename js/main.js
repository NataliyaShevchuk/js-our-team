// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0: == DONE
// Creare l’array di oggetti con le informazioni fornite. 
// MILESTONE 1: == DONE
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

const myCard = document.getElementById("#mycard");


const membriTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    }, {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },{
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },{
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },{
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },{
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

console.log(membriTeam[0]);
console.log(membriTeam[1]);
console.log(membriTeam[2]);
console.log(membriTeam[3]);
console.log(membriTeam[4]);
console.log(membriTeam[5]);

// for (let key in membriTeam) {
//     console.log(membriTeam[key]);
// }

for (let i = 0; i < membriTeam.length; i++){

    const membriTeamIndex = membriTeam[i];

    const divEl = document.createElement("div");
    myCard.append(divEl);
    divEl.innerHTML += `${membriTeamIndex.nome}; ${membriTeamIndex.ruolo};`;
    const img = document.createElement("img");
    img.src = "img/" + membriTeamIndex.foto;
    divEl.append(img);

}




//ESERCIZIO LEZIONE

// const userList = [
//     {
//         nome: "Wayne Barnett",
//         ruolo: "Founder & CEO",
//         foto: "wayne-barnett-founder-ceo.jpg"
//     }, {
//         nome: "Angela Caroll",
//         ruolo: "Chief Editor",
//         foto: "angela-caroll-chief-editor.jpg"
//     },{
//         nome: "Walter Gordon",
//         ruolo: "Office Manager",
//         foto: "walter-gordon-office-manager.jpg"
//     },{
//         nome: "Angela Lopez",
//         ruolo: "Social Media Manager",
//         foto: "angela-lopez-social-media-manager.jpg"
//     },{
//         nome: "Scott Estrada",
//         ruolo: "Developer",
//         foto: "scott-estrada-developer.jpg"
//     },{
//         nome: "Barbara Ramos",
//         ruolo: "Graphic Designer",
//         foto: "barbara-ramos-graphic-designer.jpg"
//     }
// ];





/**
 * funzione che cicla su un dato array 
 * e ad ogni ciclo deve invocare un callback function
 * @param {Array} incomingArray
 * @param {function} fnCallback
*/
                                //assegno un nome 
// function forEach (incomingArray, fnCallback) {
//     //ciclo su ogni elemento dell'array
//     for (let i = 0; i < incomingArray.length; i++){
//         const element = incomingArray[i];
//         console.log(i,element.nome);

//         //cosa fare ad ogni ciiclo, lo voglio specificare esternamente
//         fnCallback(element, i, incomingArray); //inserisco degli argomenti che voglio io

//     }
// }

// forEach(userList, function(user){
//     console.log("callback invocata ad ogni ciclo sull'array", user);
// });

// forEach(userList, function(user, i){
//     console.log("altra azione invocata ad ogni ciclo sull'array");
//     console.log("indice" + i + " = " + user.nome);
// });

/**
 * cicla su un array e per ogni elemento dell'array invoca la callbackFunction
 * specificata come argomento 
 * 
 * La callbackFunction riceve a sua volta 3 argomenti 
 * 1° = elemento dell'array all'indice i
 * 2° = indice i dell'array 
 * 3° = array sul quale stiamo ciclando 
 */
// userList.forEach(function(element, i, arrayOriginale){
//     if ( i < 3){
//         console.log("Function forEach degli array", element);
//         user.nome; //nome di ogni singolo utente 
//     }
//     //questa function rapprsenta la nostra callback precedente 
// });

// const numberList = [34, 56, 12, 72, 120];
// const newArray = [];

// numberList.forEach(function (element){
//     newArray.push(element * 2);

// });

/**
 * Il risultato della map deve essere sempre salvato in una variabile 
 * e sarà sempre un array della stessa lunghezza dell'originale 
 * 
 * La callbackFunction deve sempre ritornare un valore. Questo verrà pushato nell'array finale 
 */
//     const nuovoArray = numberList.map(function (element){
//         return{
//             originalNumber: element,
//             newNumber: element * 2
//         } ;
// });

// console.log(numberList);
// console.log(newArray);


// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e
//       con l’iniziale maiuscola.

//       Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

// const listaStringhe = ['pIppo', 'PLUTO', 'Paperino'];

// const listaCorretta = listaStringhe.map((nome) => {
//     return nome.toLowerCase();
// });

// console.log("lista corretta", listaCorretta);

// const listaUfficiale = listaCorretta.map((carattere) =>{
//     return carattere[0].toUpperCase()+carattere.slice(1);
// });

// console.log(listaUfficiale);


// abbiamo un array di oggetti

/*
1 - stampare in html il contenuto dell'array 
2 - aggiungere gli event listener sui pulsanti per andare avanti ed indietro
3 - una variabile globale dove salvare l'indice dell'immagina attualmene attiva
4 - al click sui pulsanti avanti e indietro, aggiorno l'indice e di conseguenza aggiorno l'html mostrando 
l'immagine corrispondente.

*/
