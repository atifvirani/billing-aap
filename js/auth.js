document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy credentials for demonstration
    const validUsername = "admin";
    const validPassword = "admin123";

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid credentials");
    }
});
