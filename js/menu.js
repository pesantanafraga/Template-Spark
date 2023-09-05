//Menu Responsivo Mobile e Tablet

function menuResponsivo() {
    let x = document.getElementById("menu-nav");
    if (x.className === "menu") {
        x.className += " responsive";
    }
    else {
        x.className = "menu"
    }
}
