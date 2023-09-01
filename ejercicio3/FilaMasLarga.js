function obtenerFilaMasLarga(matriz){
    let filaLarga = matriz[0]

    for(let i = 0; i < matriz.length; i++){
        if(matriz[i].length>filaLarga.length){
            filaLarga = matriz[i]
        }
    }
    return filaLarga
}

let matrizMasLarga = [
    [12,1,1],
    [11,1,8,5],
    [2,0],
    [0,8,3,87,2,7,7]
]

console.log(obtenerFilaMasLarga(matrizMasLarga))