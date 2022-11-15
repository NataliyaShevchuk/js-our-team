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

const spazioInfo = document.querySelector("#spazio-info");


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

// for (i = 0; i < team.length; i++) {
//     const info = team[i];
//     const infoTeam = document.createElement("div");
//     infoTeam.classList.add("m-3");
//     listaTeamEl.append(infoTeam);
//     infoTeam.innerHTML += `<strong>Name:</strong> ${info.name}; <strong>Role:</strong> ${info.role};`;
//     const imgEl = document.createElement("img");
//     imgEl.src = "img/" + info.photo;
//     infoTeam.append(imgEl);
// }

for ( let i = 0; i < membriTeam.length; i++){
    const team = membriTeam[i];
    const divInfo = document.createElement("div");
    spazioInfo.append(divInfo);
    divInfo.innerHTML += `${team.nome}; ${team.ruolo};`;
}


