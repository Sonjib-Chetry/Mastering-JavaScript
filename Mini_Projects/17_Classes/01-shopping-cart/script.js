// Get the cart container element that holds the entire cart UI
const cartContainer = document.getElementById("cart-container");
// Get the container where cart items will be rendered
const productsContainer = document.getElementById("products-container");
// Get the container that displays all dessert (product) cards to the user
const dessertCards = document.getElementById("dessert-card-container");
// Reference to the button that toggles cart visibility
const cartBtn = document.getElementById("cart-btn");
// Reference to the button that clears the cart
const clearCartBtn = document.getElementById("clear-cart-btn");
// Span that shows total number of items currently in the cart
const totalNumberOfItems = document.getElementById("total-items");
// Span that shows cart subtotal (before taxes)
const cartSubTotal = document.getElementById("subtotal");
// Span that shows calculated taxes
const cartTaxes = document.getElementById("taxes");
// Span that shows cart grand total (subtotal + taxes)
const cartTotal = document.getElementById("total");
// Span whose text switches between "Show" and "Hide" depending on cart visibility
const showHideCartSpan = document.getElementById("show-hide-cart");
// Flag to track whether the cart is currently displayed
let isCartShowing = false;

// Array of product objects that make up the dessert catalog
const products = [
  {
    id: 1, // Unique identifier for the product
    name: "Vanilla Cupcakes (6 Pack)", // Name shown to the user
    price: 12.99, // Retail price of the product
    category: "Cupcake", // Category used for filtering/display
  },
  {
    id: 2,
    name: "French Macaron",
    price: 3.99,
    category: "Macaron",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    price: 9.99,
    category: "Macaron",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    price: 11.99,
    category: "Macaron",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

// Generate a visual card for each product and append it to the dessertCards container
products.forEach(({ name, id, price, category }) => {
  dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
});

// ShoppingCart class encapsulates all cart-related logic
class ShoppingCart {
  constructor() {
    this.items = []; // Array holding all items added to the cart
    this.total = 0; // Numeric total including taxes
    this.taxRate = 8.25; // Sales tax percentage
  }

  // Adds an item to the cart by its id
  addItem(id, products) {
    const product = products.find((item) => item.id === id); // Find product in catalog
    const { name, price } = product; // Destructure properties we need later
    this.items.push(product); // Add the product to cart items array

    // Build a map of productId -> quantity to track duplicates
    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1; // Increment count or initialize to 1
    });

    // Current count for the product we just added
    const currentProductCount = totalCountPerProduct[product.id];
    // Span element that shows quantity beside a product already in the cart list
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    currentProductCount > 1
      ? (currentProductCountSpan.textContent = `${currentProductCount}x`) // Update quantity if product exists
      : (productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `); // Otherwise render new product row
  }

  // Returns total count of items in the cart
  getCounts() {
    return this.items.length;
  }

  // Clears the entire cart after confirmation
  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty"); // Inform user if cart is empty
      return; // Exit early
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    ); // Confirmation dialog

    if (isCartCleared) {
      this.items = []; // Reset items
      this.total = 0; // Reset total price
      productsContainer.innerHTML = ""; // Clear DOM list
      totalNumberOfItems.textContent = 0; // Reset counters
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
    }
  }

  // Helper to calculate taxes for a given amount
  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2)); // Convert to number with 2 decimals
  }

  // Calculates and updates subtotal, taxes, and total in the DOM
  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0); // Sum of item prices
    const tax = this.calculateTaxes(subTotal); // Tax on subtotal
    this.total = subTotal + tax; // Grand total
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`; // Update subtotal UI
    cartTaxes.textContent = `$${tax.toFixed(2)}`; // Update tax UI
    cartTotal.textContent = `$${this.total.toFixed(2)}`; // Update total UI
    return this.total; // Optionally return the total
  }
}

// Instantiate a new cart instance
const cart = new ShoppingCart();
// HTMLCollection of all "Add to cart" buttons
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

// Convert HTMLCollection to array and attach click listeners
[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), products); // Add item using its button id
    totalNumberOfItems.textContent = cart.getCounts(); // Update total item count
    cart.calculateTotal(); // Recalculate totals
  });
});

// Toggle cart visibility when cartBtn is clicked
cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing; // Flip the boolean flag
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show"; // Update label
  cartContainer.style.display = isCartShowing ? "block" : "none"; // Show or hide cart in DOM
});

// Bind clearCart method to clearCartBtn click, preserving "this" context
clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
