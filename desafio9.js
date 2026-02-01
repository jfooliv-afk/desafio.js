//crie  um programa que leia um array de números e retorne um novo array contendo apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < numeros.length; i++) {
   const numero = numeros[i];
   if (numero % 2 === 0) {
    console.log(numero)
   }
}



