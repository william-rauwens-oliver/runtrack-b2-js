document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-add-student');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        myRegisterStudent(form);
    });
});

function myRegisterStudent(form) {
    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    fetch('request.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        if (result.includes('Student registered successfully')) {
            alert('Student registered successfully!');
            form.reset();
        } else {
            alert('An error occurred. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}
