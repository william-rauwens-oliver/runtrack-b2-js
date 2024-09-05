function myNearZero(array) {
    if (array.length === 0) {
        return null; 
    }

    return array.reduce((nearest, current) => {
        if (nearest === undefined || Math.abs(current) < Math.abs(nearest) || 
           (Math.abs(current) === Math.abs(nearest) && current > nearest)) {
            return current;
        }
        return nearest;
    });
}

console.log(myNearZero([3, 8, 4, 2, 5]));
console.log(myNearZero([-1, -4, 2, 5, 6, 9]));
