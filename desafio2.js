console.log("Desafio 2 funcionando!");





const PrecoEtanol = 5.79;
const PrecoGasolina = 6.66;
const KmPorLitro = 10;
const DistanciaEmKm = 124;
const TipoCombustivel = "gasolina"; // ou "etanol"

const LitrosConsumidos = DistanciaEmKm / KmPorLitro;

if (TipoCombustivel === "etanol") {
    const ValorTotalGasto = LitrosConsumidos * PrecoEtanol;
    console.log(ValorTotalGasto.toFixed(2));
} else {
    const ValorTotalGasto = LitrosConsumidos * PrecoGasolina;
    console.log(ValorTotalGasto.toFixed(2));
}







