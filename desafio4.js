console.log("Desafio 4 funcionando!");

const Peso = 66;
const altura = 1.76;
const imc = Peso / Math.pow(altura, 2);

console.log(imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
    console.log("Obesidade");
} else {
    console.log("Obesidade grave");
}
