// Get references to all the "Add to Cart" buttons on the page
const addToCartBtns = document.querySelectorAll('.card-body .btn-primary');

// Define a cart array to store the items
let cart = [];

// Get a reference to the cart dropdown element
const cartDropdown = document.getElementById('cart-dropdown');

// Get a reference to the cart items container element
const cartItemsContainer = document.getElementById('cart-items');

// Function to add an item to the cart and update the cart dropdown
function addToCart(item) {
  cart.push(item);

  // Update the cart count in the nav bar
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;

  // Update the cart items in the dropdown menu
  updateCartDropdown();

  // Store the cart items in Local Storage
  localStorage.setItem('cart', JSON.stringify(cart));

  console.log(`Added ${item.name} to cart. Total cost: $${getCartTotal()}`);
}

// Function to calculate the total cost of the items in the cart
function getCartTotal() {
  let total = 0;
  for (let item of cart) {
    total += item.price;
  }
  return total.toFixed(2);
}

// Function to update the cart items in the dropdown menu
function updateCartDropdown() {
  // Clear the existing cart items
  cartItemsContainer.innerHTML = '';

  // Create a new list item for each item in the cart
  for (let item of cart) {
    const listItem = document.createElement('div');
    listItem.classList.add('dropdown-item');
    listItem.textContent = `${item.name}: $${item.price}`;
    cartItemsContainer.appendChild(listItem);
  }

  // Add a message if the cart is empty
  if (cart.length === 0) {
    const listItem = document.createElement('div');
    listItem.classList.add('dropdown-item', 'text-muted');
    listItem.textContent = 'Cart is empty';
    cartItemsContainer.appendChild(listItem);
  }
}

// Check if there are cart items in Local Storage
if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
  updateCartDropdown();
}

// Loop through all the "Add to Cart" buttons and attach a click event listener to each one
addToCartBtns.forEach((addToCartBtn) => {
  addToCartBtn.addEventListener('click', () => {
    // Get a reference to the card element containing the button that was clicked
    const card = addToCartBtn.closest('.card');

    // Get a reference to the item name and price elements in the card
    const itemName = card.querySelector('.card-title').textContent;
    const itemPrice = parseFloat(card.querySelector('.card-text').textContent.slice(1));

    // Create an object to represent the item
    const item = {
      name: itemName,
      price: itemPrice
    };

    // Add the item to the cart array
    addToCart(item);
  });
});
