document.addEventListener('DOMContentLoaded', () => {
    const textDisplayer = document.getElementById('text-displayer');
    const inputText = document.getElementById('input-text');
    const turnTextBold = document.getElementById('turn-text-bold');
    const turnTextItalic = document.getElementById('turn-text-italic');
    const clearText = document.getElementById('clear-text');

    function myDisplayText() {
        textDisplayer.textContent = inputText.value;
    }

    function myTurnBold() {
        textDisplayer.style.fontWeight = 'bold';
    }

    function myTurnItalic() {
        textDisplayer.style.fontStyle = 'italic';
    }

    function myClearText() {
        textDisplayer.style.fontWeight = 'normal';
        textDisplayer.style.fontStyle = 'normal';
    }

    inputText.addEventListener('input', myDisplayText);
    turnTextBold.addEventListener('click', myTurnBold);
    turnTextItalic.addEventListener('click', myTurnItalic);
    clearText.addEventListener('click', myClearText);
});
