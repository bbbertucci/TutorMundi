function fill_stars(id) {
    let num = id[4];
    for(let i = 1; i < 6; ++i) {
        star = document.getElementById("star" + i);
        if(i <= num) {
            star.className = "filled";
        } else {
            star.className = "empty";
        }
    }

    continue_button = document.getElementById("confirmar");
    continue_button.className = "confirmar-filled";
}