document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        email: email,
        password: password
    };

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(user));

    alert('Sign-up successful!');
    document.getElementById('signupForm').reset();
});
