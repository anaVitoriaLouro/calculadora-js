// variáveis
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

// Contrução da Calculadora
class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText // valores impressos na tela
        this.currentOperationText = currentOperationText  // valores impressos na tela
        this.currentOperation = "" // valores digitados pelo usuário
    }

    // adicionando dígitos no visor da calculadora
    addDigit(digit) {
        // Checando se a operação atual ja tem um ponto
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit
        this.updateScreen();
    }

    // Processando todas as operações da calculadora
    processOperation(operation) {

        // Selecionando valores atuais e anteriores
        let operationValue;
        const previous = +this.previousOperationText.innerText;
        const current = +this.currentOperationText.innerText;

        //verificando qual operação esta sendo executada
        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }

    }

    // Mudando valores no visor da calculadora na operação atual
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {

        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // Se o valor for 0, adiciona o valor atual
            if (previous === 0) {
                operationValue = current;
            }

            // Tranforma o valor atual em anterior
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }
}


const calc = new Calculator(previousOperationText, currentOperationText);

// criando o evento para os botões
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // selecionando o texto nos botões
        const value = e.target.innerText;

        // separando botões de números e operações
        if (+value >= 0 || value === ".") {
            calc.addDigit(value); //numeros
        } else {
            calc.processOperation(value); //operações
        }
    });
});