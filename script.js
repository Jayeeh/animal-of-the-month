// Initialize the vote counter with a starting value of 3
let counter = 3;

// Function to handle upvoting
function upvote() {
  counter++; // Increment the counter
  // Update the displayed number of votes
  document.getElementById("votes").innerText = counter + " Votes";
}

// Function to handle downvoting
function downvote() {
  counter--; // Decrement the counter
  // Update the displayed number of votes
  document.getElementById("votes").innerText = counter + " Votes";
}
