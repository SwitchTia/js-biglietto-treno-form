//Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const form = document.querySelector("form");

const nameInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");


const ticket = document.querySelector(".ticket");
//const ticketHeader = document.querySelector(".ticket-header");
//const ticketBody = document.querySelector(".ticket-body");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const km = kmInput.value;
    const age = ageInput.value;

    ticket.innerHTML = `
             <div class="d-flex justify-content-between">
                <div>
                    <h2>Nome passeggero</h2>
                </div>
                <div class="col-8 ">
                    <p>Offerta</p>
                    <p>Carrozza</p>
                    <p>Codice CP</p>
                    <p>Costo biglietto</p>
                </div>
            </div>
            `;
});