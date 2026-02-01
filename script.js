// STATE
let expenses = [];

// DOM ELEMENTS (explicit, no magic)
const nameInput = document.getElementById("nameInput");
const amountInput = document.getElementById("amountInput");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

// ADD EXPENSE
function addExpense() {
  const name = nameInput.value.trim();
  const amount = Number(amountInput.value);

  if (!name || amount <= 0 || Number.isNaN(amount)) {
    alert("Enter a valid expense name and amount");
    return;
  }

  const expense = {
    name,
    amount,
  };

  expenses.push(expense);
  renderExpenses();

  nameInput.value = "";
  amountInput.value = "";
}

// RENDER EXPENSES
function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((expense, index) => {
    total += expense.amount;

    const li = document.createElement("li");
    li.textContent = `${expense.name} - ₦${expense.amount}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => deleteExpense(index);

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);
  });

  totalAmount.textContent = total;
}

// DELETE EXPENSE
function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}
