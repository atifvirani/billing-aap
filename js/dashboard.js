// Dashboard JS
window.onload = function() {
    if (!localStorage.getItem("isLoggedIn")) {
        window.location.href = "index.html"; // Redirect to login page if not logged in
    }

    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Product A', 'Product B', 'Product C'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['#34D399', '#3B82F6', '#000000'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html"; // Redirect to login page
}
