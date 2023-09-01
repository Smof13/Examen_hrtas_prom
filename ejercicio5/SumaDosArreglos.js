let array1 = [1,2,3,4]
let array2 = [5,6,7,8]

function suma (array1,array2){
    let suma = [];

    for(let i = 0; i <= array1.length; i++){
        suma.push(array1[i]+array2[i])
    }
    return suma
}
console.log(suma(array1,array2))