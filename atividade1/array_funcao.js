let num_A = 2.47;
let num_B = 3.14;
let num_C;

const operacoes = ["soma", "subtracao", "multiplicacao", "divisao"];


/*
    1 2 3
    4 5 6
    7 8 9
*/

let matriz = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9],
];

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linhaMatriz = "";
        console.log(A[i]);
        for(let j = 0; j < A[i].length; j++){
           linhaMatriz += A[i][j] + "/t";
        }
        console.log(linhaMatriz);
    }
}

console.log(matriz);


//imprimir matriz

let capitais = {
    DF: "Brasilia",
    DDD_DF: 61,
    SP: "Sao Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

for (const key in object) {
    //console.log(key + " - " + capitais[key]);
}

function virificarNumeroPar(n){
    if (n % 2 == 0){
        return true;
    }
    return false;
}

console.log(verificarNumeroPar(3));
console.log(verificarNumeroPar(6));