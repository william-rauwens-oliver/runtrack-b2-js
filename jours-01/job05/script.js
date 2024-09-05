function myPrimeList(limit) {
    let primeList = [];
    for (let i = 2; i < limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeList.push(i);
        }
    }
    return primeList;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

console.log(arraysEqual(myPrimeList(18), [2, 3, 5, 7, 11, 13, 17]));