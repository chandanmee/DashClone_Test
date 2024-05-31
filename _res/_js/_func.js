document.getElementById('authForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Redirect to dashboard.html
    window.location.href = './admin/dashboard.html';
});