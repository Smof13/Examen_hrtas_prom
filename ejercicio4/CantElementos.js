let matriz1 = [
    [2,6,1],
    [9,2,7],
    [4,2,6],
    [2,7,2,3]
]

function obtenerCantidad(item, items) {
    let contador = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            if (item === items[i][j]) { 
                contador = contador + 1;
            }
        }
    }
    return contador;
    }

console.log(obtenerCantidad(2,matriz1))