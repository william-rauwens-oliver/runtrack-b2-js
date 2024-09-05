function myNearZero(array) {
    let nearZero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (Math.abs(array[i]) < Math.abs(nearZero)) {
            nearZero = array[i];
        }
    }
    return nearZero;
}

function compareNearZero() {
    return myNearZero([3, 8, 4, 2, 5]) === 2 && myNearZero([-1, -4, 2, 5, 6, 9]) === -1;
}

console.log(compareNearZero());
