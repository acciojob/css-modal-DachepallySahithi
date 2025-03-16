// Get the modal and buttons
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

// Open the modal when the button is clicked
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
//your JS code here. If required.
// Get the modal and buttons
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

// Open the modal when the button is clicked
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
