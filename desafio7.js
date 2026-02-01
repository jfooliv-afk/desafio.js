console.log("Desafio 7 funcionando!");

class Pessoa {
    Nome;
    Peso;
    Altura;

    constructor(nome, peso, altura) {
        this.Nome = nome;
        this.Peso = peso;
        this.Altura = altura;
    }

    calcularIMC() {
        return this.Peso / (this.Altura * this.Altura);
    }

    classificarImc() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Acima do peso";
        } else if (imc >= 30 && imc < 40) {
            return "Obesidade";
        } else {
            return "Obesidade grave";
        }
    }
}

const jose = new Pessoa("José", 70, 1.75);
console.log("IMC José:", jose.calcularIMC().toFixed(2), "-", jose.classificarImc());

const joao = new Pessoa("João", 63, 1.76);
console.log("IMC João:", joao.calcularIMC().toFixed(2), "-", joao.classificarImc());