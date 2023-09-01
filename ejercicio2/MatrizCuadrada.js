function matrizCuadrada(matriz){
    const filas = matriz.length;

    for(let i = 0; i<filas; i++){
        if(matriz[i].length !== filas){
            return false
        }
    }
    return true
}


const matriz = [
    [7,12,1],
    [8,33,23],
    [7],
    [2,3,5,11]  // debe retornar falso
]

const matrizCuadradi= [
    [9,2,7],
    [5,1,3],
    [4,15,5] //debe retornar verdadero
]

console.log(matrizCuadrada(matrizCuadradi))