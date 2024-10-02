let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  totalPrice = cart.reduce((total, item) => total + item.price, 0);
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>No items in cart.</li>';
  }
}

function checkout() {
  const customerName = document.getElementById('customer-name').value;
  const customerEmail = document.getElementById('customer-email').value;

  if (!customerName || !customerEmail) {
    alert('Please enter your name and email before checking out.');
    return;
  }

  let orderDetails = '';
  cart.forEach((item) => {
    orderDetails += `${item.name} - $${item.price.toFixed(2)}\n`;
  });

  // Send email via EmailJS
  emailjs.send(service_cojca1l, templet_1ho3vzm, {
    customer_name: customerName,
    customer_email: customerEmail,
    order_details: orderDetails,
    total_price: totalPrice.toFixed(2)
  })
  .then((response) => {
    alert('Order placed successfully! A confirmation email will be sent.');
    console.log('SUCCESS!', response.status, response.text);
    cart = []; // Clear cart
    updateCart(); // Update cart display
  }, (error) => {
    alert('Failed to send order. Please try again.');
    console.log('FAILED...', error);
  });
}

