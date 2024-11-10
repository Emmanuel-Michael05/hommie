// Function to handle adding items to cart
function addToCart(jerseyName) {
    alert(`${jerseyName} has been added to your cart!`);
}

// Handle form submission for booking
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your booking has been confirmed! Thank you for choosing Hommies Touch.");
});
