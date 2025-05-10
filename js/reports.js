// Reports JS
function exportToPDF() {
    const doc = new jsPDF();
    doc.text("Billing Aap Report", 10, 10);
    doc.save('billing-aap-report.pdf');
}

function exportToExcel() {
    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    const ws = XLSX.utils.aoa_to_sheet([["Customer Name"], ...customers.map(c => [c])]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customers");
    XLSX.writeFile(wb, "customers.xlsx");
}
