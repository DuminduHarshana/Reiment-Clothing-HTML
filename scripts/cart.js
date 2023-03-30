

const checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', () => {
  
  const cartTotal = getCartTotal();
  const cartItems = JSON.stringify(cart);
  const taxRate = 0.1; // Example tax rate
  const taxAmount = (cartTotal * taxRate).toFixed(2);
  const totalAmount = (parseFloat(cartTotal) + parseFloat(taxAmount)).toFixed(2);
  const checkoutUrl = `checkout.html?items=${cartItems}&total=${totalAmount}&tax=${taxAmount}`;
  window.location.href = checkoutUrl;
});
