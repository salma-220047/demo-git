/**
 * Nexora Product Showcase - Interactive Features
 * Demonstrating variables, functions, objects, methods, pop-ups, and events.
 */

// 1. VARIABLES
// Using 'const' for fixed values and 'let' for dynamic ones
const STORE_NAME = "Nexora Lux";
let productPrice = 850.00;
let discountApplied = false;
let userResponse = "";

console.log("--- Initial Variables ---");
console.log("Store Name:", STORE_NAME);
console.log("Product Price:", productPrice);

// Attempting reassignment of a const variable (Required)
try {
    console.log("Attempting to reassign 'STORE_NAME'...");
    STORE_NAME = "New Store Name";
} catch (error) {
    console.error("Const Reassignment Error caught:", error.message);
}

// 2. OBJECTS & METHODS
const featuredProduct = {
    name: "Nexora Chrono Watch",
    price: 850.00,
    availability: "In Stock",

    // Method inside object using 'this'
    updateStatus: function (newStatus) {
        this.availability = newStatus;
        return `Product status updated to: ${this.availability}`;
    }
};

// Accessing properties using Dot and Bracket notation
console.log("Product Name (Dot):", featuredProduct.name);
console.log("Product Price (Bracket):", featuredProduct["price"]);
console.log("Full Object:", featuredProduct);


// 3. FUNCTIONS

// Function Declaration: Calculate discounted price
function calculateDiscount(price, rate) {
    return price - (price * rate);
}

// Function Expression: Update UI status
const updateDisplayStatus = function (statusText) {
    const statusEl = document.getElementById("interactive-status");
    if (statusEl) {
        statusEl.textContent = statusText;
        statusEl.style.color = "#d2b48c";
    }
};

// Arrow Function: Update Welcome Message
const refreshWelcome = (userName) => {
    const msgEl = document.getElementById("welcome-msg");
    if (msgEl) {
        msgEl.innerHTML = `Welcome back, <span style="color: var(--accent);">${userName}</span>`;
    }
};


// 4. EVENTS & INTERACTIVITY

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const nameInput = document.getElementById("user-name-input");
    const discountBtn = document.getElementById("discount-btn");
    const promoBtn = document.getElementById("promo-btn");
    const productCard = document.getElementById("featured-product-1");
    const productPriceEl = document.getElementById("product-price-1");
    const updateDetailsBtn = document.getElementById("update-product-btn");

    // A. Click Event: Applying Discount
    discountBtn.addEventListener("click", () => {
        // Pop-up: confirm()
        const confirmDiscount = confirm("Would you like to apply a 15% Member Discount?");

        if (confirmDiscount) {
            // Updating dynamic variable
            const newPrice = calculateDiscount(featuredProduct.price, 0.15);
            productPrice = newPrice;

            // Updating DOM
            productPriceEl.textContent = `$${newPrice.toFixed(2)}`;
            productPriceEl.style.color = "#2ecc71"; // Success green

            updateDisplayStatus("15% Discount Applied Successfully!");

            // Pop-up: alert()
            alert("Success! Your exclusive discount is now active.");
        }
    });

    // B. Mouseover Event: Highlighting Product Card (Modify Style)
    productCard.addEventListener("mouseover", () => {
        productCard.style.boxShadow = "0 20px 40px rgba(210, 180, 140, 0.3)";
        productCard.style.borderColor = "var(--accent)";
        updateDisplayStatus("Exploring: " + featuredProduct.name);
    });

    productCard.addEventListener("mouseout", () => {
        productCard.style.boxShadow = "var(--shadow)";
        productCard.style.borderColor = "var(--border)";
    });

    // C. Input Event: Live User Input
    nameInput.addEventListener("input", (e) => {
        const val = e.target.value;
        if (val) {
            refreshWelcome(val);
            updateDisplayStatus("Typing...");
        } else {
            document.getElementById("welcome-msg").textContent = "Welcome to Nexora";
        }
    });

    // D. Trigger Method via Button
    updateDetailsBtn.addEventListener("click", () => {
        // Pop-up: prompt()
        const coupon = prompt("Enter a special coupon code (e.g., 'GOLD'):");

        if (coupon && coupon.toUpperCase() === "GOLD") {
            const resultMsg = featuredProduct.updateStatus("Priority Edition");
            alert(resultMsg + "! You've unlocked the limited edition version.");

            // Reusing updateDisplayStatus function
            updateDisplayStatus("Unlocked Limited Edition Status");

            // Update static content
            document.getElementById("product-name-1").textContent = "Nexora Chrono [Gold Edition]";
        } else {
            alert("Standard edition view active.");
        }
    });
});
