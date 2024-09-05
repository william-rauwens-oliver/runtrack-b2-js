function myArraySort(array, sorting) {
    if (sorting === 'asc') {
        return array.sort((a, b) => a - b);
    } else if (sorting === 'desc') {
        return array.sort((a, b) => b - a);
    } else {
        return array;
    }
}

function compareArraySort() {
    return myArraySort([3, 8, 4, 2, 5], 'asc').toString() === [2, 3, 4, 5, 8].toString() &&
           myArraySort([-1, -4, 2, 5, 6, 9], 'desc').toString() === [9, 6, 5, 2, -1, -4].toString();
}

console.log(compareArraySort());
