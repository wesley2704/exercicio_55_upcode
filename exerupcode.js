/*Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
elemento minimax, mostrando também sua posição*/




M = [[10, 2, 3, 4, 5, 600, 7, 8, 9, 10],
[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
[31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
[41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
[51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
[71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
[81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
[91, 92, 93, 94, 5, 96, 97, 98, 99, 100]]

let menor = 1000;
let maior = 0;
let posicao = 0;
let posicaominmax = 0;

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
        if (M[i][j] > maior) {
            maior = M[i][j];
            posicao = i;
        }
    }
}
for (let k = 0; k < 50; k++) {
    if (M[posicao][k] < menor) {
        menor = M[posicao][k]
        posicaominmax = k
    }

}

console.log("O maior numero da matriz é " + maior + " e sua posição dentro do vetor é: " + posicao + "º");
console.log("o menor numero é ", + menor + " o minimax esta na posição ", + posicaominmax );