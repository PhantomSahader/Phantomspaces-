const button = document.getElementById("surpriseBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

button.addEventListener("click", () => {
    hiddenMessage.classList.add("show");

    button.innerText = "❤️";
});