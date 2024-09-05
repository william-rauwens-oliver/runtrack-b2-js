function myUpperCase(str) {
    if (typeof str === 'string') {
        return str.toUpperCase();
    } else {
        return 'Le paramètre doit être une chaîne de caractères';
    }
}

let testString = "bonjour le monde";
let result = myUpperCase(testString);

document.getElementById('result').textContent = result;
