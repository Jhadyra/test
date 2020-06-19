function repetirValores(arr) {
    var newArr = [];
    for (let i = 0; i < arr.lengh){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}

let repetidos = repetirValores([4, "Ulysses", 42, false])
console.log(repetidos)