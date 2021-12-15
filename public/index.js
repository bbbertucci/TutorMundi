var stars = 0;

function fill_stars(id) {
    const num = id[4];
    for(let i = 1; i < 6; ++i) {
        star = document.getElementById("star" + i);
        if(i <= num) {
            star.className = "filled";
            stars = i;
        } else {
            star.className = "empty";
        }
    }

    const continue_button = document.getElementById("confirmar");
    continue_button.className = "confirmar-filled";
    console.log("hi");
}

function send_stars(className) {
    if(className == "confirmar-filled") {
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                num_stars: stars
            })
        });    
    }
}