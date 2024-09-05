function myAddCount() {
    const countDisplayer = document.getElementById('count-displayer');
    
    let currentCount = parseInt(countDisplayer.textContent, 10);
    
    currentCount++;
    
    countDisplayer.textContent = currentCount;
}

document.getElementById('add-count-btn').addEventListener('click', myAddCount);
