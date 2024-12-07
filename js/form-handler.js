document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('weddingNoteForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                formStatus.textContent = 'Thank you for your message!';
                form.reset();
            } else {
                formStatus.textContent = 'There was an error. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formStatus.textContent = 'There was an error. Please try again.';
        });
    });
});