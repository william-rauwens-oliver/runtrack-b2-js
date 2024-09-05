function myArraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(myArraySum([4, 24, 52, 14, 32, 56]) === 182);