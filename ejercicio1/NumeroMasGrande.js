function obtenerNumeroMayor(matriz){
    let mayorNumero = matriz[0][0];
        for(let i = 0; i<matriz.length; i++){
            for(let j = 0; j<matriz[i].length; j++){
                if(matriz[i][j]>mayorNumero){
                    mayorNumero = matriz[i][j]
                 }
             }
         }
     return mayorNumero;
}

const matriz = [[3,5,2,1],
               [4,9,7,6]
               [12,14,52,1],
               [18,22,99,33]
]

const resultado = obtenerNumeroMayor(matriz)

console.log(resultado);
