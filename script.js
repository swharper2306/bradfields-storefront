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
  alert(`Your order total is $${totalPrice.toFixed(2)}. Thank you for your purchase!`);
  cart = [];
  updateCart();
}
