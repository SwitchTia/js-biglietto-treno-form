//Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const form = document.querySelector("form");
//console.log(form);

const nameInput = document.getElementById("name");
console.log(nameInput);
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");


const ticket = document.querySelector(".ticket");
//const ticketHeader = document.querySelector(".ticket-header");
//const ticketBody = document.querySelector(".ticket-body");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const kmStr = kmInput.value;
    const ageStr = ageInput.value;

    const km = parseInt(kmStr);
    const age = parseInt(ageStr);

    let ticketRegPrice = parseFloat(km * 0.21);
    let ticket20 = parseFloat(ticketRegPrice - ((ticketRegPrice * 20) / 100));
    let ticket40 = parseFloat(ticketRegPrice - ((ticketRegPrice * 40) / 100));

    let result = 0;

    if (age < 18) {
        result = ticket20;
    }
    else if (age > 65) {
        result = ticket40;
    }
    else {
        result = ticketRegPrice;
    }
    const ticketPrice = result.toFixed(2);

    ticket.innerHTML = `
             <div class="d-flex justify-content-between">
                <div class="col-4">
                    <div>
                        <h5 class="text-uppercase">Nome passeggero</h5>
                        <p>${name}</p>
                    </div>
                </div>
                <div class="col-8 d-flex justify-content-between ">
                    <div>
                        <p>Offerta</p>
                        <p></p>
                    </div>
                    <div>
                        <p>Carrozza</p>
                        <p></p>
                    </div>
                    <div>
                        <p>Codice CP</p>
                        <p></p>
                    </div>
                    <div>
                        <p>Costo biglietto</p>
                        <p>${ticketPrice} <span>&#8364;<\span></p>
                    </div>
                </div>
            </div>
            `;
});
