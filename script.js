// Toggle the menu on small screens when clicking on the menu button
function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}