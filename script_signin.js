document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.username === username && savedUser.password === password) {
        // Hide the form
        document.getElementById('signinForm').style.display = 'none';

        // Show welcome message
        const welcomeMessage = document.getElementById('welcomeMessage');
        document.getElementById('userDisplay').textContent = savedUser.username;
        welcomeMessage.classList.add('visible');

        // Redirect to homepage/dashboard after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to the home page or dashboard
        }, 2000);
    } else {
        alert('Invalid credentials!');
    }
});
