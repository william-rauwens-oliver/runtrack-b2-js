document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-search-student');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        mySearchStudent(form);
    });
});

function mySearchStudent(form) {
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();

    fetch(`request.php?${queryString}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
        displayResult(result);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = '<div class="error">Une erreur est survenue. Veuillez réessayer.</div>';
    });
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');

    if (data.error) {
        resultDiv.innerHTML = `<div class="error">${data.error}</div>`;
        return;
    }

    if (data.length === 0) {
        resultDiv.innerHTML = '<div class="error">Aucun étudiant trouvé avec cet email.</div>';
        return;
    }

    let tableHtml = '<table><thead><tr><th>Email</th><th>Nom complet</th><th>Genre</th><th>Promotion</th><th>Date de naissance</th></tr></thead><tbody>';

    data.forEach(student => {
        tableHtml += `<tr>
            <td>${student.email}</td>
            <td>${student.fullname}</td>
            <td>${student.gender}</td>
            <td>${student.grade_name}</td>
            <td>${student.birthdate}</td>
        </tr>`;
    });

    tableHtml += '</tbody></table>';
    resultDiv.innerHTML = tableHtml;
}
