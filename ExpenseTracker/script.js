const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

let expenseList = [];
let totalAmount = 0;  

function addExpense() {
    const title = document.getElementById('title').value;
    const amount = parseFloat(document.getElementById('amount').value);  // Convert amount to a number
    const date = document.getElementById('date').value;

    if (title === '') {
        alert('Title cannot be null');
        return;
    } else if (isNaN(amount) || amount === '') {
        alert('Amount cannot be null and must be a number');
        return;
    } else if (date === '') {
        alert('Date cannot be null');
        return;
    }

    const expense = {
        title,
        amount,
        date,
    };

    expenseList.push(expense);
    totalAmount += amount;  
    updateExpenseList();
    clearInputs();
    updateTotal();  
}

function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';
}

function updateExpenseList() {
    const expenseTable = document.getElementById('expense-list');
    expenseTable.innerHTML = '';

    expenseList.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.title}</td>
            <td>${expense.amount}</td>
            <td>${expense.date}</td>
            <td><button onclick="deleteExpense(${index})" class="delete-btn">Delete</button></td>
        `;
        expenseTable.appendChild(row);
    });
}

function deleteExpense(index) {
    totalAmount -= expenseList[index].amount;  
    expenseList.splice(index, 1);
    updateExpenseList();
    updateTotal(); 
}

function updateTotal() {
    document.getElementById('total').innerText = totalAmount.toFixed(2);  // Update the total amount display
}
