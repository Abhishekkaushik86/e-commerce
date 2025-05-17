function addToCart() {
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const product = {
    id: 1,
    name: 'New Balance Sneakers',
    price: 3000,
    quantity: quantity
  };

  // Retrieve existing cart or initialize
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if product already in cart
  const existingProductIndex = cart.findIndex(item => item.id === product.id);
  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += quantity;
  } else {
    cart.push(product);
  }

  // Save back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show success message
  const message = document.getElementById('cartMessage');
  message.textContent = `${product.name} added to cart! (${quantity})`;
  setTimeout(() => message.textContent = '', 3000);
}
