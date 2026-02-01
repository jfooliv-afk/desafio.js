console.log("Desafio 6 funcionando!");


class Carro {
    marca;  
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm; // litros por km
    }

    CalcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
    }
}

// criação do objeto fora da classe
const uno = new Carro("Fiat", "Preto", 1/15); // 1 litro a cada 15 km
console.log(uno.CalcularGastoDePercurso(80, 5.79).toFixed(2));
const palio = new Carro("Fiat", "Vermelho", 1/12); // 1 litro a cada 12 km
console.log(palio.CalcularGastoDePercurso(80, 5.79).toFixed(2));


