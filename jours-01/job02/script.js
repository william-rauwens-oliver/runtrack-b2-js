function myCountChar(haystack, needle) {
    var count = 0;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            count++;
        }
    }
    return count;
}
console.log(myCountChar("hello World", "o"));