const addToCartBtns = document.querySelectorAll('.card-body .btn-primary');

let cart = [];

const cartDropdown = document.getElementById('cart-dropdown');

const cartItemsContainer = document.getElementById('cart-items');
window.addEventListener("beforeunload", function() {
    localStorage.clear();
  });
  
function addToCart(item) {
    cart.push(item);

    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    updateCartDropdown();

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(`Added ${item.name} to cart. Total cost: $${getCartTotal()}`);
}

function getCartTotal() {
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }
    return total.toFixed(2);
}

function updateCartDropdown() {
    cartItemsContainer.innerHTML = '';

    for (let item of cart) {
        const listItem = document.createElement('div');
        listItem.classList.add('dropdown-item');
        listItem.textContent = `${item.name}: $${item.price}`;
        cartItemsContainer.appendChild(listItem);
    }

    if (cart.length === 0) {
        const listItem = document.createElement('div');
        listItem.classList.add('dropdown-item', 'text-muted');
        listItem.textContent = 'Cart is empty';
        cartItemsContainer.appendChild(listItem);
    }
}

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartDropdown();
}

addToCartBtns.forEach((addToCartBtn) => {
    addToCartBtn.addEventListener('click', () => {
        const card = addToCartBtn.closest('.card');

        const itemName = card.querySelector('.card-title').textContent;
        const itemPrice = parseFloat(card.querySelector('.card-text').textContent.slice(1));


        const item = {
            name: itemName,
            price: itemPrice
        };


        addToCart(item);
    });
});

$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }