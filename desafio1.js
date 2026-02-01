console.log("Desafio funcionando!");



const Precocombustivel  = 5.79;
const KmPorLitro = 10;
const DistanciaEmKm = 1124;



const LitrosConsumidos = DistanciaEmKm / KmPorLitro;
const ValorTotalGasto = LitrosConsumidos * Precocombustivel;
console.log("O valor total gasto em combustível é: R$ " + ValorTotalGasto.toFixed(2));  