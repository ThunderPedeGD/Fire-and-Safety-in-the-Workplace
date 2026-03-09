function toggleMenu() {
    var menu = document.getElementById("settingsMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Close menu if user clicks outside
window.onclick = function(event) {
    if (!event.target.closest('.menu-container')) {
        document.getElementById("settingsMenu").style.display = "none";
    }
}