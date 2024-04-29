const billItems = {};

function addItem(name, price) {
  const quantity = prompt(`Enter quantity for ${name}:`);
  if (quantity === null || quantity === '') return;

  const totalPrice = price * parseInt(quantity);
  const item = `${name} (${quantity}) - ₹${totalPrice.toFixed(2)}`;

  if (billItems[name]) {
    billItems[name].quantity += parseInt(quantity);
    billItems[name].totalPrice += totalPrice;
  } else {
    billItems[name] = {
      quantity: parseInt(quantity),
      totalPrice: totalPrice
    };
  }

  displayBill();
}

function displayBill() {
  const billItemsList = document.getElementById('billItems');
  billItemsList.innerHTML = '';

  let total = 0;
  for (const [name, details] of Object.entries(billItems)) {
    const listItem = document.createElement('li');
    listItem.textContent = `${name} (${details.quantity}) - ₹${details.totalPrice.toFixed(2)}`;
    billItemsList.appendChild(listItem);

    total += details.totalPrice;
  }

  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total: ₹${total.toFixed(2)}`;
}
