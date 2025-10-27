import { Carro } from "./classe.js";

const info = document.getElementById("info");
const BtnAcelerar = document.getElementById("acelerar");
const Btnfrear = document.getElementById("frear");
const statusVel= document.getElementById("status");

const carro = new Carro("Handa", "Civic");

info.textContent = `Carro: ${carro.marca} ${carro.modelo}`;
statusVel.textContent = carro.status();

BtnAcelerar.addEventListener("click", () => {
    carro.acelerar();
    statusVel.textContent = carro.status();
})

Btnfrear.addEventListener("click", ()=>{
    carro.frear();
    statusVel.textContent = carro.status();
})

