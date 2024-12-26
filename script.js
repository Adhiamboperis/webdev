// Interactivity for the Contact page button
const showAlertButton = document.getElementById('showAlertButton');

// Check if the button exists before adding event listeners
if (showAlertButton) {
  showAlertButton.addEventListener('click', () => {
    alert('Thank you for visiting! Stay tuned for more updates.');
  });
}
