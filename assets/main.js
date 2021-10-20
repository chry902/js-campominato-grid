
let utente = "";
//crea un input per selezionare la difficolta 


//selezionare un elemento dalla DOM continer

const container = document.querySelector(`.container`)


//genera una griglia da 64 elementi con un ciclo
for (let i = 0; i <= 100; i++) {
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

        this.StyleSheet.backgroundColor = `green`;


    })

}




















