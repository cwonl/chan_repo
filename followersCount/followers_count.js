// Initialize the follower count
let followerCount = 0;

// Function to increase the follower count
function increaseCount() {
    followerCount++;
    updateDisplay();
}

// Function to reset the follower count
function resetCount() {
    followerCount = 0; // Reset count to 0
    updateDisplay(); // Update the display to reflect the reset
    alert("Followers count has been reset."); // Alert message
}

// Function to update the displayed follower count
function updateDisplay() {
    document.getElementById('countDisplay').innerText = followerCount;
}