document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('my-fonts').addEventListener('click', () => {
        document.getElementById('my-fonts-card').classList.remove("inactive");
        document.getElementById('buy-fonts-card').classList.add("inactive");
    });
    document.getElementById('buy-fonts').addEventListener('click', () => {
        document.getElementById('buy-fonts-card').classList.remove("inactive");
        document.getElementById('my-fonts-card').classList.add("inactive");
    });
});
