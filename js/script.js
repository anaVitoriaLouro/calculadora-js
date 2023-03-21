// variáveis
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {}

// criando o evento para os botões
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // selecionando o texto nos botões
        const value = e.target.innerText;

        // separando botões de números e operações
        if(+value >= 0 || value === ".") {
            console.log(value); //numeros
        } else {
            console.log("Op: " + value); //operações
        }
    });
});