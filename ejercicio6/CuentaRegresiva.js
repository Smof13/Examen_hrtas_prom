function cuentaRegresiva(numeroInicial){
    let numeros = [];
    for (let i = 1; i <= numeroInicial; i++){
        numeros.push(i);
    }
    let NumberAlRevez = numeros.reverse()
    return NumberAlRevez
}

console.log(cuentaRegresiva(10))