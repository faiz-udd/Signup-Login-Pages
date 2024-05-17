document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Basic validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert('Login successful!');
        // Redirect or perform other login actions here
    } else {
        alert('Please fill in both fields');
    }
})
