// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

console.log(randomNumber);

//  funções
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide");
        screen2.classList.remove("hide");
        
        let dePrimeira = xAttempts == 1;
        dePrimeira ? screen2.querySelector("h2").innerText = `Acertou de primeira!` : screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`;
    }

    inputNumber.value = "";
    xAttempts++;
    console.log(xAttempts);
}

function handleResetClick() {

    toggleScreen();
    xAttempts = 1;

}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

//  Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);


