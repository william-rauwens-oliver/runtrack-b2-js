function myArraySort(array, sorting) {
    if (sorting === 'asc') {
        return array.slice().sort((a, b) => a - b);
    } else if (sorting === 'desc') {
        return array.slice().sort((a, b) => b - a);
    } else {
        throw new Error('Le paramètre de tri doit être "asc" ou "desc".');
    }
}

console.log(myArraySort([3, 8, 4, 2, 5], 'asc').toString());
console.log(myArraySort([-1, -4, 2, 5, 6, 9], 'desc').toString());
