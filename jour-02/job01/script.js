function myChangeBackgroundColor() {
    const htmlElement = document.documentElement;
    const width = window.innerWidth;

    if (width >= 1337) {
        htmlElement.style.backgroundColor = '#ffb703';
    } else if (width >= 505) {
        htmlElement.style.backgroundColor = '#d90429';
    } else {
        htmlElement.style.backgroundColor = '#003049';
    }
}

myChangeBackgroundColor();

window.addEventListener('resize', myChangeBackgroundColor);
