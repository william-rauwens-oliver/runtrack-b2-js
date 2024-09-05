function mySquareArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * array[i]);
    }
    return newArray;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function compareSquareArray() {
    return mySquareArray([3, 8, 4, 2, 5]).toString() === [9, 64, 16, 4, 25].toString();
}

console.log(compareSquareArray());
