// Customer Management JS
document.getElementById("customer-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("customer-name").value;
    if (name) {
        let customers = JSON.parse(localStorage.getItem("customers")) || [];
        customers.push(name);
        localStorage.setItem("customers", JSON.stringify(customers));
        renderCustomers();
    }
});

function renderCustomers() {
    const customerList = JSON.parse(localStorage.getItem("customers")) || [];
    const customerDiv = document.getElementById("customer-list");
    customerDiv.innerHTML = '';
    customerList.forEach((customer, index) => {
        const customerItem = document.createElement("div");
        customerItem.textContent = customer;
        customerDiv.appendChild(customerItem);
    });
}

window.onload = renderCustomers;
