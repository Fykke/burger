function disable(name, id) {
    if (document.querySelector(String(name)).style.display == "none") {
        document.querySelector(String(name)).style.display = "block"
        document.getElementById(id).style.boxShadow = '0px 0px 35px 1px rgb(43, 167, 6), 0px 0px 20px 3px inset rgb(43, 167, 6)';
        document.getElementById(id).style.border = 'rgb(43, 167, 6) 2px solid';
        document.getElementById(id).style.color = 'rgb(43, 167, 6)';
    }
    else {
        document.querySelector(String(name)).style.display = "none"
        document.getElementById(id).style.boxShadow = '0px 0px 35px 1px rgb(255, 43, 28), 0px 0px 20px 3px inset rgb(255, 43, 28)';
        document.getElementById(id).style.border = 'rgb(255, 43, 28) 2px solid';
        document.getElementById(id).style.color = 'rgb(255, 43, 28)';
    }
}