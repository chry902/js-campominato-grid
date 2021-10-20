//crea un input per selezionare la difficolta 
//let livello = prompt(`selziona la difficoltà `);

let livello = document.getElementById(`livello`);
let esegui = document.getElementById(`esegui`);



esegui.addEventListener(`click`, function () {




})



generaGriglia(livello)

//genera una griglia con un ciclo
function generaGriglia(livello) {
    let numeroCelle;

    if (livello == 1) {
        numeroCelle = 100;
    } else if (livello == 2) {
        numeroCelle = 81;
    } else {
        numeroCelle = 49;
    }

    console.log(numeroCelle)

    //selezionare un elemento dalla DOM continer

    const container = document.querySelector(`.container`)

    for (let i = 0; i < numeroCelle; i++) {
        //let element = `<divEL class= "grid_cell grid_cell--${i}"> ${i}</divEL>`;
        //  section.insertAdjacentHTML("beforeend", element);



        //crea un elemento DOM da menttere nella grilia (cella)
        const divEl = document.createElement(`div`);



        //aggiungi una classe all'elemento appena creato
        divEl.className = `grid_cell`;
        divEl.innerHTML = `${i}`;

        //appendi l'elemento creato prima al container 
        container.append(divEl);

        //attacca un event listner a ciascun elemento creato nel ciclo
        divEl.addEventListener(`click`, function () {

            this.style.backgroundColor = `green`;


        })

    }
}



















