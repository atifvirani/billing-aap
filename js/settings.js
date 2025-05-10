// Settings JS
document.getElementById("settings-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const businessName = document.getElementById("business-name").value;
    const logoFile = document.getElementById("logo").files[0];

    if (businessName) {
        localStorage.setItem("businessName", businessName);
    }

    if (logoFile) {
        const reader = new FileReader();
        reader.onload = function (event) {
            localStorage.setItem("logo", event.target.result);
        };
        reader.readAsDataURL(logoFile);
    }
});
