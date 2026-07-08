const popup = document.getElementById("offerPopup");
const closeBtn = document.getElementById("closePopup");

// Close button
closeBtn.addEventListener("click", () => {
    popup.classList.add("hide");
});

// Click outside popup
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.add("hide");
    }
});

// Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        popup.classList.add("hide");
    }
});