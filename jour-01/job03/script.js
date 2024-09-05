function myIsInString(haystack, needle) {
    return haystack.includes(needle);
}

console.log(myIsInString("hello World", "llo"));
console.log(myIsInString("hello World", "rele"));
