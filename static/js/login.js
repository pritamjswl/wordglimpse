document.addEventListener('DOMContentLoaded', () => {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            document.querySelector('#email').classList.remove('is-invalid');
            document.querySelector('#password').classList.remove('is-invalid');
            document.querySelector('#emailError').classList.add('d-none');
            document.querySelector('#passwordError').classList.add('d-none');
            document.querySelector('#authError').classList.add('d-none');
        });
    });
    document.querySelector('form').addEventListener('submit', async function(e) {
        e.preventDefault();
        // Get form data
        let formData = new FormData(this);
        // Send data to the server
        let response = await fetch('/validate_login', {
            method: 'POST',
            body: formData
        });
        // Get the response as JSON
        let errors = await response.json();
        // If no errors, submit the form
        if (errors.length === 0) {
            this.submit();
        } else {
            // Handle errors
            errors.forEach(error => {
                for (let field in error) {
                    if (field == 'email') {
                        document.querySelector('#email').classList.add('is-invalid');
                        document.querySelector('#emailError').classList.remove('d-none');
                        document.querySelector('#emailError').innerHTML = error[field];
                    }
                    if (field == 'password') {
                        document.querySelector('#password').classList.add('is-invalid');
                        document.querySelector('#passwordError').classList.remove('d-none');
                        document.querySelector('#passwordError').innerHTML = error[field];
                    }
                    if (field == 'auth') {
                        document.querySelector('#authError').classList.remove('d-none');
                        document.querySelector('#authError').innerHTML = error[field];
                    }
                }
            });
        }
    });
});