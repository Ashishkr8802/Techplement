// Function to show the modal with the course name
document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const closeBtn = document.getElementById("close-btn");

    // Show modal when a buy button is clicked
    buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const courseName = button.previousElementSibling.previousElementSibling.textContent;
            modalMessage.textContent = `You have successfully bought the ${courseName} course!`;
            modal.style.display = "flex";
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
