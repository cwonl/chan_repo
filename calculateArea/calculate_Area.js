function calculateTotal() {
    // Get the values from the input fields
    let grocery1 = parseFloat(document.getElementById('grocery1').value) || 0;
    let grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
    let grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;

    // Calculate the total expenditure
    let total = calculateExpenditure(grocery1, grocery2, grocery3);

    // Display the total expenditure
    document.getElementById('totalResult').innerText = `Total expenditure on groceries: $${total.toFixed(2)}`;
}

function calculateExpenditure(amount1, amount2, amount3) {
    return amount1 + amount2 + amount3;
}